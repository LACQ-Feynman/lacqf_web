# LACQ Feynman — Contexto para Agentes

Este documento descreve o estado atual do projeto, sua arquitetura e as convenções que devem ser seguidas por agentes de desenvolvimento.

## Visão geral

O LACQ Feynman é o site oficial da Liga Acadêmica de Computação Quântica. É uma aplicação institucional e de conteúdo, com landing page, páginas de eventos, comunidade e apresentação da organização.

O projeto é atualmente estático, sem banco de dados, API própria ou autenticação implementada.

## Stack atual

- **Framework:** Next.js 16 com App Router
- **UI:** React 19
- **Estilos:** Tailwind CSS v4 combinado com variáveis CSS em `src/app/globals.css`
- **Animações:** Framer Motion e GSAP/ScrollTrigger
- **Ícones:** Lucide React e Tabler Icons
- **Imagens:** `next/image`
- **Vídeo:** asset WebM local em `public/videos/hero.webm`
- **Internacionalização:** Context API customizada com `pt-BR`, `en` e `es`
- **Tema:** Context API customizada com modo claro/escuro persistido em `localStorage`
- **Analytics:** Vercel Analytics e Vercel Speed Insights, renderizados quando o ambiente é Vercel
- **Deploy:** Vercel
- **Gerenciador de pacotes:** npm

### O que não faz parte do projeto atual

- Smooth scroll/Lenis
- Prisma ou PostgreSQL
- Lottie ativo
- React Hook Form ou Yup
- Sistema de autenticação
- Backend ou endpoints de formulário

## Rotas atuais

- `/` — página inicial
- `/sobre` — patrono e valores
- `/eventos` — próximos e eventos realizados
- `/comunidade` — universidades e adesão à comunidade

Todas as páginas são pré-renderizadas como rotas estáticas no build atual.

## Estrutura principal

- `src/app/` — rotas, layout, página inicial e estilos globais
- `src/contexts/` — contextos de idioma e tema
- `src/data/mocks/` — dados estáticos de parceiros e universidades
- `src/lib/` — carregamento de traduções e utilitários
- `src/locales/` — arquivos JSON de tradução
- `src/ui/components/` — componentes de navegação e seções
- `src/utils/` — funções auxiliares, incluindo paths de assets
- `public/images/` — imagens e logos
- `public/videos/` — vídeos locais
- `plans/` — roadmap e documentos de planejamento

## Internacionalização

O idioma é gerenciado por `src/contexts/LanguageContext.jsx`.

- Idioma padrão: `pt-BR`
- Idiomas suportados: `pt-BR`, `en`, `es`
- Traduções: `src/locales/pt-BR.json`, `src/locales/en.json`, `src/locales/es.json`
- A primeira renderização é determinística para evitar divergência de hidratação.
- A preferência persistida é aplicada após a montagem do cliente.
- O atributo `lang` do documento é sincronizado com o idioma atual.
- Use `useLanguage()` e `t('chave')` para textos traduzíveis.
- Não adicione textos de interface diretamente nos componentes quando o conteúdo puder ser traduzido.

Ao adicionar ou alterar uma chave, mantenha os três arquivos de locale sincronizados.

## Tema

O tema é gerenciado por `src/contexts/ThemeContext.jsx`.

- O modo padrão é escuro.
- A preferência é persistida em `localStorage` com a chave `theme`.
- A classe `.dark` é aplicada ao elemento `<html>`.
- As cores principais vivem em variáveis CSS no `src/app/globals.css`.
- A troca de tema usa View Transitions quando suportado pelo navegador e possui fallback.

Use as variáveis existentes antes de criar novas cores ou estilos paralelos.

## Navegação

A navegação global está em `src/ui/components/Navigation.jsx`.

- A navegação atual ocorre entre rotas.
- A antiga infraestrutura de navegação por seções foi removida por não estar conectada ao componente atual.
- O skip link aponta para `#main-content`.
- O menu mobile é renderizado pelo `MobileNavigation`.
- A navegação desktop usa `DesktopNavigation`.

Não reintroduza props ou arquivos de navegação por seções sem uma decisão explícita e implementação completa.

## Imagens e assets

- Prefira `next/image` para imagens.
- Use `alt` descritivo ou marque como decorativo quando apropriado.
- Verifique `sizes`, `priority` e `loading` conforme a posição da imagem na página.
- `images.unoptimized` ainda está configurado em `next.config.mjs`; a decisão de ativar a otimização nativa do Next.js está registrada no roadmap e deve ser validada visualmente antes da alteração.
- Use `getAssetPath()` para respeitar a configuração de path dos assets.
- Assets novos devem preferencialmente usar nomes simples, sem espaços ou caracteres especiais.

## Animações e performance

- Prefira animações baseadas em `transform` e `opacity`.
- Evite iniciar animações pesadas antes de serem necessárias.
- Respeite `prefers-reduced-motion` ao implementar novas animações.
- Não adicione smooth scroll.
- O vídeo do Hero e sua estratégia avançada de poster/preload estão deliberadamente adiados.

## Dependências

As dependências declaradas devem possuir uso ativo ou uma justificativa documentada.

Dependências removidas por não possuírem uso ativo:

- `@hookform/resolvers`
- `@lottiefiles/dotlottie-react`
- `@radix-ui/react-label`
- `react-hook-form`
- `yup`

As integrações da Vercel devem ser preservadas enquanto o deploy e o monitoramento forem realizados pela Vercel:

- `@vercel/analytics`
- `@vercel/speed-insights`

Não execute atualizações amplas de dependências ou `npm audit fix` sem validar o impacto e confirmar o escopo. O roadmap registra vulnerabilidades de produção que ainda precisam de uma decisão específica.

## Convenções de código

- Use `'use client'` somente em arquivos que realmente precisam de hooks, estado ou APIs do navegador.
- Mantenha componentes e funções pequenos e com responsabilidade clara.
- Prefira as convenções existentes de aspas, aliases `@/` e organização de componentes.
- Não deixe imports, props ou arquivos sem uso.
- Evite duplicar lógica de tema, idioma, links externos ou paths de assets.
- Preserve o comportamento e o visual existentes ao executar tarefas de qualidade.

## Acessibilidade

- Imagens devem possuir `alt` adequado.
- Elementos interativos devem funcionar com teclado.
- Mantenha estados ativos e foco visíveis.
- Use `aria-label`, `aria-current`, `aria-expanded` e outras propriedades quando semanticamente necessárias.
- O menu mobile e o dropdown de idioma ainda possuem melhorias de acessibilidade pendentes no roadmap.

## Scripts

```bash
npm run dev
npm run lint
npm run build
npm run start
```

O lint atualmente passa, com um aviso externo sobre `baseline-browser-mapping` desatualizado. O build atual gera as quatro rotas estáticas principais.

## Validação obrigatória

Após alterações não triviais, execute:

```bash
npm run lint
npm run build
```

Se houver alterações de dependências, valide também:

```bash
npm ls --depth=0
npm audit --omit=dev
```

Não marque tarefas do roadmap como concluídas apenas porque o build passou. Valide runtime, hidratação, acessibilidade e comportamento quando aplicável.

## Roadmap

O acompanhamento das melhorias está em:

- `plans/code-quality-roadmap.md`

Atualize os checkboxes e o histórico do roadmap ao concluir tarefas. Registre decisões adiadas explicitamente.

## Estado conhecido e pendências

- Tema e idioma foram validados pelo responsável do projeto.
- O teste em dispositivo mobile está pendente por indisponibilidade de ambiente e não bloqueia o avanço atual.
- O arquivo de log `error.txt` foi removido conforme decisão do responsável.
- Componentes sem uso comprovado foram removidos conforme o roadmap.
- A otimização nativa de imagens ainda não foi ativada.
- Vulnerabilidades de produção reportadas pelo `npm audit --omit=dev` ainda aguardam decisão.
- A padronização entre Lucide e Tabler está adiada.
- Poster e otimização avançada do vídeo estão adiados.
