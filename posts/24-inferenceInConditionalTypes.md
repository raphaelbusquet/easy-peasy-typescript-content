# 🧠 Easy Peasy TypeScript – #24 Inference in Conditional Types

Você já se perguntou como o TypeScript infere tipos em lógicas condicionais? Com a inferência em Conditional Types, você pode criar tipos dinâmicos e reutilizáveis com base em condições específicas.

Na prática, o TypeScript pode inferir tipos com base em verificações condicionais. Isso é extremamente útil para criar tipos que se adaptam de acordo com os valores de entrada.

No exemplo do código, temos um tipo condicional que verifica se um tipo estende outro, e retorna tipos diferentes com base nisso.

💡 Onde esse recurso brilha:

✅ Criação de tipos adaptáveis com base em condições

✅ Tipagem dinâmica e flexível

✅ Mais segurança na manipulação de tipos condicionais

E aí dev, o que achou desse recurso do TypeScript? Compartilhe comigo nos comentários! 👇🏼

Link para a documentação: [https://www.typescriptlang.org/docs/handbook/2/conditional-types.html]

#typescript #frontend #devtips #vidadedev #fullstack #programação #programming #backend #javascript #devlife

## Código

```
interface Animal {
    live(): void;
  }
  interface Dog extends Animal {
    woof(): void;
  }

  type Example1 = Dog extends Animal ? number : string;

  // type Example1 = number

  type Example2 = RegExp extends Animal ? number : string;

  // type Example2 = string
```
