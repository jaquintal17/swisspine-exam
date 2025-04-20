# --- Build Stage ---
FROM maven:3.9-eclipse-temurin-21 AS builder

# Set the working directory in the build container
WORKDIR /build

# Copy the pom.xml and download dependencies (for caching)
COPY pom.xml .
RUN mvn dependency:go-offline

# Copy the source code
COPY src ./src

# Package the application
RUN mvn clean package

# --- Runtime Stage ---
FROM openjdk:21-jdk-slim

# Set the working directory
WORKDIR /app

# Copy the built jar from the builder stage
COPY --from=builder /build/target/swisspine-springboot-app-0.0.1-SNAPSHOT.jar app.jar

# Run the Spring Boot app
CMD ["java", "-jar", "app.jar"]
