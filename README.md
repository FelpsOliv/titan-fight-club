# Titan Fight Club — Landing Page Premium

Landing page estática e responsiva para uma academia fictícia de Muay Thai. O projeto utiliza HTML5 semântico, CSS3 e JavaScript puro, sem dependências de runtime ou etapa de build.

> Projeto demonstrativo de portfólio. A Titan Fight Club, seus dados comerciais e as experiências descritas não representam uma empresa real.

## Estrutura

```text
.
├── index.html
├── css/
│   └── style.css
├── js/
│   └── main.js
├── server.mjs
├── .vercelignore
├── assets/
│   ├── favicon.svg
│   └── images/
│       ├── gym-training.jpg
│       ├── hero-muay-thai.jpg
│       ├── pads-gym.jpg
│       └── training-women.jpg
└── README.md
```

## Executar localmente

O site pode ser aberto diretamente pelo `index.html`. Para reproduzir melhor um ambiente de publicação, use o servidor Node incluído, sem instalar dependências:

```bash
node server.mjs
```

Depois acesse `http://localhost:5173`.

Como alternativa, com Python disponível:

```bash
python -m http.server 5173
```

Com a extensão Live Server do VS Code, abra `index.html` e escolha **Open with Live Server**.

## Configurar o WhatsApp

Abra `js/main.js` e localize:

```js
const SITE_CONFIG = {
  whatsappNumber: "",
  whatsappMessage: "Olá! Conheci a Titan Fight Club pelo site e gostaria de saber como agendar uma aula experimental de Muay Thai.",
};
```

Preencha `whatsappNumber` somente com dígitos, incluindo DDI e DDD. Exemplo de formato: `55` + DDD + número.

Enquanto o campo estiver vazio, os CTAs exibem um aviso demonstrativo e não abrem conversa com nenhum terceiro.

## Alterar textos, cores e dados

- Textos e seções: edite `index.html`.
- Paleta e espaçamentos: altere as variáveis no início de `css/style.css`.
- Número e mensagem do WhatsApp: edite `SITE_CONFIG` em `js/main.js`.
- Endereço, horários e redes sociais: substitua os itens marcados como **pendentes** no footer.
- Links sociais: troque os botões demonstrativos por links reais somente quando os endereços oficiais estiverem disponíveis.

## Substituir imagens

As imagens atuais são demonstrativas e foram obtidas no Unsplash e Pexels. Para substituir:

1. Salve os novos arquivos em `assets/images/`.
2. Atualize os caminhos `src` no `index.html`.
3. Informe `width` e `height` reais para evitar mudança de layout durante o carregamento.
4. Atualize o texto alternativo e os créditos.
5. Mantenha `loading="lazy"` nas imagens abaixo da primeira tela. Não aplique lazy loading ao hero.

Créditos atuais:

- Hero: Anastase Maragos / Unsplash.
- Galeria e seção institucional: Noe Garde, Franco Monsalvo e Juliia Abramova / Pexels.

## Publicar na Vercel

### Pelo painel

1. Envie esta pasta para um repositório Git.
2. No painel da Vercel, clique em **Add New → Project**.
3. Importe o repositório.
4. Em **Framework Preset**, selecione **Other**.
5. Deixe o comando de build vazio e o diretório de saída como a raiz do projeto.
6. Publique.

O arquivo `.vercelignore` impede o envio de dependências locais, logs e do servidor usado apenas para desenvolvimento.

### Pela CLI

Com a CLI da Vercel já instalada e autenticada:

```bash
vercel
```

Não é necessário comando de build.

## URL pública, SEO e Open Graph

Quando o domínio final estiver definido, adicione ao `<head>` de `index.html`:

```html
<link rel="canonical" href="https://SEU-DOMINIO/">
<meta property="og:url" content="https://SEU-DOMINIO/">
```

Troque também `og:image` por uma URL absoluta, por exemplo:

```html
<meta property="og:image" content="https://SEU-DOMINIO/assets/images/hero-muay-thai.jpg">
```

Não publique literalmente `SEU-DOMINIO`: substitua pelo domínio real entregue pela Vercel ou pelo domínio personalizado. Depois do deploy, valide a prévia social com uma ferramenta de inspeção Open Graph.

## Pendências antes de uma publicação real

- Configurar um número de WhatsApp autorizado.
- Informar endereço, horários, planos e regras reais.
- Adicionar URLs oficiais das redes sociais.
- Substituir ou validar as imagens conforme a identidade e os direitos da academia real.
- Definir URL canônica e imagem Open Graph absoluta no domínio final.
- Revisar o conteúdo com o responsável pela operação.
