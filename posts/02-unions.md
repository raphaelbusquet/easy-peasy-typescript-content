# 🧠 Easy Peasy Typescript – #2 Unions

No post anterior da série, falamos sobre as Intersections, uma ferramenta poderosa para enriquecer a tipagem combinando estruturas.

Agora, seguimos com as Unions, que funcionam de forma parecida, mas com outra lógica:

👉 No TypeScript, o operador | permite que um valor seja um tipo OU outro.

Na imagem abaixo, temos um exemplo prático. Um componente de botão que pode variar de acordo com sua função, aceitando três opções válidas:

"primary", "secondary" ou "danger"

Isso evita erros como "primario" ou "vermelho" e garante consistência no seu design system.

💡 Onde esse recurso brilha:

✅ Controlar estados fixos como "loading" | "done" | "error"
✅ Criar componentes com variant, size, theme, etc.
✅ Substituir enums simples com menos verbosidade
✅ Aumentar a legibilidade e segurança da tipagem, sem exagerar na estrutura

E aí dev, você já usava unions no seu dia a dia?
Comenta aqui embaixo! 👇🏼

#typescript #frontend #devtips #vidadedev #fullstack #programação #programming #backend #javascript #devlife

## Código

```
type Variant = "primary" | "secondary" | "danger";

type ButtonProps = {
  label: string;
  variant: Variant;
};

// Componente de botão reutilizável com variantes de estilo
function Button({ label, variant }: ButtonProps) {
  return (
    <button className={`btn-${variant}`}>
      {label}
    </button>
  );
}

// Exemplo de uso real
// <Button label="Salvar" variant="primary" />
// <Button label="Cancelar" variant="secondary" />
// <Button label="Excluir" variant="danger" />

```