# 🧠 Easy Peasy TypeScript – #11 Utility Type: Omit

O TypeScript nos fornece uma série de tipos utilizáveis para facilitar transformações de tipos comuns. Vos apresento os Utility Types. 

Esses Utility Types estão disponíveis globalmente. E hoje vamos falar do Omit. 

Imagine que você queira construir um tipo específico pegando todas as propriedades de outro tipo mas excluindo uma propriedade específica (ou "omitindo-a"). 

Para isso usamos o Utility Type Omit<Type, Key>: 

Onde "Type" é o tipo de onde você herda todas as propriedades e "Key" é a propriedade que você quer omitir.

Veja o exemplo da imagem para ficar ainda mais claro:

Temos o TodoPreview herdando as propriedades do tipo "Todo", mas excluindo a propriedade "description", visto que é apenas uma preview e não necessita dessa propriedade. E assim por diante... 

E aí dev, afinal TypeScript não é nada difícil não é? 👇🏼

#typescript #frontend #devtips #vidadedev #fullstack #programação #programming #backend #javascript #devlife

## Código
```
interface Todo {
  title: string;
  description: string;
  completed: boolean;
  createdAt: number;
}

type TodoPreview = Omit<Todo, "description">;

const todo: TodoPreview = {
  title: "Clean room",
  completed: false,
  createdAt: 1615544252770
};

todo;

type TodoInfo = Omit<Todo, "completed" | "createdAt">;

const todoInfo: TodoInfo = {
  title: "Pick up kids",
  description: "Kindergarten closes at 5pm"
};

todoInfo;

```