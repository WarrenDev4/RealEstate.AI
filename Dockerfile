FROM eclipse-temurin:17-jre-jammy

WORKDIR /app

COPY target/real-estate-ai-0.0.1-SNAPSHOT.jar app.jar

EXPOSE 8080

CMD ["java", "-jar", "app.jar"]