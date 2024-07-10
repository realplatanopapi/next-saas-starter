ARG NODE_VERSION=20.15.1

# Base
FROM node:${NODE_VERSION}-slim AS base
ENV NODE_ENV="production"
ARG PNPM_VERSION=9.5.0
LABEL fly_launch_runtime="Next.js"
WORKDIR /app
RUN apt-get update -qq && \
    apt-get install --no-install-recommends -y build-essential ca-certificates node-gyp openssl pkg-config python-is-python3
RUN npm install -g pnpm@$PNPM_VERSION

# Build
FROM base AS build
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile --prod=false
COPY . .
RUN pnpm run build
RUN pnpm prune --prod --ignore-scripts

# Run
FROM base
COPY --from=build /app /app
EXPOSE 3000
CMD [ "pnpm", "start" ]
