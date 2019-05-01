FROM node:10.15.3

ADD . /app/
WORKDIR /app

RUN npm install

EXPOSE 3000

ADD https://github.com/ufoscout/docker-compose-wait/releases/download/2.4.0/wait /wait
RUN chmod +x /wait

CMD /wait && npm run prod