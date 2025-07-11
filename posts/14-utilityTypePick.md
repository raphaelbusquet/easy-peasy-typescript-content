# 🧠 Easy Peasy TypeScript – #14 Utility Type: Pick

Já se deparou com a necessidade de selecionar apenas algumas propriedades de um tipo existente? O Utility Type Pick é a ferramenta ideal para isso.

Com o Pick<Type, Keys>, você pode criar um novo tipo contendo apenas as propriedades especificadas em Keys do tipo original Type.

No exemplo abaixo, temos um tipo User com várias propriedades, e utilizamos o Pick para selecionar apenas "name" e "email" para criar um novo tipo UserInfo.

💡 Onde esse recurso brilha:

✅ Redução da complexidade e tamanho dos tipos
✅ Aumento da legibilidade do código
✅ Facilidade na reutilização de propriedades específicas

E aí dev, o que achou desse recurso do TypeScript? Deixa aqui nos comentários! 👇🏼💪🏼

Link para a documentação: [https://www.typescriptlang.org/docs/handbook/utility-types.html#picktype-keys]

#typescript #frontend #devtips #vidadedev #fullstack #programação #programming #backend #javascript #devlife

## Código
```
type User = {
  name: string;
  age: number;
  email: string;
  isAdmin: boolean;
};

type UserInfo = Pick<User, "name" | "email">;

const user: UserInfo = {
  name: "John Doe",
  email: "john.doe@example.com"
};

console.log(user);
```