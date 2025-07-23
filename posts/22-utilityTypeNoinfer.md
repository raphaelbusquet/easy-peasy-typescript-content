# 🧠 Easy Peasy TypeScript – #22 Utility Type: NoInfer

Você já se deparou com situações em que o TypeScript inferia tipos de forma indesejada? Com o Utility Type NoInfer, você pode evitar a inferência automática de tipos em determinadas situações.

Com o NoInfer<Type>, você pode criar um tipo que impede o TypeScript de inferir tipos automaticamente. Isso pode ser útil em casos onde você deseja forçar o TypeScript a tratar um tipo de forma específica.

No exemplo abaixo, temos uma função que recebe um callback genérico e utiliza o NoInfer para garantir que o tipo seja tratado de forma explícita e não inferida automaticamente.

💡 Onde esse recurso brilha:

✅ Evita inferências indesejadas de tipos
✅ Garante que certos tipos sejam tratados de forma específica
✅ Aumenta o controle sobre a tipagem do código

E aí dev, o que achou desse recurso do TypeScript? Compartilhe sua opinião nos comentários! 👇🏼

Link para a documentação: [https://www.typescriptlang.org/docs/handbook/utility-types.html#noinfertype]

#typescript #frontend #devtips #vidadedev #fullstack #programação #programming #backend #javascript #devlife

## Código
```
type NoInfer<T> = [T][T extends any ? 0 : never];

function withCallback<T>(callback: (param: T) => void): void {
  const data: T = {} as NoInfer<T>;
  callback(data);
}

withCallback((data) => {
  console.log(data);
});
```