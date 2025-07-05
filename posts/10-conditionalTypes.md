# 🧠 Easy Peasy TypeScript – #10 Conditional Types

Você sabia que dá pra fazer “if” dentro dos tipos? Com Conditional Types, o TypeScript consegue aplicar lógica condicional durante a inferência de tipos.

Isso te permite escrever tipos dinâmicos e reutilizáveis com lógica aplicada. Eles são como os ternários que já conhecemos (condição ? a : b), mas no mundo dos tipos (primeira imagem).

💡 Usos práticos:

- Criar tipos adaptáveis dependendo da entrada;
- Montar validadores genéricos;
- Filtrar tipos específicos em unions (com infer);
- Criar tipos utilitários (como Exclude, Extract).

🚀 Dica extra:

Você pode combinar extends + infer para extrair partes de tipos (segunda imagem).

É como dar superpoderes ao sistema de tipos. E tudo isso… em tempo de compilação.

Como sempre, link da documentação para você se aprofundar mais no assunto 😉 ( https://lnkd.in/djhnu99i)

#typescript #frontend #devtips #vidadedev #fullstack #programação #programming #backend #javascript #devlife
## Código
```
type IsString<T> = T extends string ? true : false; // Define IsString<T>

type A = IsString<string>;   // true
type B = IsString<number>;   // false
type C = IsString<"Hello">;  // true

type ElementType<T> = T extends (infer U)[] ? U : T;

type A = ElementType<string[]>; // string
type B = ElementType<number>;   // number

```