FROM ubuntu:latest

# Copy git repo
WORKDIR /app
COPY . .

# Install node
RUN curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
RUN export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
RUN [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
RUN nvm install 10
RUN nvm use 10

# Install deps
RUN npm install
RUN npm run get-awesome
RUN npm run reindex 

# Download Hugo
RUN curl -L https://github.com/gohugoio/hugo/releases/download/v0.20/hugo_0.20_Linux-64bit.tar.gz --output  ./hugo_0.20_Linux-64bit.tar.gz
RUN gzip -d ./hugo_0.20_Linux-64bit.tar.gz
RUN ls