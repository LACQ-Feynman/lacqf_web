FROM node:20-alpine as builder

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm ci

COPY . .

RUN npx prisma generate

RUN npm run build

FROM node:20-alpine

WORKDIR /app

COPY --from=builder /app ./

EXPOSE 3000

ENV NODE_ENV=production

CMD ["npm", "run"]