FROM node:alpine as build 
WORKDIR /client
COPY package.json .
RUN npm install 
COPY . .
RUN npm run build
EXPOSE 3000
FROM nginx
COPY --from=build /client/build /usr/share/nginx/html
ENTRYPOINT [ "nginx" , "-g" , "daemon off;" ]