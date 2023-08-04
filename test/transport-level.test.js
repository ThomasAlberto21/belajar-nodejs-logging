import winston from "winston";

test("Transport Level", () => {
  const logger = winston.createLogger({
    level: "info",
    transports: [
      new winston.transports.Console({}),

      // Only log errors to the file
      new winston.transports.File({
        level: "error",
        filename: "application-error.log",
      }),
    ],
  });

  logger.log({
    level: "error",
    message: "Hello error",
  });
});
