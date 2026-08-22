# LACQ Feynman — Histórico de melhorias visuais e UX

Este documento registra ideias visuais do projeto e seu estado atual. Ele não substitui o roadmap técnico em `plans/code-quality-roadmap.md`.

O objetivo atual é preservar a identidade visual existente e evitar mudanças estéticas sem decisão explícita. Melhorias de performance e acessibilidade devem manter o visual padrão para usuários que não solicitaram redução de movimento.

## 1. Cursor quântico / Probability Cloud

- **Estado:** removido/adiado.
- O antigo `QuantumCursor.jsx` não possuía uso ativo e foi removido.
- Não reintroduzir cursor customizado sem uma decisão de produto, validação de acessibilidade e teste de performance.

## 2. Texto em superposição / QuantumText

- **Estado:** implementado em versão controlada.
- `QuantumText.jsx` usa GSAP/ScrollTrigger para estabilizar caracteres ao entrar na viewport.
- O efeito atualiza o nó de texto diretamente, evitando `setState` a cada frame.
- O efeito é desativado quando `prefers-reduced-motion` está ativo.

## 3. Efeito de grão quântico

- **Estado:** legado visual existente, não priorizado.
- O CSS ainda contém a infraestrutura `.grain-overlay` e sua animação.
- Não ampliar ou aplicar globalmente sem validar custo, contraste e consumo em dispositivos móveis.

## 4. Interação magnética nos CTAs

- **Estado:** implementado.
- `MagneticWrapper.jsx` utiliza spring motion values em vez de estado React por movimento do mouse.
- É desativado para ponteiros que não sejam mouse e para usuários com movimento reduzido.
- O efeito visual padrão foi preservado.

## 5. Linhas de entrelaçamento

- **Estado:** não implementado.
- Não há linhas conectando seções no código atual.
- Permanece fora do escopo até existir uma decisão visual explícita.

## 6. Smooth Scroll / Lenis

- **Estado:** removido por decisão do projeto.
- `SmoothScroll.jsx` e referências a Lenis não fazem parte do projeto.
- O Hero usa rolagem nativa sem `behavior: 'smooth'`.
- Não reintroduzir smooth scroll.

## 7. Animações e movimento reduzido

- **Estado:** implementado.
- CSS global respeita `prefers-reduced-motion`.
- Framer Motion usa `useReducedMotion` nas animações relevantes.
- Efeitos infinitos aguardam a viewport quando aplicável.
- Usuários sem a preferência continuam vendo as animações normais.

## 8. Imagens e proporção visual

- **Estado:** otimização implementada.
- `next/image` usa o otimizador nativo.
- `sizes`, `priority` e `loading="lazy"` foram revisados.
- Imagens `fill` usam wrappers relativos com dimensões coerentes.
- Warnings de proporção dos logos Foton, USP e logo completa foram corrigidos.
- A confirmação visual final em desktop/mobile ainda depende de teste manual.

## 9. Dropdown de idioma

- **Estado:** refinado.
- Usa superfície temática, borda/acento quântico, item selecionado e indicador visual de seleção.
- Entrada e saída usam fade/escala, os itens usam stagger leve e o indicador gira ao abrir.
- Navegação por teclado inclui setas, Home, End, Escape e fechamento ao sair com Tab.
- A animação é reduzida para usuários com `prefers-reduced-motion`.

## 10. Próximas avaliações visuais

As próximas avaliações possíveis, sem redesign, são:

- Lighthouse/PageSpeed em desktop e mobile.
- Contraste nos temas claro e escuro.
- Custo de blur, sombras e `backdrop-filter` em dispositivos móveis.
- Poster, preload e compressão do vídeo do Hero.
- Medição do bundle de Framer Motion e GSAP.

Esses itens estão registrados com mais detalhes no roadmap técnico.
