import winston from "winston";

test("Aplication transport", () => {
  const logger = winston.createLogger({
    level: "info",
    transports: [
      new winston.transports.Console({}),
      new winston.transports.File({ filename: "application.log" }),
    ],
  });

  logger.log({
    level: "info",
    message: "Hello Logger",
  });
});
