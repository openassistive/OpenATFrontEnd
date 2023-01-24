FROM node:10-alpine

# Copy git repo
WORKDIR /app
COPY . .

# Install deps
RUN npm install

RUN npm run get-awesome

RUN npm run reindex 

# Download Hugo
RUN curl -L https://github.com/gohugoio/hugo/releases/download/v0.20/hugo_0.20_Linux-64bit.tar.gz --output  ./hugo_0.20_Linux-64bit.tar.gz
RUN gzip -d ./hugo_0.20_Linux-64bit.tar.gz
RUN ls