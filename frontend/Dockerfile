# Frontend application (React.js)
FROM node:16

WORKDIR /app/frontend

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/frotnend/node_modules/.bin:$PATH

COPY package*.json ./

COPY yarn.lock ./

RUN yarn install --ignore-platform

COPY . .

EXPOSE 3000

CMD ["yarn", "start"]
