FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
COPY package-lock.json ./

# Install dependencies
RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"] 
# ENTRYPOINT ["pnpm", "run", "dev", "--", "--host=0.0.0.0"]