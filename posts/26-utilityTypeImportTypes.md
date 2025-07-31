# 🧠 Easy Peasy TypeScript – #26 Utility Type: Import Types

Você já se perguntou como importar tipos de outros arquivos no TypeScript de forma eficiente? Com o Utility Type Import Types, você pode fazer isso de maneira simples e direta.

Com o Import Types, você pode importar tipos de outros arquivos sem a necessidade de importar o código todo. Isso facilita a organização e reutilização de tipos em diferentes partes do seu projeto.

No exemplo abaixo, temos um tipo User importado de um arquivo separado "types.ts" utilizando o Import Types para facilitar a tipagem em outro arquivo.

💡 Onde esse recurso brilha:

✅ Organização e reutilização de tipos em diferentes arquivos
✅ Simplificação na importação de tipos sem o código associado
✅ Melhoria na legibilidade e organização do projeto

E aí dev, o que achou desse recurso do TypeScript? Compartilhe sua opinião nos comentários! 👇🏼

Link para a documentação: [https://www.typescriptlang.org/docs/handbook/module-resolution.html#import-types]

#typescript #frontend #devtips #vidadedev #fullstack #programação #programming #backend #javascript #devlife

## Código

**types.ts**
```typescript
export type User = {
  name: string;
  age: number;
  email: string;
};
```

**index.ts**
```typescript
type ImportedUser = import("./types").User;

const user: ImportedUser = {
  name: "Alice",
  age: 30,
  email: "alice@example.com"
};

console.log(user);
```