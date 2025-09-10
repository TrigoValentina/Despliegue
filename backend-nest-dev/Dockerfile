FROM node:18

WORKDIR /app

# Instalar dos2unix
RUN apt-get update && apt-get install -y dos2unix && rm -rf /var/lib/apt/lists/*

COPY package*.json ./
RUN npm install

COPY . .


# Convertir a formato Unix y dar permisos de ejecución
RUN dos2unix wait-for-it.sh && chmod +x wait-for-it.sh

CMD ["npm", "run", "start:dev"]