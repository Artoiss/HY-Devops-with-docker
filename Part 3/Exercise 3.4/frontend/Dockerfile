FROM ubuntu:18.04

# Port
EXPOSE 5000

WORKDIR /usr/src/app

COPY . .

ENV REACT_APP_BACKEND_URL=http://localhost/api/

RUN apt-get install curl

RUN curl -sL https://deb.nodesource.com/setup_lts.x | bash -
RUN apt install -y node

RUN npm install

RUN npm run build

RUN npm install -g serve

RUN useradd -m appuser
RUN chown appuser .

USER appuser

CMD ["serve", "-s", "-l", "5000", "build"]
