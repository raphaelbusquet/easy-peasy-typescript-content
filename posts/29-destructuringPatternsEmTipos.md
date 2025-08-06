# 🧠 Easy Peasy TypeScript – #29 Destructuring Patterns em tipos

Você já se perguntou como desestruturar tipos de forma eficiente no TypeScript? Com os Destructuring Patterns em tipos, você pode extrair propriedades de um objeto de uma maneira concisa e flexível.

Os Destructuring Patterns permitem que você extraia propriedades de um objeto em uma única linha, facilitando o acesso e manipulação de dados em tipos complexos.

No exemplo abaixo, temos um tipo User com várias propriedades, e utilizamos o Destructuring Pattern para extrair as propriedades "name" e "email" em uma única linha.

💡 Onde esse recurso brilha:

✅ Facilidade na extração de propriedades de objetos complexos
✅ Melhoria na legibilidade e organização do código
✅ Mais praticidade na manipulação de dados em tipos

E aí dev, o que achou desse recurso do TypeScript? Compartilhe sua opinião nos comentários! 👇🏼

Link para a documentação: [https://www.typescriptlang.org/docs/handbook/variable-declarations.html#destructuring]

#typescript #frontend #devtips #vidadedev #fullstack #programação #programming #backend #javascript #devlife

## Código

```typescript
type User = {
  name: string;
  age: number;
  email: string;
};

const user: User = {
  name: "Alice",
  age: 30,
  email: "alice@example.com"
};

const { name, email } = user;

console.log(name);  // Output: Alice
console.log(email); // Output: alice@example.com
```