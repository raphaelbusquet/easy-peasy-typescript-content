# 🧠 Easy Peasy TypeScript – #15 Utility Type: NonNullable

Você já se viu em uma situação em que precisava garantir que uma variável não fosse nula ou indefinida? O Utility Type NonNullable é a solução perfeita para lidar com essa necessidade.

Com o NonNullable<Type>, você pode criar um novo tipo que exclui nulos e indefinidos do tipo original Type.

No exemplo abaixo, temos um tipo que pode conter valores nulos ou indefinidos, e utilizamos o NonNullable para obter um novo tipo sem esses valores indesejados.

💡 Onde esse recurso brilha:

✅ Garantia de valores não nulos em variáveis
✅ Melhoria na segurança e consistência dos dados
✅ Facilidade na manipulação de tipos com valores potencialmente nulos

E aí, dev, já teve a necessidade de utilizar o NonNullable em seus projetos? Compartilhe nos comentários!

Link para a documentação: [https://www.typescriptlang.org/docs/handbook/utility-types.html#nonnullabletype]

#typescript #frontend #devtips #vidadedev #fullstack #programação #programming #backend #javascript #devlife

## Código
```
type NullableString = string | null | undefined;
type NonNullString = NonNullable<NullableString>;

const str: NonNullString = "Hello, TypeScript!";

console.log(str);
```