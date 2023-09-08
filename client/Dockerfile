FROM node:14.1.0 as build
WORKDIR /app
copy . .
RUN npm install
RUN npm run build


FROM nginx:1.16.0-alpine
COPY --from=build /app/dist /var/www/
RUN rm /etc/nginx/conf.d/default.conf
COPY ./nginx.conf /etc/nginx/conf.d
EXPOSE 80
ENTRYPOINT ["nginx", "-g", "daemon off;"]
