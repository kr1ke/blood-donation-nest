# Основа на официальном образе Node.js
FROM node:20

# Определяем рабочую директорию
WORKDIR /usr/src/app

# Копируем файлы package.json и package-lock.json (если существует)
COPY package*.json ./

# Устанавливаем зависимости проекта
RUN npm install

# Копируем исходные коды проекта в контейнер
COPY . .

# Открываем порт, который слушает приложение
EXPOSE 3000

# Запускаем приложение с помощью `npm run start:dev` для горячей перезагрузки
CMD ["npm", "run", "start:dev"]