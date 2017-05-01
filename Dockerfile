FROM node:boron

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY . /usr/src/app/
RUN npm uninstall -g @angular/cli
RUN npm cache clean
RUN npm install -g @angular/cli@latest

RUN npm install

# Expose port 
EXPOSE 4200

# Entrypoint -> npm start
CMD [ "ng", "serve" ]

