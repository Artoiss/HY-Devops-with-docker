FROM golang:1.16

WORKDIR /usr/src/app

ENV REQUEST_ORIGIN=http://localhost/

COPY . .

RUN go build

EXPOSE 8080

RUN useradd -m appuser
RUN chown appuser .

USER appuser

CMD ./server
