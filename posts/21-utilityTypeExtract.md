# 🧠 Easy Peasy TypeScript – #21 Utility Type: Extract

Já se deparou com a necessidade de criar um novo tipo contendo apenas propriedades específicas de um tipo existente? Com o Utility Type Extract, essa tarefa se torna simples e eficaz.

Com o Extract<Type, Union>, você pode criar um novo tipo contendo apenas as propriedades que estão presentes na lista de propriedades especificadas.

No exemplo abaixo, temos um tipo Fruit que representa diferentes frutas, e utilizamos o Extract para criar um novo tipo OnlyCitrus contendo apenas as frutas cítricas.

💡 Onde esse recurso brilha:

✅ Facilita a criação de tipos com propriedades específicas incluídas;
✅ Aumenta a precisão e legibilidade dos tipos;
✅ Permite uma manipulação mais refinada dos tipos.

E aí dev, o que acha desse recurso do TypeScript? Compartilhe nos comentários! 👇🏼

Link para a documentação: [https://www.typescriptlang.org/docs/handbook/utility-types.html#extracttypemembers]

#typescript #frontend #devtips #vidadedev #fullstack #programação #programming #backend #javascript #devlife

## Código
```
type Fruit = "apple" | "banana" | "orange" | "lemon" | "grapefruit";
type Citrus = "orange" | "lemon" | "grapefruit";
type OnlyCitrus = Extract<Fruit, Citrus>;

const myCitrus: OnlyCitrus = "orange";
console.log(myCitrus); 
```