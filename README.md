# LACQ Feynman — Website Oficial

Website oficial da **LACQ Feynman — Liga Acadêmica de Computação Quântica**.

É uma aplicação institucional estática com páginas sobre a organização, eventos, parceiros, universidades, comunidade, internacionalização e tema claro/escuro.

## Stack atual

- [Next.js 16.3.1](https://nextjs.org/) com App Router.
- [React 19.2.8](https://react.dev/).
- [Tailwind CSS 4.3.3](https://tailwindcss.com/).
- [Framer Motion 13.1.0](https://motion.dev/) e [GSAP 3.15.0](https://gsap.com/).
- [Lucide React](https://lucide.dev/) e [Tabler Icons](https://tabler.io/icons).
- `next/image` com otimização nativa.
- Context API customizada para idioma e tema.
- Vercel Analytics e Vercel Speed Insights.

O projeto não possui banco de dados, backend próprio, autenticação, Prisma, smooth scroll, Lenis ou Lottie ativo.

## Rotas

- `/` — Hero, apresentação, parceiros, próximos eventos e CTA da comunidade.
- `/sobre` — Richard Feynman e valores da organização.
- `/eventos` — próximos eventos e eventos realizados.
- `/comunidade` — universidades e adesão à comunidade.

As quatro rotas principais são pré-renderizadas como páginas estáticas no build.

## Pré-requisitos

- Node.js `>=20.9.0`.
- npm.

## Instalação e desenvolvimento

Instalação reproduzível pelo lockfile:

```bash
npm ci
```

Servidor de desenvolvimento:

```bash
npm run dev
```

Lint:

```bash
npm run lint
```

Build de produção:

```bash
npm run build
```

Executar o build localmente:

```bash
npm run start
```

## Deploy e SEO

O deploy é realizado via **Vercel**. As integrações abaixo são mantidas para o ambiente Vercel:

- `@vercel/analytics`.
- `@vercel/speed-insights`.

O projeto define metadataBase, canonical, Open Graph, Twitter Cards, robots, favicon e metadados específicos por rota.

Configure o domínio oficial no ambiente da Vercel:

```text
NEXT_PUBLIC_SITE_URL=https://seu-dominio-real.com
```

Como fallback, o código utiliza as variáveis de domínio da Vercel e, localmente, `http://localhost:3000`. Não substitua o domínio por um valor inventado no código.

## Internacionalização

Idiomas disponíveis:

- Português do Brasil (`pt-BR`).
- Inglês (`en`).
- Espanhol (`es`).

Os arquivos ficam em `src/locales/`. O idioma inicial é determinístico em `pt-BR` para evitar hydration mismatch; a preferência salva é aplicada depois da montagem. O atributo `lang`, o título e a descrição da página acompanham o idioma atual.

Ao adicionar uma chave, mantenha `pt-BR.json`, `en.json` e `es.json` sincronizados.

## Tema

O tema é gerenciado por `src/contexts/ThemeContext.jsx` e `src/ui/components/ThemeToggle.jsx`.

- Modo escuro é o padrão.
- A preferência é persistida em `localStorage`.
- A classe `.dark` é aplicada ao `<html>`.
- Tokens de cor ficam em `src/app/globals.css`.
- View Transitions possuem fallback.
- `prefers-reduced-motion` reduz animações somente para usuários que solicitaram essa preferência.

## Performance e acessibilidade

As melhorias atuais incluem:

- Listener de scroll unificado para header e barra de progresso.
- Barra de progresso atualizada diretamente no DOM.
- QuantumText sem `setState` a cada frame.
- MagneticWrapper com spring motion values.
- Animações infinitas condicionadas à visibilidade e a `prefers-reduced-motion`.
- Carrossel de universidades pausado fora da viewport.
- Duplicações visuais do carrossel ocultadas para leitores de tela.
- `next/image` com `sizes`, `priority` e `loading="lazy"` revisados.
- Wrappers coerentes para imagens `fill`, corrigindo os warnings de Foton, USP e logo completa.
- Menu mobile com focus trap, Escape, fechamento externo e retorno de foco.
- Dropdown de idioma com visual temático, item selecionado, animações, navegação por setas/Home/End e reduced motion.
- Accordion da comunidade com abertura/fechamento sincronizados usando `AnimatePresence` e `layout`.
- Accordions com `aria-expanded` e `aria-controls`.
- Iframe do YouTube com `loading="lazy"`.
- Textos de interface e textos alternativos internacionalizados.

O visual padrão para usuários sem redução de movimento foi preservado.

## Links externos

URLs recorrentes ficam centralizadas em `src/utils/links.js`, incluindo WhatsApp, YouTube, redes sociais, materiais, mentores, Quantum Coalition, Feynman e o próximo evento.

URLs específicas dos parceiros permanecem nos arquivos JSON de dados e só devem ser alteradas após confirmação oficial.

## Estrutura

- `src/app/` — rotas, layout, metadata e CSS global.
- `src/contexts/` — contextos compartilhados.
- `src/data/mocks/` — dados estáticos de parceiros, universidades e eventos.
- `src/lib/` — carregamento de traduções e utilitários.
- `src/locales/` — traduções.
- `src/ui/components/` — componentes e seções da interface.
- `src/utils/` — helpers de assets e URLs.
- `public/` — imagens e vídeos estáticos.
- `plans/` — roadmap técnico e histórico visual.
- `AGENTS.md` — contexto completo para agentes de desenvolvimento.

## Convenções

- Usar `next/image` para imagens.
- Sempre fornecer `alt` descritivo ou `alt=""` para imagens decorativas.
- Para `fill`, controlar dimensões no wrapper relativo e não aplicar `width`/`height` conflitantes no `Image`.
- Usar `sizes`, `priority` e `loading` de acordo com a posição da imagem.
- Usar `'use client'` somente com hooks, estado ou APIs do navegador.
- Usar `@/` nos imports internos.
- Usar Tailwind para layout/espaçamento, CSS variables para tokens de tema e inline styles somente para valores dinâmicos.
- Não adicionar smooth scroll.
- Preservar função e visual ao realizar refatorações.
- Não adicionar dependências sem uso ativo ou justificativa documentada.

## Dependências e validação

Dependências removidas por falta de uso:

- `@hookform/resolvers`.
- `@lottiefiles/dotlottie-react`.
- `@radix-ui/react-label`.
- `react-hook-form`.
- `yup`.
- `babel-plugin-react-compiler`, pois não havia configuração ativa.

Validações executadas no estado atual:

```bash
npm ci
npm run lint
npm run build
npm run start
npm audit
npm audit --omit=dev
```

Resultado atual: lint, build, instalação limpa e auditorias sem vulnerabilidades. O `npm run start` inicia corretamente o servidor de produção local.

Não há script de testes automatizados, typecheck separado ou CI neste momento. Esses itens permanecem fora do escopo atual.

## Estado conhecido e próximas melhorias

Pendências deliberadas:

- Teste visual em dispositivo mobile.
- Lighthouse/PageSpeed desktop e mobile.
- Auditoria manual de contraste e leitor de tela.
- Confirmação visual da qualidade das imagens otimizadas.
- Avaliação mobile de blur, sombras e `backdrop-filter`.
- Poster, preload e compressão avançada do vídeo do Hero.
- Confirmação oficial individual das URLs dos parceiros.
- Avaliação futura da redução do bundle de Framer Motion/GSAP.
- Padronização entre Lucide e Tabler.
- ESLint 10, quando houver compatibilidade com `eslint-config-next`.

O roadmap completo fica em:

```text
plans/code-quality-roadmap.md
```

Para o contexto operacional detalhado, consulte:

```text
AGENTS.md
```
