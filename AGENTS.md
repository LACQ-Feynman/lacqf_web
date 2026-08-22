# LACQ Feynman — Contexto completo para agentes

Este documento é a fonte operacional para agentes que trabalham no site LACQ Feynman. Ele descreve o estado atual do código, as decisões já tomadas, as convenções obrigatórias, as validações disponíveis e as pendências conhecidas.

## 1. Visão geral

O LACQ Feynman é o site institucional da **Liga Acadêmica de Computação Quântica**. O projeto apresenta a organização, eventos, parceiros, universidades, comunidade e o patrono Richard Feynman.

O site é atualmente uma aplicação estática:

- Sem banco de dados.
- Sem backend ou API própria.
- Sem autenticação.
- Sem formulários ativos ou endpoints de envio.
- Sem Prisma/PostgreSQL.
- Sem Lottie ativo.
- Sem smooth scroll ou Lenis.
- Deploy planejado/realizado via Vercel.

A função e o visual existentes devem ser preservados em tarefas de qualidade, otimização e manutenção.

## 2. Stack e versões atuais

- **Framework:** Next.js `16.3.1`, App Router.
- **UI:** React `19.2.8` e React DOM `19.2.8`.
- **Estilos:** Tailwind CSS `4.3.3`, com CSS variables em `src/app/globals.css`.
- **Pós-processamento CSS:** `@tailwindcss/postcss` `4.3.3`.
- **Animações:** Framer Motion `13.1.0` e GSAP `3.15.0` com ScrollTrigger.
- **Ícones:** Lucide React `1.33.0` e Tabler Icons `3.46.0`.
- **Imagens:** `next/image`, com otimização nativa ativada.
- **Vídeo:** WebM local em `public/videos/hero.webm`.
- **Internacionalização:** Context API customizada com `pt-BR`, `en` e `es`.
- **Tema:** Context API customizada, modo escuro padrão e preferência em `localStorage`.
- **Analytics:** `@vercel/analytics` `2.0.1`.
- **Performance monitoring:** `@vercel/speed-insights` `2.0.0`.
- **Lint:** ESLint `9.39.5` com `eslint-config-next` `16.3.1`.
- **Gerenciador:** npm.
- **Node mínimo:** `>=20.9.0`, definido em `package.json`.

O ESLint 10 permanece adiado por incompatibilidade com o `eslint-config-next` atual. `babel-plugin-react-compiler` foi avaliado, não possuía configuração ativa e foi removido.

## 3. Rotas e composição

Rotas atuais:

- `/` — Hero, apresentação, parceiros, próximos eventos e CTA da comunidade.
- `/sobre` — Richard Feynman e valores da organização.
- `/eventos` — próximos eventos e eventos realizados.
- `/comunidade` — universidades e seção de adesão/comunidade.

As quatro rotas principais são Server Components de página e são pré-renderizadas como estáticas no build.

Componentes interativos mantêm `'use client'` apenas onde necessário, principalmente por uso de hooks, contexto ou APIs do navegador.

## 4. Estrutura de diretórios

- `src/app/` — layout, rotas, metadata e CSS global.
- `src/contexts/` — `LanguageContext` e `ThemeContext`.
- `src/data/mocks/` — dados estáticos de empresas, institutos, universidades, ligas e parceiros master.
- `src/lib/` — carregamento de traduções e utilitários.
- `src/locales/` — `pt-BR.json`, `en.json` e `es.json`.
- `src/ui/components/` — navegação, seções, conteúdo, animações e overlays.
- `src/ui/components/Navigation/` — navegação desktop e mobile.
- `src/utils/assets.js` — normalização de paths de assets.
- `src/utils/links.js` — URLs externas recorrentes centralizadas.
- `public/images/` — logos, fotos e imagens de parceiros.
- `public/videos/` — vídeo do Hero.
- `plans/code-quality-roadmap.md` — roadmap técnico principal.
- `plans/visual-improvements.md` — histórico/planejamento visual, com itens explicitamente removidos ou adiados.
- `README.md` — documentação de uso do projeto.

Arquivos legados removidos:

- `GEMINI.md`, substituído por `AGENTS.md`.
- `error.txt`.
- `src/app/page.module.css`.
- `SmoothScroll.jsx`.
- `QuantumCursor.jsx`.
- `SignupForm.jsx`.
- `LabelInputContainer.jsx`.
- `BottomGradient.jsx`.
- `Navigation/translationKeys.js`.
- `.eslintrc.json` legado; o projeto usa `eslint.config.mjs`.

## 5. Idioma e metadata dinâmica

O idioma é gerenciado por `src/contexts/LanguageContext.jsx`.

- Idioma padrão de servidor e primeira renderização: `pt-BR`.
- Idiomas suportados: `pt-BR`, `en`, `es`.
- A preferência salva em `localStorage` é aplicada depois da montagem para evitar hydration mismatch.
- Traduções não padrão são carregadas dinamicamente por `src/lib/i18n.js`.
- O atributo `lang` do `<html>` acompanha o idioma atual.
- Títulos e descrições da página também são atualizados no cliente ao trocar idioma ou rota.
- Toda nova chave deve ser adicionada aos três arquivos de locale.
- Use `useLanguage()` e `t('chave')`; não adicione textos de interface hardcoded sem justificativa.

A primeira renderização pode usar o conteúdo padrão por alguns instantes antes de aplicar uma preferência salva. Essa é uma decisão consciente para manter a renderização servidor/cliente determinística.

## 6. Tema

O tema é gerenciado por `src/contexts/ThemeContext.jsx` e `ThemeToggle.jsx`.

- Modo escuro é o estado inicial padrão.
- Preferência persistida na chave `theme` do `localStorage`.
- A classe `.dark` é aplicada ao elemento `<html>`.
- Tokens de cor ficam em `src/app/globals.css`.
- View Transitions são usadas quando disponíveis, com fallback para troca direta.
- `prefers-reduced-motion` impede transições de tema excessivas quando solicitado pelo usuário.

Use os tokens existentes antes de criar cores ou estilos paralelos.

## 7. Navegação e scroll

A navegação global fica em `src/ui/components/Navigation.jsx`.

- A navegação atual é entre rotas, não entre seções.
- `DesktopNavigation` renderiza links para as quatro rotas.
- `MobileNavigation` possui foco inicial, retorno de foco, Escape, fechamento externo e focus trap de Tab/Shift+Tab.
- O dropdown de idioma possui `aria-expanded`, `aria-haspopup`, ID único, Escape, fechamento externo, retorno de foco, navegação por setas/Home/End e item selecionado destacado.
- O skip link aponta para `#main-content`.
- A barra de progresso aparece somente na Home.
- O progresso da página e o estado de header compartilham um único listener de scroll passivo, limitado por `requestAnimationFrame`.
- Não implementar smooth scroll. O botão do Hero usa rolagem nativa sem comportamento suave.

IDs principais atuais:

- `#main-content` — skip link.
- `#hero`.
- `#whoWeAre`.
- `#about`.
- `#sponsors`.
- `#upcomingEvents`.
- `#membership`.
- `#patronum`.
- `#values`.
- `#events`.
- `#universities`.

## Acessibilidade e contraste

- Elementos interativos devem funcionar com mouse, teclado e foco visível.
- Imagens devem possuir `alt` adequado; cópias decorativas usam `alt=""` e `aria-hidden`.
- Menus, dropdowns e accordions devem manter `aria-expanded`, `aria-controls` e nomes acessíveis coerentes.
- Textos e ícones em cards devem usar tokens explícitos como `text-theme-primary`, `text-theme-secondary` ou `var(--text*)`; não dependa somente da cor herdada.
- O problema específico de textos e ícone pretos no modo escuro em próximos eventos e comunidade foi corrigido com tokens de tema explícitos.
- A auditoria manual geral de contraste, teclado e leitor de tela ainda depende de validação no navegador.

## 8. Imagens e assets

A otimização nativa de `next/image` está habilitada para o deploy Vercel.

Regras atuais:

- Preferir `next/image`.
- Definir `alt` descritivo; usar `alt=""` e `aria-hidden` somente para cópias decorativas.
- Definir `sizes` coerentes.
- Usar `priority` somente em imagens realmente críticas; atualmente a imagem de Feynman é a principal imagem prioritária.
- Usar `loading="lazy"` em imagens abaixo da dobra, logos e imagens expandidas.
- Para imagens com `fill`, controlar proporção no wrapper com `position: relative` e dimensões coerentes; não adicionar estilos conflitantes de `width`/`height` no `Image`.
- Os warnings recentes de Foton, USP e logo completa foram corrigidos com wrappers/`fill`; o mesmo padrão foi aplicado preventivamente a eventos e Feynman.
- Validar qualidade visual em desktop e mobile antes de considerar a auditoria de imagem encerrada.
- Usar `getAssetPath()` para paths locais quando o componente não usa o helper de compatibilidade existente.
- Assets novos devem preferir nomes simples, sem espaços ou caracteres especiais. Assets legados com espaços continuam funcionando e não devem ser renomeados sem necessidade.

## 9. Performance e animações

Melhorias já implementadas:

- Barra de progresso sem re-renderizar a Home a cada frame.
- Listener de scroll consolidado.
- Cleanup de `requestAnimationFrame`.
- `QuantumText` atualiza o nó de texto diretamente, sem `setState` por frame.
- `QuantumText` só inicia após entrar na viewport e não anima com movimento reduzido.
- `MagneticWrapper` usa spring values em vez de estado React por movimento do mouse e é desativado para ponteiros que não sejam mouse ou para movimento reduzido.
- Carrossel de universidades aguarda a viewport, pausa fora dela e oculta cópias de logos para leitores de tela.
- Efeitos infinitos de próximos eventos são condicionados à visibilidade e ao movimento reduzido.
- Framer Motion respeita `useReducedMotion` nos componentes com animações.
- O dropdown de idioma usa entrada/saída, stagger dos itens e rotação do indicador, com reduced motion.
- O accordion da seção Junte-se usa `AnimatePresence` e `layout` para sincronizar fechamento/abertura e suavizar a movimentação da página.
- CSS global possui fallback para `@media (prefers-reduced-motion: reduce)`.

O visual padrão para usuários sem `prefers-reduced-motion` permanece preservado.

O vídeo do Hero, poster, preload, compressão e versões responsivas estão deliberadamente adiados. `backdrop-filter`, blur e sombras ainda precisam de avaliação real em dispositivos móveis.

## 10. SEO e domínio

`src/app/layout.js` define:

- `metadataBase`.
- Título padrão e template.
- Description.
- Canonical.
- Open Graph.
- Twitter Card.
- Robots.
- Favicon.
- Imagem de compartilhamento.

As páginas `/sobre`, `/eventos` e `/comunidade` possuem metadata específica. O cliente atualiza título e descrição ao trocar idioma.

Configure na Vercel:

```text
NEXT_PUBLIC_SITE_URL=https://seu-dominio-real.com
```

O projeto usa `VERCEL_PROJECT_PRODUCTION_URL` ou `VERCEL_URL` quando disponíveis e `http://localhost:3000` como fallback local. Não substituir o domínio por um valor inventado no código.

## 11. Links externos

URLs recorrentes ficam em `src/utils/links.js`, incluindo:

- Grupos do WhatsApp.
- YouTube.
- Instagram e TikTok.
- Mentores e materiais.
- Quantum Coalition.
- Legado de Feynman.
- Link do próximo evento.

URLs de parceiros continuam nos arquivos JSON de dados. Elas ainda precisam de confirmação oficial individual antes de serem alteradas.

## 12. Dependências e configuração

Dependências devem possuir uso ativo ou justificativa documentada.

Dependências removidas por falta de uso:

- `@hookform/resolvers`.
- `@lottiefiles/dotlottie-react`.
- `@radix-ui/react-label`.
- `react-hook-form`.
- `yup`.
- `babel-plugin-react-compiler`, por não haver configuração ativa.

As integrações Vercel devem ser preservadas:

- `@vercel/analytics`.
- `@vercel/speed-insights`.

`next.config.mjs` mantém `BASE_PATH` vazio para compatibilidade com o helper de assets e não possui mais `remotePatterns` sem uso. O Tailwind v4 vincula explicitamente `tailwind.config.js` por `@config` em `src/app/globals.css`, preservando `darkMode`, tokens, fontes e animações customizadas.

## 13. Convenções de implementação

- Usar `'use client'` somente com hooks, estado ou APIs do navegador.
- Usar aliases `@/` nos imports internos.
- Preferir componentes pequenos e responsabilidades claras.
- Não deixar imports, props, variáveis ou arquivos sem uso.
- ESLint possui regra explícita `no-unused-vars`.
- Usar Tailwind para layout e espaçamento.
- Usar CSS variables para tokens de tema.
- Usar inline styles apenas para valores dinâmicos ou valores difíceis de expressar em utility classes.
- Centralizar URLs e paths recorrentes.
- Preservar função, conteúdo e visual em refatorações técnicas.
- Não reintroduzir SmoothScroll, Lenis ou a navegação legada por seções.
- Não adicionar testes automatizados ou CI sem decisão específica; esses itens permanecem fora do escopo atual.

## 14. Scripts e validação

Scripts disponíveis:

```bash
npm run dev
npm run lint
npm run build
npm run start
npm ci
```

Validação mínima após alteração não trivial:

```bash
npm run lint
npm run build
```

Após alterações de dependências:

```bash
npm ci
npm ls --depth=0
npm audit
npm audit --omit=dev
```

Validações já realizadas no estado atual:

- `npm ci` passou.
- `npm run lint` passou.
- `npm run build` passou.
- `npm run start` iniciou o servidor de produção local.
- `npm audit` reportou 0 vulnerabilidades.
- `npm audit --omit=dev` reportou 0 vulnerabilidades.
- `git diff --check` passou, com aviso não funcional de conversão LF/CRLF no Windows para o roadmap.

Não há script de testes, typecheck separado ou pipeline CI atualmente. O build executa a verificação TypeScript do Next mesmo com o projeto em JavaScript.

## 15. Estado atual e pendências

Concluído:

- Correções de hidratação, idioma, tema e CSS.
- Remoção de legado e limpeza conservadora de dependências.
- Separação de Server/Client Components.
- Acessibilidade de navegação, dropdown e accordions.
- Otimização de imagens e correção dos warnings de proporção do `next/image`.
- Scroll, QuantumText, MagneticWrapper e carrossel otimizados.
- Internacionalização de textos de interface, alt texts e metadata.
- SEO técnico inicial.
- Documentação e roadmap sincronizados.

Pendente ou deliberadamente adiado:

- Teste visual em dispositivo mobile.
- Lighthouse/PageSpeed em desktop e mobile.
- Auditoria manual geral de contraste e leitor de tela; o problema específico de contraste preto no modo escuro em eventos/comunidade foi corrigido.
- Confirmação visual final da qualidade das imagens otimizadas.
- Avaliação mobile de blur, sombras e `backdrop-filter`.
- Poster, preload e compressão avançada do vídeo do Hero.
- Confirmação oficial das URLs individuais dos parceiros.
- Padronização entre Lucide e Tabler.
- ESLint 10, até compatibilidade com `eslint-config-next`.
- Testes automatizados e CI, explicitamente fora do escopo atual.

O roadmap detalhado e seu histórico estão em `plans/code-quality-roadmap.md`. Atualize esse arquivo sempre que uma tarefa for concluída ou uma decisão for alterada.
