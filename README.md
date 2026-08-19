# LACQ Feynman — Website Oficial

Website oficial da **LACQ Feynman — Liga Acadêmica de Computação Quântica**.

O projeto é uma aplicação institucional estática, com páginas informativas, eventos, comunidade, internacionalização e tema claro/escuro.

## Tecnologias

- [Next.js 16](https://nextjs.org/) com App Router
- [React 19](https://react.dev/)
- [Tailwind CSS v4](https://tailwindcss.com/)
- [Framer Motion](https://motion.dev/) e [GSAP](https://gsap.com/)
- [Lucide React](https://lucide.dev/) e [Tabler Icons](https://tabler.io/icons)
- `next/image` para imagens
- Context API para idioma e tema
- Vercel Analytics e Speed Insights

O projeto não possui atualmente banco de dados, backend próprio, autenticação, Prisma, smooth scroll ou Lottie ativo.

## Rotas

- `/` — página inicial
- `/sobre` — patrono e valores da organização
- `/eventos` — próximos e eventos realizados
- `/comunidade` — universidades e adesão à comunidade

As rotas são pré-renderizadas como páginas estáticas durante o build.

## Desenvolvimento

### Pré-requisitos

- Node.js compatível com a versão atual do Next.js
- npm

### Instalação

```bash
npm install
```

### Desenvolvimento

```bash
npm run dev
```

### Lint

```bash
npm run lint
```

### Build de produção

```bash
npm run build
```

### Executar produção localmente

```bash
npm run start
```

## Deploy

O deploy é realizado via **Vercel**. As integrações `@vercel/analytics` e `@vercel/speed-insights` são mantidas no projeto e renderizadas no ambiente Vercel.

## Internacionalização

Os idiomas disponíveis são:

- Português do Brasil (`pt-BR`)
- Inglês (`en`)
- Espanhol (`es`)

As traduções ficam em `src/locales/` e são acessadas pelo `useLanguage()` e pela função `t()`.

Ao adicionar uma chave, mantenha os três arquivos de idioma sincronizados.

## Tema

O tema é gerenciado por `src/contexts/ThemeContext.jsx`.

- O modo padrão é escuro.
- A preferência é persistida em `localStorage`.
- A classe `.dark` é aplicada ao elemento `<html>`.
- As cores ficam centralizadas nas variáveis de `src/app/globals.css`.

## Estrutura

- `src/app/` — rotas, layout e estilos globais
- `src/contexts/` — contextos compartilhados
- `src/data/mocks/` — dados estáticos de parceiros e universidades
- `src/lib/` — utilitários e carregamento de traduções
- `src/locales/` — traduções
- `src/ui/components/` — componentes e seções da interface
- `src/utils/` — funções auxiliares
- `public/` — imagens e vídeos estáticos
- `plans/` — roadmap técnico
- `AGENTS.md` — contexto operacional para agentes de desenvolvimento

## Convenções

- Use `next/image` para imagens.
- Adicione `alt` descritivo às imagens.
- Use variáveis CSS existentes antes de criar novas cores.
- Use `'use client'` somente quando o arquivo utilizar hooks, estado ou APIs do navegador.
- Use `@/` para imports internos.
- Não adicione smooth scroll.
- Preserve função e visual ao realizar refatorações de qualidade.

## Roadmap técnico

O plano de melhorias e seu histórico ficam em:

```text
plans/code-quality-roadmap.md
```

## Estado conhecido

- Tema e idioma validados pelo responsável do projeto.
- Testes em dispositivo mobile ainda estão pendentes por indisponibilidade de ambiente.
- A otimização nativa de imagens ainda não foi ativada.
- Atualizações de segurança das dependências de produção aguardam decisão específica.
