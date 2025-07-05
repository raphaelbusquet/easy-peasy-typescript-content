# Easy Peasy TypeScript - #7 Mapped Types com Key Remapping 

Você sabia que dá pra transformar os nomes das propriedades de um tipo em tempo de compilação?

Com key remapping, você cria novos tipos com nomes dinamicamente modificados.

Imagine um cenário real (imagem): você tem um FormData, e quer gerar um tipo com prefixo form_ em cada campo, pra mapear com campos reais do DOM ou IDs em HTML.

Isso é poderoso pra gerar APIs internas, traduzir contratos entre sistemas, construir validadores ou até montar estruturas de logs e telemetria.

Já conhecia esse recurso?
Me conta aqui nos comentários👇🏼

Link da documentação [https://lnkd.in/d-mJDsUd]

#typescript #frontend #devtips #vidadedev #fullstack #programação #programming #backend #javascript #devlife

## Código
```
type FormData = {
  name: string;
  email: string;
  age: number;
};

type WithFormPrefix<T> = {
  [K in keyof T as `form_${string & K}`]: T[K];
};

type FormFields = WithFormPrefix<FormData>;

// Resultado:
// type FormFields = {
//   form_name: string;
//   form_email: string;
//   form_age: number;
// }

```