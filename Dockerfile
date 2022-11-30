FROM node:16-alpine as builder

RUN mkdir -p /opt/app
ARG NODE_ENV=production
ENV NODE_ENV $NODE_ENV

WORKDIR /opt
COPY package.json package-lock.json yarn.lock ./
RUN yarn install && yarn build

WORKDIR /opt/app
COPY ./src/ /opt/app

FROM nginx:alpine

EXPOSE 80
RUN rm /etc/nginx/conf.d/default.conf
COPY --from=builder /opt/app/build /usr/share/nginx/html
COPY --from=builder /opt/app/nginx.conf /etc/nginx/conf.d/default.conf

ENTRYPOINT ["nginx", "-g", "daemon off;"]