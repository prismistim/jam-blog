FROM node:16.13.2-alpine

EXPOSE 3000
ENV HOST 0.0.0.0

WORKDIR /work

RUN apk update && \
    apk add git && \
    npm install -g npm@latest nuxi nuxt3

CMD ["npm", "run", "dev"]