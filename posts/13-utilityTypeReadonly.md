# 🧠 Easy Peasy TypeScript – #13 Utility Type: Readonly

Se você já se deparou com a necessidade de garantir que um objeto não seja modificado após sua criação, o Utility Type Readonly é a ferramenta certa para isso.

Com o Readonly<Type>, você pode criar tipos imutáveis, garantindo que as propriedades não sejam alteradas acidentalmente.

No exemplo abaixo, temos um objeto User que é tipado como Readonly<User>, impedindo qualquer modificação em suas propriedades após a inicialização.

💡 Onde esse recurso brilha:

✅ Garantia de imutabilidade dos dados
✅ Evita bugs relacionados à mutabilidade inesperada
✅ Mais segurança na manutenção do código

E aí dev, o que achou desse recurso do TypeScript? Conte-aqui nos comentários! 👇🏼

Link para a documentação: [https://www.typescriptlang.org/docs/handbook/utility-types.html#readonlytype]

#typescript #frontend #devtips #vidadedev #fullstack #programação #programming #backend #javascript #devlife

## Código
```
type User = {
  name: string;
  age: number;
};

const user: Readonly<User> = {
  name: "Alice",
  age: 30,
};

// Tentativa de modificar uma propriedade resultará em erro
// user.name = "Bob";
// user.age = 25;

console.log(user);
```