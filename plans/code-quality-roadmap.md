# Roadmap de Qualidade, Otimização e Manutenção

Este documento acompanha as melhorias técnicas do site LACQ Feynman.

## Escopo

As tarefas abaixo devem melhorar qualidade, estabilidade, manutenção, acessibilidade, SEO e performance **sem alterar intencionalmente a função ou o visual atual**.

Quando uma tarefa puder afetar o comportamento percebido, ela deve ser validada no build e visualmente antes de ser marcada como concluída.

## Decisões já tomadas

- [x] Não utilizar smooth scroll.
- [x] Remover o componente `SmoothScroll`, que não era utilizado por nenhuma rota.
- [x] Manter `@vercel/analytics` e `@vercel/speed-insights` enquanto o deploy for realizado na Vercel.
- [x] Não remover dependências da Vercel sem antes confirmar o uso e a necessidade no ambiente de produção.
- [ ] Adiar a padronização entre `lucide-react` e `@tabler/icons-react`.
- [ ] Adiar a criação de poster e a revisão avançada do carregamento do vídeo do Hero.

## Como atualizar este documento

Para cada tarefa concluída:

1. Marcar o checkbox como `[x]`.
2. Registrar a data e uma observação curta na seção de histórico.
3. Rodar as validações da fase correspondente.
4. Não marcar uma tarefa como concluída apenas porque o código compila; problemas de runtime, hidratação e acessibilidade também devem ser verificados quando aplicável.

---

# Fase 1 — Correção estrutural e estabilidade

**Prioridade:** alta
**Objetivo:** corrigir inconsistências que podem causar erros de runtime, hidratação ou comportamento inesperado.

## Hidratação e estado inicial

- [x] Definir uma estratégia consistente para inicializar o idioma sem divergência entre servidor e cliente.
- [x] Definir uma estratégia consistente para inicializar o tema sem divergência entre servidor e cliente.
- [x] Garantir que a preferência persistida pelo usuário continue funcionando.
- [x] Evitar que as chaves de tradução sejam exibidas durante o carregamento inicial.
- [x] Evitar carregamentos duplicados ao trocar rapidamente de idioma.
- [x] Atualizar o atributo `lang` do documento quando o idioma selecionado mudar.

## Sistema de variáveis CSS

- [x] Corrigir variáveis autorreferentes em `src/app/globals.css`.
- [x] Validar `--text-secondary`, `--border-light` e `--border-medium` nos temas claro e escuro.
- [ ] Separar aliases legados de variáveis semânticas atuais.
- [x] Verificar as classes de tema no CSS compilado após vincular `tailwind.config.js` com `@config`.

## Navegação e estrutura de seções

- [x] Corrigir a chave de tradução do item inicial da navegação (`home`).
- [x] Decidir se a navegação por seções ainda será utilizada.
- [x] Remover a infraestrutura de seções obsoleta ou reconectá-la corretamente.
- [x] Corrigir a passagem de `id` para `HomeCTA`.
- [x] Verificar os IDs usados pelo skip link, navegação e seções atuais.
- [x] Corrigir o valor CSS inválido `var(--primary)/5` no menu mobile.
- [x] Adicionar `aria-expanded` e `aria-controls` ao botão do menu mobile.

## Código e referências quebradas

- [x] Remover `src/ui/components/SmoothScroll.jsx`.
- [x] Confirmar que não existem referências a `SmoothScroll` ou `lenis`.
- [x] Confirmar que `error.txt` era um log histórico e removê-lo conforme decisão do projeto.
- [x] Auditar e corrigir todas as instâncias de `next/image` com `fill` e estilos de largura/altura conflitantes.
- [ ] Verificar referências de assets com nomes codificados, espaços ou caracteres especiais.
- [x] Remover arquivos de erro/log que não tenham finalidade de documentação.

## Validação da fase

- [x] `npm run lint`
- [x] `npm run build`
- [x] Confirmar com o responsável que a troca de idioma funciona em sessão nova e com preferência salva.
- [x] Confirmar com o responsável que a alternância de tema funciona em sessão nova e com preferência salva.
- [ ] Testar navegação em dispositivo mobile quando houver ambiente disponível.
- [x] Confirmar com o responsável que não há erros de hidratação observados.

---

# Fase 2 — Dependências e consolidação arquitetural

**Prioridade:** alta
**Objetivo:** reduzir complexidade, alinhar documentação e deixar o grafo de dependências previsível.

## Dependências

- [ ] Confirmar o uso de `@vercel/analytics` em produção na Vercel.
- [ ] Confirmar o uso de `@vercel/speed-insights` em produção na Vercel.
- [ ] Manter as dependências da Vercel caso estejam ativas ou sejam parte do monitoramento planejado.
- [x] Remover somente dependências comprovadamente sem uso após validação do time.
- [x] Remover `@hookform/resolvers`, que não possuía uso ativo.
- [x] Remover `@lottiefiles/dotlottie-react`, que não possuía uso ativo.
- [x] Remover `@radix-ui/react-label`, que não possuía uso ativo.
- [x] Remover `react-hook-form`, que não possuía uso ativo.
- [x] Remover `yup`, que não possuía uso ativo.
- [x] Avaliar `babel-plugin-react-compiler`; não havia configuração ativa e o pacote foi removido.
- [x] Investigar os pacotes `extraneous` reportados por `npm ls`.
- [x] Avaliar e corrigir as vulnerabilidades reportadas por `npm audit` e `npm audit --omit=dev`.
- [x] Alinhar as versões de `next` e `eslint-config-next` em `16.3.1`.
- [x] Atualizar as dependências para as versões latest compatíveis após validar lint e build.
- [ ] Atualizar ESLint para a major 10 quando houver compatibilidade com `eslint-config-next`.
- [x] Definir Node.js mínimo `>=20.9.0` no README e em `package.json`.
- [x] Validar o lockfile com `npm ci` após recriar `node_modules` devido a bloqueio do Windows.

## Componentes e arquivos legados

- [x] Classificar `QuantumCursor.jsx` como legado e removê-lo.
- [x] Classificar `SignupForm.jsx` como legado e removê-lo.
- [x] Classificar `LabelInputContainer.jsx` como legado e removê-lo.
- [x] Classificar `BottomGradient.jsx` como legado e removê-lo.
- [x] Classificar `Navigation/translationKeys.js` como legado e removê-lo.
- [x] Remover arquivos sem uso depois da confirmação funcional.
- [x] Remover imports não utilizados confirmados pela revisão estática.
- [x] Adicionar regra `no-unused-vars` ao ESLint flat config para detectar imports e variáveis não utilizados.

## Páginas e Server Components

- [x] Revisar quais páginas precisam realmente de `'use client'`.
- [x] Manter interatividade isolada nos componentes que usam hooks.
- [x] Evitar transformar páginas estáticas inteiras em Client Components sem necessidade.
- [x] Confirmar que a mudança não altera o HTML gerado nem o comportamento das rotas via build de produção.

## Dados e configuração

- [x] Corrigir a nomenclatura entre `institutes` e `leagues` em `Partners.jsx`.
- [x] Definir um contrato consistente para os dados de parceiros.
- [x] Renderizar links de parceiros somente quando houver uma URL válida.
- [x] Centralizar URLs externas recorrentes em `src/utils/links.js`.
- [ ] Revisar URLs de parceiros e corrigir destinos incorretos.
- [x] Confirmar que `placehold.co` não era utilizado e remover o `remotePatterns` sem uso.
- [x] Revisar `BASE_PATH`; ele permanece vazio por compatibilidade com `getAssetPath`, com comentários alinhados ao deploy atual na Vercel.

## Estilos

- [x] Confirmar se `src/app/page.module.css` ainda é necessário.
- [x] Remover estilos do template inicial sem referências.
- [x] Definir convenção: Tailwind para layout/spacing, CSS variables para tokens de tema e inline styles apenas para valores dinâmicos.
- [x] Revisar o `tailwind.config.js` e vinculá-lo explicitamente ao Tailwind v4 com `@config`, preservando tema e utilities existentes.
- [ ] Remover classes e variáveis legadas depois de validar que não são utilizadas.

## Documentação

- [x] Atualizar `README.md` para refletir o código atual.
- [x] Renomear `GEMINI.md` para `AGENTS.md` e atualizar o estado atual do projeto.
- [x] Documentar claramente o deploy via Vercel no README e no `AGENTS.md`.
- [x] Documentar `@vercel/analytics` e `@vercel/speed-insights` como integrações mantidas no deploy Vercel.
- [x] Documentar a política de manter dependências com uso ativo e validar atualizações com lint, build e audit.

## Validação da fase

- [x] `npm run lint`
- [x] `npm run build`
- [x] Instalação limpa usando `npm ci` e o lockfile.
- [x] Verificar que não existem imports para pacotes ausentes.
- [x] Verificar que não existem referências para os componentes e arquivos removidos.

---

# Fase 3 — Performance sem alteração visual

**Prioridade:** média/alta
**Objetivo:** reduzir custo de carregamento e renderização preservando o resultado visual.

## Imagens

- [x] Reavaliar `images.unoptimized` em `next.config.mjs`.
- [x] Confirmar que o deploy na Vercel pode utilizar o otimizador nativo do Next.js.
- [ ] Validar a qualidade visual das imagens em desktop e mobile quando houver ambiente disponível.
- [x] Definir `sizes` coerentes para as imagens responsivas revisadas.
- [x] Usar `priority` somente na imagem crítica de Feynman do primeiro viewport da rota Sobre.
- [x] Usar `loading="lazy"` em imagens abaixo da dobra, logos, cards e imagens expandidas.
- [ ] Confirmar que a otimização não reduz perceptivelmente a qualidade.

### Nota sobre qualidade das imagens

A otimização do Next.js normalmente não significa perda visual perceptível. Ela redimensiona a imagem conforme o viewport e pode entregar formatos mais eficientes. A qualidade pode ser controlada quando necessário. A validação deve ser feita comparando as imagens críticas em diferentes tamanhos de tela antes de remover `unoptimized`.

## Scroll e renderização

- [x] Atualizar a barra de progresso diretamente no DOM sem re-renderizar a Home.
- [x] Evitar re-renderizar toda a Home a cada frame de scroll.
- [x] Consolidar o listener de scroll da página e da navegação no componente `Navigation`.
- [x] Cancelar os `requestAnimationFrame` da página e da navegação no cleanup.

## Animações

- [x] Adicionar suporte a `prefers-reduced-motion` no CSS e no `QuantumText`.
- [x] Reduzir atualizações de estado em `QuantumText`, atualizando o nó de texto diretamente durante o efeito.
- [x] Substituir estado React por spring motion values no `MagneticWrapper`.
- [x] Pausar o carrossel e as animações infinitas dos eventos quando estão fora da viewport.
- [ ] Validar custo de `backdrop-filter`, blur e sombras em dispositivos móveis.

## Conteúdo repetido

- [x] Marcar logos duplicados do carrossel como decorativos para leitores de tela.
- [x] Evitar iniciar o carrossel antes da aproximação da viewport e manter a duplicação apenas para o loop visual.

## Itens adiados

- [ ] Criar poster e revisar o carregamento avançado do vídeo do Hero.
- [ ] Revisar `preload`, fallback e compressão do vídeo.
- [ ] Evitar remount do vídeo durante alternância de tema.

Esses itens ficam adiados conforme decisão atual e só devem ser retomados quando a prioridade de vídeo for definida.

## Validação da fase

- [x] Build de produção e inicialização com `npm run start` validados localmente.
- [ ] Lighthouse ou PageSpeed em desktop.
- [ ] Lighthouse ou PageSpeed em mobile.
- [ ] Teste com conexão limitada.
- [ ] Teste em dispositivo de baixo desempenho.
- [ ] Verificação visual das imagens otimizadas.

---

# Fase 4 — Acessibilidade, SEO e observabilidade

**Prioridade:** média
**Objetivo:** melhorar a qualidade técnica da experiência sem redesign.

## Acessibilidade

- [x] Implementar foco inicial no menu mobile.
- [x] Devolver foco ao botão após fechar o menu mobile.
- [x] Fechar o menu mobile com `Escape`.
- [x] Implementar contenção de foco no menu mobile com ciclo de Tab e Shift+Tab.
- [x] Adicionar `aria-expanded`, `aria-haspopup` e ID único ao dropdown de idioma.
- [x] Fechar o dropdown de idioma com `Escape` e clique externo.
- [x] Marcar o indicador de scroll do Hero como elemento decorativo.
- [x] Adicionar `loading="lazy"` ao iframe do YouTube expandível.
- [x] Revisar nomes acessíveis de links, botões, ícones decorativos e accordions.
- [ ] Validar contraste nos temas claro e escuro.

## Internacionalização

- [x] Mover textos de interface hardcoded para os locales, incluindo navegação, tema, parceiros, eventos e mensagens de erro.
- [x] Completar as novas chaves de `pt-BR`, `en` e `es` em paralelo.
- [ ] Remover chaves duplicadas ou obsoletas.
- [x] Revisar textos de interface e atualizar títulos, descrições e textos alternativos conforme o idioma selecionado.
- [x] Sincronizar o atributo `lang` e os metadados básicos com o idioma atual.

## SEO

- [x] Adicionar metadados Open Graph.
- [x] Adicionar Twitter Cards.
- [x] Definir `metadataBase` a partir de `NEXT_PUBLIC_SITE_URL` ou das variáveis de domínio da Vercel, com fallback local para desenvolvimento.
- [x] Definir URL canônica relativa à `metadataBase`.
- [x] Criar títulos e descrições específicos para `/`, `/sobre`, `/eventos` e `/comunidade`.
- [x] Atualizar título e descrição no cliente quando o idioma mudar, mantendo fallback estático para crawlers.
- [x] Confirmar favicon existente e definir logo otimizada como imagem de compartilhamento.

## Analytics e Vercel

- [ ] Confirmar que Analytics e Speed Insights aparecem apenas no ambiente desejado.
- [ ] Verificar se o uso de `process.env.VERCEL` é suficiente para o fluxo de deploy atual.
- [ ] Confirmar que não há duplicação de eventos ou scripts.
- [ ] Documentar a decisão de manter as integrações da Vercel.

## Erros e monitoramento

- [ ] Definir uma estratégia real de error reporting ou documentar que o log atual é somente local.
- [ ] Evitar mensagens de erro inconsistentes com o idioma escolhido.
- [ ] Testar `error.js` em uma rota com erro controlado.
- [ ] Verificar se não existem erros no console em produção.

## Validação da fase

- [ ] Auditoria Lighthouse de acessibilidade.
- [ ] Teste somente com teclado.
- [ ] Teste com leitor de tela.
- [ ] Teste de SEO.
- [ ] Verificação dos metadados compartilhados em redes sociais.

---

# Fase 5 — Testes e processo de manutenção

**Prioridade:** média
**Objetivo:** evitar regressões e tornar as futuras alterações mais seguras.

## Scripts e qualidade

- [ ] Adicionar script explícito de typecheck, se a estratégia de tipos for mantida.
- [ ] Definir se o projeto continuará em JavaScript ou migrará gradualmente para TypeScript.
- [ ] Adicionar script de testes.
- [ ] Adicionar validação dos arquivos JSON de tradução.
- [ ] Adicionar validação dos dados de parceiros e eventos.
- [ ] Adicionar verificação de links externos quando possível.

## Testes prioritários

- [ ] Renderização das quatro rotas principais.
- [ ] Troca de idioma.
- [ ] Persistência do idioma.
- [ ] Alternância de tema.
- [ ] Persistência do tema.
- [ ] Abertura e fechamento do menu mobile.
- [ ] Abertura e fechamento do dropdown de idioma.
- [ ] Expansão dos cards de eventos.
- [ ] Presença dos IDs usados pela navegação.
- [ ] Renderização dos assets de parceiros.
- [ ] Estado vazio de próximos eventos.

## CI/CD

- [ ] Criar pipeline para lint.
- [ ] Criar pipeline para build.
- [ ] Executar testes antes do deploy.
- [ ] Validar instalação com lockfile.
- [ ] Documentar o fluxo de deploy na Vercel.
- [ ] Definir política para atualizações de dependências.

---

# Histórico de atualizações

| Data | Alteração | Observação |
|---|---|---|
| 2026-08-19 | Roadmap criado | Plano inicial baseado na análise técnica do projeto. |
| 2026-08-19 | Smooth scroll removido | `SmoothScroll.jsx` não era utilizado e `lenis` não estava instalado. |
| 2026-08-19 | Fase 1 — correções iniciais | Hidratação, variáveis CSS, chave `home`, ID do CTA e estilo inválido do menu foram tratados; lint e build passaram. |
| 2026-08-19 | Limpeza conservadora da Fase 2 | Removidas cinco dependências sem uso, removida a navegação por seções legada e mantidas as integrações da Vercel. Lint e build passaram. |
| 2026-08-19 | Consolidação de componentes e documentação | Removidos componentes sem referências, `error.txt` excluído e `GEMINI.md` renomeado para `AGENTS.md` com o estado atual do projeto. |
| 2026-08-19 | README, Client Components, parceiros e acessibilidade | README atualizado, imports limpos, páginas estáticas separadas de componentes client, grupos/links de parceiros corrigidos e controles mobile/dropdown aprimorados. |
| 2026-08-19 | Atualização completa de dependências | Dependências atualizadas para latest compatível, ícones de marcas migrados para Tabler, ESLint mantido na major 9 por compatibilidade; lint/build passaram e os audits ficaram sem vulnerabilidades. |
| 2026-08-19 | Otimização inicial de imagens | Otimização nativa do `next/image` ativada, `sizes` revisados e CSS legado de página removido; validação mobile permanece pendente. |
| 2026-08-19 | Scroll e movimento reduzido | Barra de progresso e listeners de navegação otimizados, cleanup de frames adicionado e suporte inicial a `prefers-reduced-motion` implementado. |
| 2026-08-19 | Performance, acessibilidade, SEO e qualidade | Listener de scroll consolidado, animações condicionais, QuantumText/MagneticWrapper/carrossel otimizados, focus trap, i18n de interface, metadados SEO, links centralizados, Tailwind revisado, instalação limpa e regra de imports/variáveis não utilizados concluídos. Testes mobile, auditorias visuais e testes automatizados continuam fora deste escopo. |
| 2026-08-19 | Correção dos warnings de imagens | Instâncias de parceiros, universidades, eventos, Feynman e logo da comunidade passaram a usar wrappers/`fill` coerentes, eliminando alterações assimétricas de largura e altura do `next/image`. |
| 2026-08-19 | Sincronização documental | `AGENTS.md`, `README.md` e `plans/visual-improvements.md` foram atualizados com o contexto completo, decisões, validações e pendências reais do projeto. |
| 2026-08-19 | Correção de contraste no modo escuro | Textos e ícones da seção de próximos eventos e da seção de comunidade passaram a usar tokens explícitos de tema, corrigindo conteúdo que herdava preto no modo escuro. |
| 2026-08-19 | Refinamento do dropdown de idioma | Dropdown redesenhado com superfície temática, animações Framer Motion, item selecionado, navegação por setas/Home/End, reduced motion e remoção do CSS legado. |
| 2026-08-19 | Accordion fluido da comunidade | Cards da seção Junte-se passaram a usar `AnimatePresence` e `layout`, sincronizando fechamento/abertura e suavizando a movimentação da página sem alterar a função. |
| 2026-10-22 | Novo evento: Semana de Engenharia Elétrica USP São Carlos | Card adicionado ao topo de Eventos Já Realizados com a foto da turma em `public/images/lacqf/lacq-usp-sao-carlos.webp`, reutilizando o molde existente (imagem, data e descrição expansível) e textos nos três locales. |
| 2026-10-22 | Refinamentos de navegação e eventos | Efeito magnético removido da navbar, botões de Eventos Já Realizados arredondados (`rounded-full`), evento UNISO removido de Próximos Eventos com estado vazio "Fique atento para novos eventos", chaves/link do evento antigo eliminados e asset renomeado para `lacq-usp-sao-carlos.webp`. |

---

# Itens explicitamente adiados

- Padronização entre `lucide-react` e `@tabler/icons-react`.
- Poster, preload e otimização avançada do vídeo do Hero.
- Decisões finais sobre dependências da Vercel, que serão mantidas enquanto o deploy e o monitoramento forem realizados via Vercel.
