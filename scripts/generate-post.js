import fs from 'fs/promises';
import path from 'path';
import dotenv from 'dotenv';
import OpenAI from 'openai';
import { fileURLToPath } from 'url';

dotenv.config();

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY || process.env.OPENAI_API_KEY_GITHUB });

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ROOT = path.resolve(__dirname, '..');
const POSTS_DIR = path.join(ROOT, 'posts');
const META_PATH = path.join(ROOT, 'meta', 'preferred-style.md');
const TEMPLATE_PATH = path.join(ROOT, 'templates', 'model.md');
const TEMAS_PATH = path.join(ROOT, 'suggested-topics.md');

async function loadPostsContent() {
  const files = await fs.readdir(POSTS_DIR);
  const contents = await Promise.all(
    files.map(async (name) => {
      const filePath = path.join(POSTS_DIR, name);
      return await fs.readFile(filePath, 'utf-8');
    })
  );
  return contents.join('\n---\n');
}

async function generatePost() {
  const style = await fs.readFile(META_PATH, 'utf-8');
  const template = await fs.readFile(TEMPLATE_PATH, 'utf-8');
  const topics = await fs.readFile(TEMAS_PATH, 'utf-8');
  const previousPosts = await loadPostsContent();

  const prompt = `Você é o Raphael Busquet, um desenvolvedor fullstack. Com base no estilo a seguir:\n\n${style}\n\nAqui está um modelo base:\n${template}\n\nEsses são exemplos de posts anteriores:\n${previousPosts}\n\nAqui estão temas sugeridos:\n${topics}\n\nEscolha um tema ainda não usado e gere um novo post no mesmo estilo, didático, direto e com exemplo de código TypeScript pronto para print.`;

  const completion = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    messages: [
      {
        role: 'user',
        content: prompt
      }
    ],
    temperature: 0.7,
  });

  const response = completion.choices[0].message.content;

  const topicMatch = response.match(/#.*?Easy Peasy TypeScript\s*[-–]\s*#\d+\s*(.+)/i);
  const rawTitle = topicMatch ? topicMatch[1].trim() : 'newTopic';

  const topicCamelCase = rawTitle
    .replace(/[^a-zA-Z0-9 ]/g, '')
    .split(' ')
    .map((word, index) =>
      index === 0 ? word.toLowerCase() : word[0].toUpperCase() + word.slice(1).toLowerCase()
    )
    .join('');

  const files = await fs.readdir(POSTS_DIR);
  const postNumber = files.length + 1;

  const fileName = `${postNumber}-${topicCamelCase}.md`;
  const filePath = path.join(POSTS_DIR, fileName);

  await fs.writeFile(filePath, response);
  console.log(`✅ New post saved in: ${filePath}`);
}

await generatePost();