import winston from "winston";

test("Logging Level", () => {
  const logger = winston.createLogger({
    level: "debug", // configuration to display logs with a certain level
    transports: [new winston.transports.Console({})],
  });

  logger.error("Error message");
  logger.warn("Warning message");
  logger.info("Info message");
  logger.http("HTTP message");
  logger.verbose("Verbose message");
  logger.debug("Debug message");
  logger.silly("Silly message");
});
