FROM node:lts-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install --force 
COPY . . 
RUN npm run build:csr


FROM node:lts-alpine
WORKDIR /srv/app
RUN npm i -g serve
COPY --from=build /app/dist/*/browser/ /srv/app/
EXPOSE 8080
CMD ["serve", "-s", "./browser", "-l", "8080"]