# syntax=docker/dockerfile:1
ARG NODE_VERSION=24.18.0
ARG ALPINE_VERSION=3.23

FROM node:${NODE_VERSION}-alpine${ALPINE_VERSION} AS build
WORKDIR /app
COPY package.json package-lock.json .npmrc ./
RUN npm ci
COPY . .
RUN npm run build && npm prune --omit=dev

FROM node:${NODE_VERSION}-alpine${ALPINE_VERSION}

LABEL org.opencontainers.image.source=https://github.com/Alekosss/ScienceCrossroads

ENV NODE_ENV=production PORT=3000
WORKDIR /app

COPY --from=build /app/package.json ./
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/build ./build

# Numeric UID/GID so Kubernetes runAsNonRoot can verify it (the "node" user is 1000).
USER 1001:1001
EXPOSE 3000

CMD ["node", "build"]
