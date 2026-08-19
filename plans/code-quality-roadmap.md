# Roadmap de Qualidade, Otimização e Manutenção

Este documento acompanha as melhorias técnicas do site LACQ Feynman.

## Escopo

As tarefas abaixo devem melhorar qualidade, estabilidade, manutenção, acessibilidade, SEO e performance **sem alterar intencionalmente a função ou o visual atual**.

Quando uma tarefa puder afetar o comportamento percebido, ela deve ser validada no build e visualmente antes de ser marcada como concluída.

## Decisões já tomadas

- [x] Não utilizar smooth scroll.
- [x] Remover o componente `SmoothScroll`, que não era utilizado por nenhuma rota.
- [ ] Manter `@vercel/analytics` e `@vercel/speed-insights` enquanto o deploy for realizado na Vercel.
- [ ] Não remover dependências da Vercel sem antes confirmar o uso e a necessidade no ambiente de produção.
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
- [ ] Verificar se as classes de tema utilizadas pelos componentes existem no CSS compilado.

## Navegação e estrutura de seções

- [x] Corrigir a chave de tradução do item inicial da navegação (`home`).
- [x] Decidir se a navegação por seções ainda será utilizada.
- [x] Remover a infraestrutura de seções obsoleta ou reconectá-la corretamente.
- [x] Corrigir a passagem de `id` para `HomeCTA`.
- [ ] Verificar todos os IDs usados por links, skip link e navegação.
- [x] Corrigir o valor CSS inválido `var(--primary)/5` no menu mobile.
- [ ] Adicionar `aria-expanded` e `aria-controls` ao botão do menu mobile.

## Código e referências quebradas

- [x] Remover `src/ui/components/SmoothScroll.jsx`.
- [x] Confirmar que não existem referências a `SmoothScroll` ou `lenis`.
- [x] Confirmar que `error.txt` era um log histórico e removê-lo conforme decisão do projeto.
- [ ] Auditar o antigo erro de imagem com `fill` e `style.width` em todas as instâncias atuais de `next/image`.
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
- [ ] Avaliar `babel-plugin-react-compiler` e confirmar se existe configuração ativa para ele.
- [x] Investigar os pacotes `extraneous` reportados por `npm ls`.
- [ ] Avaliar e corrigir as vulnerabilidades de produção reportadas por `npm audit --omit=dev`.
- [ ] Alinhar as versões de `next` e `eslint-config-next`.
- [ ] Definir a versão mínima suportada de Node.js no README e em `package.json`.
- [ ] Validar o lockfile com uma instalação limpa.

## Componentes e arquivos legados

- [x] Classificar `QuantumCursor.jsx` como legado e removê-lo.
- [x] Classificar `SignupForm.jsx` como legado e removê-lo.
- [x] Classificar `LabelInputContainer.jsx` como legado e removê-lo.
- [x] Classificar `BottomGradient.jsx` como legado e removê-lo.
- [x] Classificar `Navigation/translationKeys.js` como legado e removê-lo.
- [x] Remover arquivos sem uso depois da confirmação funcional.
- [x] Remover imports não utilizados confirmados pela revisão estática.
- [ ] Adicionar uma regra de lint para imports e variáveis não utilizados.

## Páginas e Server Components

- [x] Revisar quais páginas precisam realmente de `'use client'`.
- [x] Manter interatividade isolada nos componentes que usam hooks.
- [x] Evitar transformar páginas estáticas inteiras em Client Components sem necessidade.
- [x] Confirmar que a mudança não altera o HTML gerado nem o comportamento das rotas via build de produção.

## Dados e configuração

- [x] Corrigir a nomenclatura entre `institutes` e `leagues` em `Partners.jsx`.
- [x] Definir um contrato consistente para os dados de parceiros.
- [x] Renderizar links de parceiros somente quando houver uma URL válida.
- [ ] Centralizar URLs externas recorrentes, especialmente os links do WhatsApp.
- [ ] Revisar URLs de parceiros e corrigir destinos incorretos.
- [ ] Confirmar se `remotePatterns` para `placehold.co` ainda é necessário.
- [ ] Revisar o uso de `BASE_PATH` e remover comentários de deploy que não representam o ambiente atual.

## Estilos

- [ ] Confirmar se `src/app/page.module.css` ainda é necessário.
- [ ] Remover estilos do template inicial caso não tenham referências.
- [ ] Definir uma convenção para utilities Tailwind, CSS variables e estilos inline.
- [ ] Revisar o `tailwind.config.js` em relação ao Tailwind v4 atualmente utilizado.
- [ ] Remover classes e variáveis legadas depois de validar que não são utilizadas.

## Documentação

- [x] Atualizar `README.md` para refletir o código atual.
- [x] Renomear `GEMINI.md` para `AGENTS.md` e atualizar o estado atual do projeto.
- [ ] Documentar claramente o deploy via Vercel.
- [ ] Documentar as dependências de monitoramento da Vercel.
- [ ] Documentar a política para inclusão e remoção de dependências.

## Validação da fase

- [x] `npm run lint`
- [x] `npm run build`
- [ ] Instalação limpa usando o lockfile.
- [x] Verificar que não existem imports para pacotes ausentes.
- [x] Verificar que não existem referências para os componentes e arquivos removidos.

---

# Fase 3 — Performance sem alteração visual

**Prioridade:** média/alta
**Objetivo:** reduzir custo de carregamento e renderização preservando o resultado visual.

## Imagens

- [ ] Reavaliar `images.unoptimized` em `next.config.mjs`.
- [ ] Confirmar que o deploy na Vercel pode utilizar o otimizador nativo do Next.js.
- [ ] Validar a qualidade visual das imagens em desktop e mobile.
- [ ] Definir `sizes` coerentes para todas as imagens responsivas.
- [ ] Usar `priority` somente em imagens realmente críticas para o primeiro viewport.
- [ ] Usar `loading="lazy"` em imagens abaixo da dobra quando apropriado.
- [ ] Confirmar que a otimização não reduz perceptivelmente a qualidade.

### Nota sobre qualidade das imagens

A otimização do Next.js normalmente não significa perda visual perceptível. Ela redimensiona a imagem conforme o viewport e pode entregar formatos mais eficientes. A qualidade pode ser controlada quando necessário. A validação deve ser feita comparando as imagens críticas em diferentes tamanhos de tela antes de remover `unoptimized`.

## Scroll e renderização

- [ ] Isolar a barra de progresso de scroll em um componente pequeno.
- [ ] Evitar re-renderizar toda a Home a cada frame de scroll.
- [ ] Consolidar os listeners de scroll da página e da navegação.
- [ ] Garantir que qualquer `requestAnimationFrame` seja cancelado no cleanup.

## Animações

- [ ] Adicionar suporte a `prefers-reduced-motion`.
- [ ] Reduzir atualizações de estado em `QuantumText`.
- [ ] Avaliar o uso de `motionValue` no `MagneticWrapper`.
- [ ] Evitar animações infinitas quando não estiverem visíveis.
- [ ] Validar custo de `backdrop-filter`, blur e sombras em dispositivos móveis.

## Conteúdo repetido

- [ ] Marcar logos duplicados do carrossel como decorativos para leitores de tela.
- [ ] Confirmar que a duplicação visual do carrossel não cria trabalho desnecessário.

## Itens adiados

- [ ] Criar poster e revisar o carregamento avançado do vídeo do Hero.
- [ ] Revisar `preload`, fallback e compressão do vídeo.
- [ ] Evitar remount do vídeo durante alternância de tema.

Esses itens ficam adiados conforme decisão atual e só devem ser retomados quando a prioridade de vídeo for definida.

## Validação da fase

- [ ] Build de produção.
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
- [ ] Avaliar contenção de foco no menu mobile.
- [x] Adicionar `aria-expanded`, `aria-haspopup` e ID único ao dropdown de idioma.
- [x] Fechar o dropdown de idioma com `Escape` e clique externo.
- [ ] Revisar o indicador de scroll do Hero como elemento decorativo ou controle acessível.
- [ ] Adicionar `loading="lazy"` aos iframes quando apropriado.
- [ ] Revisar nomes acessíveis dos links externos e botões.
- [ ] Validar contraste nos temas claro e escuro.

## Internacionalização

- [ ] Mover textos de interface hardcoded para os locales.
- [ ] Completar e comparar as chaves de `pt-BR`, `en` e `es`.
- [ ] Remover chaves duplicadas ou obsoletas.
- [ ] Revisar textos que permanecem em português ao selecionar inglês ou espanhol.
- [ ] Sincronizar o atributo `lang` com o idioma atual.

## SEO

- [ ] Adicionar Open Graph.
- [ ] Adicionar Twitter Cards.
- [ ] Definir `metadataBase`.
- [ ] Definir URL canônica.
- [ ] Criar metadados específicos para cada rota.
- [ ] Revisar títulos e descrições traduzidos.
- [ ] Confirmar favicon e imagem de compartilhamento.

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

---

# Itens explicitamente adiados

- Padronização entre `lucide-react` e `@tabler/icons-react`.
- Poster, preload e otimização avançada do vídeo do Hero.
- Decisões finais sobre dependências da Vercel, que serão mantidas enquanto o deploy e o monitoramento forem realizados via Vercel.
