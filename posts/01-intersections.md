# 🧠 Easy peasy Typescript – #1 Intersections

Você já precisou usar intersections no seu código TypeScript — ou melhor, você já as conhecia?

No TypeScript, & é o operador que nos permite combinar dois ou mais tipos em um só. É como dizer: “esse objeto precisa ser A e também B ao mesmo tempo”.

No exemplo abaixo (primeira imagem), "joao" é um objeto literal que precisa obrigatoriamente ter tudo que Pessoa e Funcionario têm, porque ele é os dois tipos ao mesmo tempo.

Tá Rapha, bonito conceito... Mas como uso isso na prática?? 

Vou dar um exemplo real de aplicação (segunda imagem):

Imagine que sua API retorna os dados de um usuário, mas só se ele estiver autenticado. Você tem dois tipos, Usuario e Token. 

Agora você quer tipar o objeto retornado quando o login for bem-sucedido. Ele tem os dados do usuário e (& - intersection) também os dados do token. 

💡 Onde esse recurso brilha:

✅ Tipar retornos de login/autenticação
✅ Juntar props em componentes React (PropsA & PropsB)
✅ Reutilizar tipos em formulários complexos
✅ Compor tipos derivados de contextos ou middlewares

E aí, dev, esse conteúdo foi útil pra você?
Se sim, salva, compartilha e me conta nos comentários onde você mais usa intersections no seu código 👇

#typescript #frontend #devtips #vidadedev #fullstack #programação #programming #backend #javascript #devlife

## Código

```
type Pessoa = { nome: string };
type Funcionario = { cargo: string };
type PessoaFuncionario = Pessoa & Funcionario;

const joao: PessoaFuncionario = {
  nome: "João Silva",
  cargo: "Designer"
};

console.log(joao);


type Usuario = {
  id: string;
  nome: string;
  email: string;
};

type Token = {
  accessToken: string;
  expiresIn: number;
};

type UsuarioLogado = Usuario & Token;

// Função de login que retorna um usuário autenticado
function login(): UsuarioLogado {
  return {
    id: "1",
    nome: "Ana",
    email: "ana@email.com",
    accessToken: "abc123",
    expiresIn: 3600
  };
}

login();

```