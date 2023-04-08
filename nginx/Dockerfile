FROM node:lts-alpine3.12 as build

WORKDIR /frontend
COPY ./frontend/package.json ./
COPY ./frontend/yarn.lock ./
RUN yarn install
COPY ./frontend/ ./
RUN yarn build


FROM nginx:1.18.0-alpine

RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d
COPY --from=build /frontend/build /usr/share/nginx/html
