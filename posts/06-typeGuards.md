# 🧠 Easy Peasy TypeScript – #6 Type Guards

Segundo a documentação do TypeScript, type guards é o "termo dado para quando você influencia a análise de fluxo do código através dele mesmo. O TypeScript usa o comportamento existente do javascript, o qual valida seus objetos em tempo de execução para influenciar o fluxo do código."

Legal Raphael, mas não entendi nada... 🤨

Calma dev... 

Em bom português, os type guards são TÉCNICAS que você usa no seu código para “ensinar” o TypeScript a entender melhor o tipo real de uma variável em tempo de execução.

Eles são úteis especialmente quando você tem tipos unidos com | (union types), e precisa garantir que um certo campo/método existe antes de usá-lo.

Na primeira imagem temos um exemplo utilizando unions: 

Como a função saberá o tipo de user? 

Podemos ajudar o TypeScript "afunilando" o tipo usando uma checagem do tipo:

 if ('accessLevel' in user) {
 ...
}

Esse in é um Type Guard nativo do JS, mas que o TypeScript reconhece e aproveita para inferir o tipo com segurança.

Por fim na última imagem temos um exemplo de uso real mais voltado para o dia a dia do código. 

Deixa teu like e me diz se te ajudei a entender melhor o conceito 💪🏼👇🏼

#typescript #frontend #devtips #vidadedev #fullstack #programação #programming #backend #javascript #devlife

## Código
```
type Admin = {name: string;accessLevel: number;};

type Guest = {name: string;expires: Date;};

function printUser(user: Admin | Guest) {// como saber se é Admin ou Guest?}

if (‘accessLevel’ in user) {// Aqui, o TS já sabe que user é Admin} else {// Aqui, o TS sabe que user é Guest}

type Admin = {name: string;accessLevel: number;};

type Guest = {name: string;expires: Date;};

function welcome(user: Admin | Guest) {if (‘accessLevel’ in user) {console.log("Bem-vindo, admin ${user.name"}! Nível de acesso: ${user.accessLevel}⁠);} else {console.log("⁠Bem-vindo, convidado ${user.name}! Expira em: ${user.expires.toLocaleDateString()}⁠");}}

```