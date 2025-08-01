# 🧠 Easy Peasy TypeScript – #27 Overload Signatures

Já se perguntou como lidar com funções que podem ter diferentes assinaturas de chamada no TypeScript? Com as Overload Signatures, você pode definir diferentes formas de chamar uma função com base nos tipos de parâmetros.

Nas Overload Signatures, você declara várias assinaturas para a mesma função, permitindo que o TypeScript decida qual implementação usar com base nos argumentos passados.

No exemplo abaixo, temos uma função "format" que pode receber diferentes tipos de parâmetros e retornar strings formatadas de acordo com cada tipo.

💡 Onde esse recurso brilha:

✅ Possibilidade de ter diferentes implementações de uma função
✅ Clareza na tipagem e no uso da função
✅ Mais segurança na chamada de funções com tipos variados

E aí dev, o que achou desse recurso do TypeScript? Compartilhe sua opinião nos comentários! 👇🏼

Link para a documentação: [https://www.typescriptlang.org/docs/handbook/2/functions.html#function-overloads]

#typescript #frontend #devtips #vidadedev #fullstack #programação #programming #backend #javascript #devlife

## Código

```typescript
function format(value: string): string;
function format(value: number): string;
function format(value: boolean): string;

function format(value: string | number | boolean): string {
  if (typeof value === "string") {
    return `String: ${value}`;
  } else if (typeof value === "number") {
    return `Number: ${value}`;
  } else {
    return `Boolean: ${value}`;
  }
}

console.log(format("Hello"));    // Output: String: Hello
console.log(format(42));         // Output: Number: 42
console.log(format(true));       // Output: Boolean: true
```