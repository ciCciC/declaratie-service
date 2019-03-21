FROM openjdk:8-jdk-alpine
VOLUME /tmp
EXPOSE 8080
ADD target/springapi-postgres.jar springapi-postgres.jar
ENTRYPOINT ["java", "-jar", "springapi-postgres.jar"]
