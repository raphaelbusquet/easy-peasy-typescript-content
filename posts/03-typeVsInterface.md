# 🧠 Easy Peasy Typescript – #3 Type vs Interface

 Você sabe a diferença entre type e interface no typescript? Quando é necessário utilizar um ou outro?? Segue o fio... 

Ambos servem para tipar objetos, mas têm diferenças estratégicas:

✅ interface foi feita para estruturação — ótima quando você quer herança, extensão e declaração incremental.
✅ type é mais versátil — aceita união (|), interseção (&), tipos primitivos e composição complexa.

Na prática?

Use interface para modelos que representam entidades (como User, Product) e type quando precisar combinar tipos, fazer composição ou lidar com union types.

Na imagem abaixo, usamos interface para estruturar o usuário e type para estender com um papel específico. Clareza, reaproveitamento e flexibilidade.

Te ajudou em algo? Curte pra ajudar mais pessoas!

#typescript #frontend #devtips #vidadedev #fullstack #programação #programming #backend #javascript #devlife

## Código

```
interface User {
  name: string;
  email: string;
}

// Admin herda User e adiciona a propriedade role fixa como 'admin'
type Admin = User & { role: 'admin' };

// Exemplo de uso real
const adminUser: Admin = {
  name: "Maria",
  email: "maria@email.com",
  role: "admin"
};
```