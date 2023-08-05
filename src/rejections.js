import winston from "winston";

async function callAsync() {
  await Promise.reject(new Error("Oops!"));
}

const logger = winston.createLogger({
  level: "info",
  transports: [
    new winston.transports.Console({}),
    new winston.transports.File({
      handleExceptions: true,
      handleRejections: true,
      filename: "Exception.log",
    }),
  ],
});

callAsync();
