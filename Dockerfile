FROM node

WORKDIR /app
COPY package.json ./
COPY yarn.lock ./
RUN yarn install
COPY . .
EXPOSE 9090

CMD ["yarn", "run:dev"]
