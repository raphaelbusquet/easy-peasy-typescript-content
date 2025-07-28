# 🧠 Easy Peasy TypeScript – #25 Key Remapping

Você já se deparou com a necessidade de modificar os nomes das chaves de um objeto em tempo de compilação? Com o recurso de Key Remapping, você pode realizar essa tarefa de forma eficiente e flexível.

Com o Key Remapping, você pode criar novos tipos com chaves dinamicamente modificadas, tornando a manipulação de objetos mais precisa e personalizada.

No exemplo abaixo, temos um tipo User com propriedades padrão, e utilizamos o Key Remapping para adicionar um prefixo "user_" a todas as chaves do objeto.

💡 Onde esse recurso brilha:

✅ Facilidade na criação de tipos com chaves modificadas
✅ Aumento da flexibilidade na manipulação de objetos
✅ Melhoria na legibilidade e organização do código

E aí dev, o que achou desse recurso do TypeScript? Compartilhe sua opinião nos comentários! 👇🏼

Link para a documentação: [https://www.typescriptlang.org/docs/handbook/2/mapped-types.html#key-remapping-in-mapped-types]

#typescript #frontend #devtips #vidadedev #fullstack #programação #programming #backend #javascript #devlife

## Código

```
type User = {
  name: string;
  age: number;
  email: string;
};

type UserWithPrefix = {
  [K in keyof User as `user_${string & K}`]: User[K];
};

const user: UserWithPrefix = {
  user_name: "Alice",
  user_age: 30,
  user_email: "alice@example.com"
};

console.log(user);
```