#Load Image
FROM node:latest

#Directory
WORKDIR /app

#Copy package.json first
COPY package.json .

#Npm install to install dependecies 
RUN npm install 
# ^^For dev

#This copies all files in local to the container
COPY . ./

CMD [ "npm", "run", "dev" ]