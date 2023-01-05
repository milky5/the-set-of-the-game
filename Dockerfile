FROM ubuntu:22.04
WORKDIR /app
RUN apt-get update
RUN apt-get install -y curl
RUN curl -sL https://deb.nodesource.com/setup_14.x | bash -
RUN apt-get update
RUN apt-get install -y nodejs
RUN apt-get -y install aptitude
RUN aptitude install -y npm
CMD ["bash"]
