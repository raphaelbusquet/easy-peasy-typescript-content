# 🧠 Easy Peasy TypeScript – #19 Utility Type: Partial

Já pensou em ter a flexibilidade de criar um tipo com propriedades opcionais a partir de um tipo com propriedades obrigatórias? Com o Utility Type Partial, você pode fazer isso de forma rápida e eficiente.

Com o Partial<Type>, você pode criar um novo tipo contendo as mesmas propriedades do tipo original Type, mas todas elas se tornam opcionais.

No exemplo abaixo, temos um tipo User com propriedades obrigatórias, e utilizamos o Partial para criar um novo tipo UserOptional com todas as propriedades sendo opcionais.

💡 Onde esse recurso brilha:

✅ Facilita a criação de tipos com propriedades opcionais;
✅ Flexibilidade na manipulação e preenchimento de dados;
✅ Aumenta a legibilidade e reutilização de tipos.

E aí dev, o que achou desse recurso do TypeScript? 👇🏼

Link para a documentação: [https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype]

#typescript #frontend #devtips #vidadedev #fullstack #programação #programming #backend #javascript #devlife

## Código
```
type User = {
  name: string;
  age: number;
  email: string;
};

type UserOptional = Partial<User>;

const user1: User = { name: "Alice", age: 30, email: "alice@example.com" };
const user2: UserOptional = { name: "Bob" };

console.log(user1);
console.log(user2);
``` 