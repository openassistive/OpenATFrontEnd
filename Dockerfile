FROM debian

ARG AlgoliaAPIKey
ARG AlgoliaAppID
ARG HUGO_VERSION
ARG OpenATIndexName

SHELL [ "/bin/bash", "-l", "-c" ]

# Copy git repo
WORKDIR /app
COPY . .

# Install node (via version manager)
RUN apt-get update && apt-get install -y curl
RUN curl --silent -o- https://raw.githubusercontent.com/creationix/nvm/master/install.sh | bash
RUN nvm install
RUN nvm use 10

# Install deps
RUN npm install

# Run scripts
RUN npm run get-awesome
RUN npm run reindex 

# Download Hugo
RUN curl -L https://github.com/gohugoio/hugo/releases/download/v0.20/hugo_0.20_Linux-64bit.tar.gz --output  ./hugo_0.20_Linux-64bit.tar.gz
RUN tar -xf ./hugo_0.20_Linux-64bit.tar.gz
RUN ./hugo_0.20_linux_amd64/hugo_0.20_linux_amd64 -b "/"
RUN ls -l