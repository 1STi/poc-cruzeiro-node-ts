
FROM node:alpine

# diretório alvo
RUN mkdir -p /usr/src/poc-cruzeiro-node-ts
WORKDIR /usr/src/poc-cruzeiro-node-ts

# instalação de dependências
RUN apk update && apk upgrade
RUN apk add python3 g++ make

# copiar o projeto e instalar os pacotes com o npm
COPY . /usr/src/poc-cruzeiro-node-ts/
RUN npm install

# instalação dos pacotes para envio de email
# RUN apk add msmtp
# RUN ln -sf /usr/bin/msmtp /usr/sbin/sendmail

# abrindo a porta 3000
EXPOSE 3000

# build app
RUN npm run build

# inicializando a API
 CMD [ "npm","run", "start:prod" ]
