# 🧠 Easy Peasy TypeScript – #17 Utility Type: Required

Já se deparou com a necessidade de garantir que todas as propriedades de um tipo sejam obrigatórias? O Utility Type Required é a ferramenta perfeita para isso.

Com o Required<Type>, você pode criar um novo tipo contendo todas as propriedades do tipo original Type, mas tornando-as obrigatórias.

No exemplo abaixo, temos um tipo User com algumas propriedades opcionais, e utilizamos o Required para garantir que todas as propriedades sejam preenchidas.

💡 Onde esse recurso brilha:

✅ Garantia de preenchimento de todas as propriedades
✅ Evita erros relacionados à falta de dados obrigatórios
✅ Mais segurança na manipulação dos tipos

E aí dev, já utilizou o Required em seus projetos? Deixa aqui nos comentários! 👇🏼

Link para a documentação: [https://lnkd.in/daQr_Uk4]

hashtag#typescript hashtag#frontend hashtag#devtips hashtag#vidadedev hashtag#fullstack hashtag#programação hashtag#programming hashtag#backend hashtag#javascript hashtag#devlife

## Código
```
type User = {
  name?: string;
  age?: number;
  email?: string;
};

type RequiredUser = Required<User>;

const user: RequiredUser = {
  name: "Alice",
  age: 30,
  email: "alice@example.com"
};

console.log(user);
```