import winston from "winston";

test('Create new logger' ,() => {
    const logger = winston.createLogger()

    logger.log({
        level: "info",
        message: "Hello Logger"
    })
})