# Guia de Gerenciamento de Eventos - LACQ Feynman

Este documento fornece instruções e snippets de código para adicionar, remover ou mover eventos entre as seções "Próximos Eventos" e "Eventos Já Realizados".

---

## 1. Próximos Eventos (Upcoming Events)
**Arquivo:** `src/ui/components/UpcomingEvents.jsx`

### Como Adicionar um Evento
Adicione um novo objeto ao array `upcomingEvents`.

```javascript
const upcomingEvents = [
  {
    titleKey: "upcomingEventKeyTitle",      // Chave no JSON de tradução
    subtitleKey: "upcomingEventKeySubtitle",
    topicKey: "upcomingEventKeyTopic",
    dateKey: "upcomingEventKeyDate",
    timeKey: "upcomingEventKeyTime",
    locationKey: "upcomingEventKeyLocation", // Opcional
    descriptionKey: "upcomingEventKeyDesc",
    footerKey: "upcomingEventKeyFooter",
    link: "https://link-do-evento.com",
    image: getAssetPath("/images/caminho/da/imagem.webp"),
  },
];
```

### Como Remover Todos os Eventos (Estado Vazio)
Para exibir a mensagem "Novos eventos serão anunciados em breve", deixe o array vazio:
```javascript
const upcomingEvents = [];
```

---

## 2. Eventos Já Realizados (Past Events)
**Arquivo:** `src/ui/components/Events.jsx`

### Como Adicionar um Evento com Vídeo (YouTube)
Adicione à lista `events` no topo do arquivo:
```javascript
{
  titleKey: "pastEventTitle",
  dateKey: "pastEventDate",
  descriptionKey: "pastEventDesc",
  youtubeId: "ID_DO_VIDEO", // Ex: XAKeFgc6KFM
},
```

### Como Adicionar um Evento com Imagem
```javascript
{
  titleKey: "pastEventTitle",
  dateKey: "pastEventDate",
  descriptionKey: "pastEventDesc",
  image: getAssetPath("/images/lacqf/imagem.webp"),
},
```

---

## 3. Traduções (Locales)
**Arquivos:** `src/locales/pt-BR.json`, `en.json`, `es.json`

Sempre adicione as chaves correspondentes nos três arquivos para garantir a consistência do i18n.

**Exemplo de estrutura:**
```json
"upcomingEventUnisoTitle": "UNISO QUANTUM DAY",
"upcomingEventUnisoSubtitle": "World Quantum Day",
"upcomingEventUnisoTopic": "Evento pioneiro...",
"upcomingEventUnisoDate": "07 de Abril de 2026",
"upcomingEventUnisoTime": "08h00 às 20h00 (BRT)",
"upcomingEventUnisoDescription": "Descrição curta...",
"upcomingEventUnisoFooter": "World Quantum Day 2026"
```

---

## Regras de Consistência Visual
1. **Imagens:** Use preferencialmente o formato `.webp`.
2. **Textos:** Títulos de eventos próximos devem usar `font-title` (Orbitron).
3. **Botões:** Devem usar `MagneticWrapper` para interatividade premium em desktop.
4. **QuantumText:** Use o componente `<QuantumText text={t('key')} />` para títulos de seções para manter o efeito de "superposição".
