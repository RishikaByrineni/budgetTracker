FROM amazoncorretto:8

WORKDIR /home/app/

ADD target/*.jar /home/app/app.jar

EXPOSE 8085

ENTRYPOINT [ \
    "java",\
    "-Djava.security.egd=file:/dev/./urandom",\
    "-jar",\
    "/home/app/app.jar"\
]