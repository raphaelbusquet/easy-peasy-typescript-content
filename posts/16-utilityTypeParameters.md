# 🧠 Easy Peasy TypeScript – #16 Utility Type: Parameters

Você já precisou extrair os tipos dos parâmetros de uma função em TypeScript? O Utility Type Parameters é a ferramenta perfeita para essa tarefa.

Com o Parameters<Type>, você pode criar um tipo que representa os tipos dos parâmetros de uma função, permitindo uma tipagem mais precisa e segura.

No exemplo abaixo, temos uma função greet que recebe um nome e uma idade como parâmetros. Utilizamos o Parameters para extrair os tipos desses parâmetros e criar um novo tipo Params.

💡 Onde esse recurso brilha:

✅ Extração dos tipos dos parâmetros de uma função
✅ Melhoria na tipagem de funções com parâmetros dinâmicos
✅ Facilidade na manipulação e reutilização dos tipos dos parâmetros

E aí, dev, já teve a necessidade de utilizar o Parameters em seus projetos? Compartilhe nos comentários!

Link para a documentação: [https://www.typescriptlang.org/docs/handbook/utility-types.html#parameterstype]

#typescript #frontend #devtips #vidadedev #fullstack #programação #programming #backend #javascript #devlife

## Código
```
type GreetParams = Parameters<(name: string, age: number) => void>;

function greet(name: string, age: number) {
  console.log(`Hello, ${name}! You are ${age} years old.`);
}

const params: GreetParams = ["John", 30];

greet(...params);
```