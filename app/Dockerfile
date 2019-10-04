From mhart/alpine-node:latest

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm install --only=production

# Bundle app source
COPY . .
RUN file="$(ls -1 ./)" && echo $file
RUN echo $(ls -1 ./)
EXPOSE 3000
# ADD start.sh /start.sh
# RUN chmod +x /start.sh
# CMD ["/start.sh"]
CMD [ "node ", "index.js" ]
