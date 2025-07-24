# 🧠 Easy Peasy TypeScript – #23 Utility Type: ThisType<T>
Você já se perguntou como tipar corretamente o this dentro de métodos de objetos criados dinamicamente, como com Object.assign ou Object.create?

É aí que entra o poderoso e menos conhecido utility type ThisType<T> do TypeScript!

O que ele faz?

O ThisType<T> permite informar explicitamente qual será o tipo de this dentro de métodos de um objeto. Ele não gera um tipo em si, mas atua como um marcador contextual que o TypeScript entende durante a inferência.

💡 Onde esse recurso brilha:

✅ Quando você está criando objetos dinamicamente
✅ Quando this precisa se referir a um objeto montado com data + métodos
✅ Quando você quer manter tipagem segura sem precisar recorrer a classes

📌 Repare no exemplo abaixo que:

Usamos ThisType<State & Actions> para que os métodos saibam que this é o objeto final.
Sem isso, o TypeScript reclamaria de this.count por não saber o tipo de this.

Link da documentação:[https://www.typescriptlang.org/docs/handbook/utility-types.html#thistypetype]

E aí dev, já conhecia esse uso contextual do ThisType?
Conta aqui nos comentários se já usou ou se vai aplicar em algum projeto! 👇🏼

#typescript #frontend #devtips #vidadedev #fullstack #programação #programming #backend #javascript #devlife

## Código
```
type State = {
  count: number;
};

type Actions = {
  increment(): void;
  decrement(): void;
};

// ThisType<State & Actions> => permite que `this` nos métodos seja State & Actions
const storeDescriptor: {
  state: State;
  actions: Actions & ThisType<State & Actions>;
} = {
  state: {
    count: 0,
  },
  actions: {
    increment() {
      this.count++;
    },
    decrement() {
      this.count--;
    },
  },
};

const store: State & Actions = Object.assign({}, storeDescriptor.state, storeDescriptor.actions);

store.increment();
console.log(store.count); // 1
```