import winston from "winston";
import TransportStream from "winston-transport";

test("Create new Transport", () => {
  class MyTransport extends TransportStream {
    constructor(option) {
      super(option);
    }

    log(info, next) {
      console.log(
        `${new Date()} : ${info.level.toUpperCase()} : ${info.message} `,
      );
      next();
    }
  }

  const logger = winston.createLogger({
    level: "silly",
    transports: [new MyTransport({})],
  });

  logger.error("Error message");
  logger.warn("Warning message");
  logger.info("Info message");
  logger.http("HTTP message");
  logger.verbose("Verbose message");
  logger.debug("Debug message");
  logger.silly("Silly message");
});
