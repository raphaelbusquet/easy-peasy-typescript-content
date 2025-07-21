# 🧠 Easy Peasy TypeScript – #20 Utility Type: Exclude

Você já teve a necessidade de criar um novo tipo excluindo determinadas propriedades de um tipo existente? Com o Utility Type Exclude, você pode fazer isso de maneira simples e eficaz.

Com o Exclude<UnionType, ExcludedMembers>, você pode criar um novo tipo contendo apenas as propriedades que não estão presentes na lista de propriedades excluídas.

No exemplo abaixo, temos um tipo Color que representa uma paleta de cores, e utilizamos o Exclude para criar um novo tipo ColorWithoutBlack excluindo a cor preta da paleta.

💡 Onde esse recurso brilha:

✅ Facilita a criação de tipos com propriedades específicas excluídas;
✅ Aumenta a legibilidade e precisão dos tipos;
✅ Possibilita uma manipulação mais refinada dos tipos.

E aí dev, o que achou desse recurso do TypeScript? Compartilhe sua opinião nos comentários! 👇🏼

Link para a documentação: [https://www.typescriptlang.org/docs/handbook/utility-types.html#excludetypemembers]

#typescript #frontend #devtips #vidadedev #fullstack #programação #programming #backend #javascript #devlife

## Código
```
type Color = "red" | "blue" | "green" | "black" | "white";
type ColorWithoutBlack = Exclude<Color, "black">;

const myColors: ColorWithoutBlack = "red";
console.log(myColors);
```