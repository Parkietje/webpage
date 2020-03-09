FROM node:12-buster as build
RUN yarn global add gatsby-cli
WORKDIR /app
COPY . ./
RUN yarn
RUN gatsby build

FROM nginx:1.13.12-alpine
COPY --from=build /app/public /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
