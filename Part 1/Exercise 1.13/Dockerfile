FROM golang:1.16

WORKDIR /usr/src/app

ENV REQUEST_ORIGIN=http://localhost:5000

COPY . .

RUN go build

EXPOSE 8080

CMD ./server
