FROM nginx:stable-alpine

COPY ./public /usr/share/nginx/html

RUN mkdir -p $ROOT/logs/nginx && \
    rm -v /etc/nginx/nginx.conf && mkdir -p /run/nginx

ADD nginx.conf /etc/nginx/

EXPOSE 8000
