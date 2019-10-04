 FROM mysql:latest

ENV MYSQL_ROOT_PASSWORD 1234  
ENV MYSQL_DATABASE gmail  
ENV MYSQL_USER users_service  
ENV MYSQL_PASSWORD 1234

ADD setup.sql /docker-entrypoint-initdb.d
