# 🧠 Easy Peasy TypeScript - #8 Record 

O Record é um mapeamento de chaves para um tipo de valor, ideal quando você precisa construir objetos de forma clara e segura, sem recorrer a any ou criar interfaces redundantes.

Num cenário prático, imagine que você tem perfis de usuário (Admin, Editor, Guest) e quer definir permissões de acesso para cada tipo sem duplicar código (imagem abaixo).

O que ganhamos com isso? 

- Tipo seguro: Garante que todo UserRole esteja presente;

- Autocomplete: O TS sugere Admin, Editor, Guest ao acessar o objeto;

- Sem redundância: Sem criar interfaces separadas ou repetir campos.

Em resumo, o Record<K, V> cria um tipo de objeto com chaves K e valores V. Isso é fundamental para definir estruturas consistentes e evitar erros de objeto incompletos.

#typescript #frontend #devtips #vidadedev #fullstack #programação #programming #backend #javascript #devlife

## Código
```
type UserRole = 'Admin' | 'Editor' | 'Guest';

type Permissions = {
  canRead: boolean;
  canWrite: boolean;
  canDelete: boolean;
};

const rolePermissions: Record<UserRole, Permissions> = {
  Admin: { canRead: true, canWrite: true, canDelete: true },
  Editor: { canRead: true, canWrite: true, canDelete: false },
  Guest: { canRead: true, canWrite: false, canDelete: false }
};

```