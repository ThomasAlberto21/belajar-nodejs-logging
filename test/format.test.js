import winston from "winston";

test("Logging with format", () => {
  const logger = winston.createLogger({
    level: "info",
    // format: winston.format.json(), // Default format
    format: winston.format.simple(), // Simple format
    transports: [new winston.transports.Console({})],
  });

  logger.log({
    level: "info",
    message: "Hello Logger",
  });
});

test("Logging with printf format", () => {
  const logger = winston.createLogger({
    level: "info",
    // Create custom format
    format: winston.format.printf((log) => {
      return `${new Date()} , ${log.level.toUpperCase()} : ${log.message}`;
    }),
    transports: [new winston.transports.Console({})],
  });

  logger.log({
    level: "info",
    message: "Hello Logging",
  });
});
