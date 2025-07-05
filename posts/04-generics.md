# 🧠 Easy Peasy Typescript – #4 Generics

Ah, meu querido generics...

Já precisou usar uma função que aceitasse diferentes tipos sem perder a tipagem? Não? Com generics você pode.

Eles permitem escrever código reutilizável e tipado dinamicamente, sem abrir mão da segurança do TypeScript.

👉 Pense em uma função que formata qualquer tipo de dado para exibição (primeira imagem):

Você pode passar um string, number, objeto, que o TypeScript ainda vai te proteger com autocomplete e validações.

Na segunda imagem eu tenho os logs dos valores já formatados e na tipagem de entrada quando chamo a função. Lindo não é? 

Obs.: O método typeof não é tão preciso e retorna 'object' para null e lista. Isso já é uma quirk conhecida do javascript. Para um retorno mais preciso utilize o prototype.

Deixa teu like, namoralzinho.

#typescript #frontend #devtips #vidadedev #fullstack #programação #programming #backend #javascript #devlife

## Código

```
function formatItem<T>(item: T): string {
  return `Valor formateado: ${JSON.stringify(item)} | Tipo: ${typeof item}`;
}

console.log(formatItem(10));
console.log(formatItem("Hello"));
console.log(formatItem(true));
console.log(formatItem({ name: "John", age: 30 }));
console.log(formatItem([1, 2, 3]));
console.log(formatItem(null));

Valor formateado: 10 | Tipo: number
Valor formateado: “Hello” | Tipo: string
Valor formateado: true | Tipo: boolean
Valor formateado: {“name”:“John”,“age”:30} | Tipo: object
Valor formateado: [1,2,3] | Tipo: object
Valor formateado: null | Tipo: object
```