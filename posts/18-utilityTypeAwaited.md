# 🧠 Easy Peasy TypeScript – #18 Utility Type: Awaited

Já se perguntou como lidar com tipos de promessas de forma mais precisa no TypeScript? Com o Utility Type Awaited, você pode extrair o tipo retornado de uma Promise de forma automática.

Com o Awaited<Type>, você pode criar um novo tipo que representa o valor retornado de uma Promise, facilitando a manipulação e tipagem de funções assíncronas.

No exemplo abaixo, temos uma função assíncrona que retorna uma Promise com um objeto do tipo User. Utilizamos o Awaited para obter o tipo do objeto retornado pela Promise.

💡 Onde esse recurso brilha:

✅ Extração dos tipos de valores retornados por Promises
✅ Facilita a tipagem de funções assíncronas
✅ Mais segurança na manipulação de valores assíncronos

Link para a documentação: [https://www.typescriptlang.org/docs/handbook/utility-types.html#awaitedtype]

Espero que esse conteúdo tenha sido útil para você! Se tiver alguma dúvida ou sugestão, deixe nos comentários. Não esqueça de compartilhar com outros devs que possam se beneficiar desse conhecimento. 🚀

#typescript #frontend #devtips #vidadedev #fullstack #programação #programming #backend #javascript #devlife

## Código
```
type User = {
  name: string;
  age: number;
};

async function getUser(): Promise<User> {
  return { name: "Alice", age: 30 };
}

type AwaitedUser = Awaited<ReturnType<typeof getUser>>;

const user: AwaitedUser = { name: "Bob", age: 25 };

console.log(user);
``` 