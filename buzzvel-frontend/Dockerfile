FROM node:14-alpine

# diretório de trabalho do aplicativo
WORKDIR /app

# Copiar os arquivos de dependências
COPY package*.json ./

#RUN curl -sL https://deb.nodesource.com/setup_14.x | bash - \
#    && apt-get install -y nodejs
RUN npm install

# Copiar os arquivos do aplicativo
COPY . .

# Compilar o aplicativo
RUN npm run build

# Expões a porta
EXPOSE 3001

# Inicia o aplicativo
CMD ["npm", "start"]
