# Guia de gerenciamento de eventos — LACQ Feynman

Este documento explica como adicionar, remover ou mover eventos entre as seções de próximos eventos e eventos realizados sem quebrar i18n, acessibilidade ou otimização.

## 1. Próximos eventos

**Arquivo:** `src/ui/components/UpcomingEvents.jsx`

Os próximos eventos ficam no array `upcomingEvents`. Cada evento usa chaves de tradução:

```javascript
const upcomingEvents = [
  {
    titleKey: 'upcomingEventKeyTitle',
    subtitleKey: 'upcomingEventKeySubtitle',
    topicKey: 'upcomingEventKeyTopic',
    dateKey: 'upcomingEventKeyDate',
    timeKey: 'upcomingEventKeyTime',
    locationKey: 'upcomingEventKeyLocation',
    descriptionKey: 'upcomingEventKeyDescription',
    footerKey: 'upcomingEventKeyFooter',
    link: EXTERNAL_LINKS.upcomingEvent,
  },
];
```

Para um novo link externo recorrente, adicione primeiro a URL em `src/utils/links.js` em vez de espalhá-la pelos componentes.

Para um evento com imagem local, importe `getAssetPath` e use uma imagem otimizada com `next/image`. Não crie URLs ou assets fictícios.

### Estado vazio

Para exibir o estado sem próximos eventos:

```javascript
const upcomingEvents = [];
```

As chaves `noUpcomingEventsTitle` e `noUpcomingEventsText` já existem nos locales.

## 2. Eventos realizados

**Arquivo:** `src/ui/components/Events.jsx`

### Evento com vídeo do YouTube

```javascript
{
  titleKey: 'pastEventTitle',
  dateKey: 'pastEventDate',
  descriptionKey: 'pastEventDescription',
  youtubeId: 'ID_DO_VIDEO',
}
```

O iframe é carregado com `loading="lazy"` quando o card é expandido.

### Evento com imagem

```javascript
{
  titleKey: 'pastEventTitle',
  dateKey: 'pastEventDate',
  descriptionKey: 'pastEventDescription',
  image: getAssetPath('/images/lacqf/event-image.webp'),
}
```

Imagens de eventos devem usar `next/image`, `fill`, um wrapper relativo com proporção definida, `sizes` e `loading="lazy"`. Não aplicar `width` ou `height` assimétricos via style no `Image`.

## 3. Traduções

Adicione as chaves correspondentes nos três arquivos:

- `src/locales/pt-BR.json`
- `src/locales/en.json`
- `src/locales/es.json`

Exemplo:

```json
"upcomingEventKeyTitle": "Nome do evento",
"upcomingEventKeySubtitle": "Subtítulo",
"upcomingEventKeyTopic": "Tema do evento",
"upcomingEventKeyDate": "07 de Abril de 2026",
"upcomingEventKeyTime": "08h00 às 20h00 (BRT)",
"upcomingEventKeyLocation": "Sorocaba, Brasil",
"upcomingEventKeyDescription": "Descrição curta...",
"upcomingEventKeyFooter": "Mensagem final"
```

Não deixe textos de interface, labels de data/horário/localização ou textos alternativos somente em português. Use `t('chave')`.

## 4. Regras de comportamento e acessibilidade

- O componente `Events` possui cards expansíveis.
- Botões de expansão devem ter `type="button"`.
- Mantenha `aria-expanded` e `aria-controls` sincronizados.
- Use IDs únicos para os painéis expandidos.
- Ícones decorativos devem usar `aria-hidden="true"`.
- Links externos devem possuir `target="_blank"` e `rel="noopener noreferrer"`.
- O texto visível do link deve fornecer um nome acessível adequado.
- Não introduza smooth scroll.
- Respeite `prefers-reduced-motion`; não adicione animações inevitáveis ou infinitas sem fallback.

## 5. Regras visuais e de performance

- Preserve o padrão visual atual e o uso de `font-title` nos títulos.
- Prefira imagens `.webp` ou outro formato eficiente já aprovado pelo projeto.
- Defina `sizes` de acordo com o layout real.
- Use `loading="lazy"` em imagens e iframes abaixo da dobra.
- Efeitos Framer Motion devem continuar condicionados por `useReducedMotion` quando forem adicionados.
- Evite blur, sombras ou animações infinitas adicionais sem avaliar custo mobile.
- O `QuantumText` pode ser usado em títulos de seção quando o efeito de estabilização for apropriado.
- `MagneticWrapper` só deve ser usado para interações de mouse em desktop; ele já ignora ponteiros não-mouse e movimento reduzido.

## 6. Validação após alterações

Execute:

```bash
npm run lint
npm run build
```

Se houver alteração de dependência ou lockfile:

```bash
npm ci
npm audit
npm audit --omit=dev
```

Confirme também manualmente:

- Expansão e fechamento do card.
- Foco e teclado.
- Renderização nos três idiomas.
- Carregamento lazy do vídeo/imagem.
- Ausência de warnings de proporção do `next/image`.
