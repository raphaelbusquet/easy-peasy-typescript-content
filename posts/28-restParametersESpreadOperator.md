# 🧠 Easy Peasy TypeScript – #28 Rest Parameters e Spread Operator

Você já se perguntou como lidar com um número variável de parâmetros em funções no TypeScript? Com os Rest Parameters e o Spread Operator, você pode trabalhar de forma eficiente com listas de parâmetros dinâmicas.

Os Rest Parameters permitem que uma função aceite um número indefinido de argumentos como um array. Já o Spread Operator permite espalhar os elementos de um array como argumentos individuais em uma chamada de função.

No exemplo abaixo, temos uma função "sum" que utiliza o Rest Parameter para aceitar um número variável de argumentos e o Spread Operator para somar todos os valores passados.

💡 Onde esse recurso brilha:

✅ Flexibilidade na passagem de argumentos para funções
✅ Trabalhar com listas de parâmetros dinâmicas de forma eficiente
✅ Mais segurança e clareza na manipulação de argumentos

E aí dev, o que achou desse recurso do TypeScript? Compartilhe sua opinião nos comentários! 👇🏼

Link para a documentação: [https://www.typescriptlang.org/docs/handbook/2/functions.html#rest-parameters]

#typescript #frontend #devtips #vidadedev #fullstack #programação #programming #backend #javascript #devlife

## Código

```typescript
function sum(...values: number[]): number {
  return values.reduce((acc, val) => acc + val, 0);
}

const result = sum(1, 2, 3, 4, 5);
console.log(result); // Output: 15
```