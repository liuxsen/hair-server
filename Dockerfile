FROM node

WORKDIR /app
ADD . /app
EXPOSE 7001
CMD [ "npm run start" ]