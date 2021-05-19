FROM ubuntu:18.04
RUN apt-get update && apt-get install -y curl

COPY script_file.txt .
CMD ["/bin/bash", "script_file.txt"]
