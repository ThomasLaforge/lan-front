FROM node:20.19.0-alpine
WORKDIR /app
RUN npm install -g serve
COPY package.json .
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3005
CMD ["serve", "-s", "dist", "-l", "3005"]