# 🧠 Easy Peasy TypeScript - #9 Template Literal Types
Vocês já perceberam que tudo em TypeScript sempre se volta para possibilitar uma boa tipagem e evitar a repetição de código, facilitando aquele "clean code" que todo dev ama. 

Template Literal Types é mais uma ferramenta que nos possibilita isso. 

Como funciona? 

Os Template Literal Types permitem criar novos tipos de string combinando tipos existentes, assim como fazemos com strings normais usando interpolação (${variável}), observe a imagem abaixo.

✅ Vantagens práticas:

- Evita erros de digitação;
- Torna o código mais escalável;
- Ajuda a manter padrões em grandes bases de código.

Gostou desse recurso dev? Então já deixa aquele teu like 💪🏼

#typescript #frontend #devtips #vidadedev #fullstack #programação #programming #backend #javascript #devlife

## Código
```
type EventName = "click" | "focus" | "hover";
type Element = "button" | "input";

// Template literal types! Ah que lindo 😊
type EventHandler = `${Element}-${EventName}`;

// EventHandler se expande para:
// "button-click" | "button-focus" | "button-hover"
// "input-click"  | "input-focus"  | "input-hover"

```