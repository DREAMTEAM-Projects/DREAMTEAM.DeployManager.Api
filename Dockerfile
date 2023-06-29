FROM node:lts-alpine

RUN mkdir -p /home/node/api/node_modules && chown -R node:node /home/node/api

WORKDIR /home/node/api

COPY --chown=node:node package.json yarn.* prisma/

USER node

COPY --chown=node:node . .

RUN yarn

RUN tsc

EXPOSE 3000

CMD ["npm", "start"]
