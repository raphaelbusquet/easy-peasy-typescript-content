# 🧠 Easy Peasy TypeScript – #16 Utility Type: Parameters

Você já precisou extrair os tipos dos parâmetros de uma função em TypeScript? O Utility Type Parameters é a ferramenta perfeita para essa tarefa.

Com o Parameters<Type>, você pode criar um tipo que representa os tipos dos parâmetros de uma função, permitindo uma tipagem mais precisa e segura.

No exemplo abaixo, temos uma função greet que recebe um nome e uma idade como parâmetros. Utilizamos o Parameters para extrair os tipos desses parâmetros e criar um novo tipo Params.

💡 Onde esse recurso brilha:

✅ Extração dos tipos dos parâmetros de uma função
✅ Melhoria na tipagem de funções com parâmetros dinâmicos
✅ Facilidade na manipulação e reutilização dos tipos dos parâmetros

Deixa aquele like se curtiu esse recurso! 👇🏼💪🏼

Link para a documentação: [https://lnkd.in/dSXssBBt]

hashtag#typescript hashtag#frontend hashtag#devtips hashtag#vidadedev hashtag#fullstack hashtag#programação hashtag#programming hashtag#backend hashtag#javascript hashtag#devlife

## Código
```
type GreetParams = Parameters<(name: string, age: number) => void>;

function greet(name: string, age: number) {
  console.log(`Hello, ${name}! You are ${age} years old.`);
}

const params: GreetParams = ["John", 30];

greet(...params);
```