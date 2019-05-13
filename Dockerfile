FROM node:10.15.3

ADD . /app/
WORKDIR /app

RUN npm config set registry http://mirrors.tencentyun.com/npm/ \ 
    && npm install \
    && cp ./wait /wait \
    && chmod +x /wait 

EXPOSE 3000

CMD /wait && npm run prod