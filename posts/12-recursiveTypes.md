# 🧠 Easy Peasy TypeScript – #12 Recursive Types

Você já precisou criar tipos que se referem a si mesmos de forma recursiva? Com Recursive Types, você pode!

Em situações onde você precisa definir estruturas de dados complexas que se repetem, como árvores, listas encadeadas, ou qualquer tipo de estrutura hierárquica, os Recursive Types são essenciais.

No exemplo abaixo, temos um tipo Node que pode ter filhos que são também do tipo Node. Isso nos permite construir uma estrutura de árvore de forma tipada e segura.

💡 Onde esse recurso brilha:

✅ Modelagem de estruturas de dados complexas
✅ Garantia de consistência e integridade dos dados
✅ Facilidade na manipulação e navegação da estrutura

E aí, dev, já teve a necessidade de usar Recursive Types em seus projetos?

Link para a documentação:(https://www.typescriptlang.org/pt/play/?#example/recursive-type-references)

#typescript #frontend #devtips #vidadedev #fullstack #programação #programming #backend #javascript #devlife

## Código
```
type Node<T> = {
  value: T;
  children: Node<T>[];
};

const tree: Node<number> = {
  value: 1,
  children: [
    {
      value: 2,
      children: [
        {
          value: 3,
          children: []
        },
        {
          value: 4,
          children: []
        }
      ]
    },
    {
      value: 5,
      children: []
    }
  ]
};

console.log(tree);
``` 