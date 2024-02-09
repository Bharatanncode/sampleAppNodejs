const winston = require('winston');
const { combine, timestamp, printf } = winston.format;

const logger = winston.createLogger({
  level: 'info',
  format: combine(
    timestamp(),
    printf(({ level, message, timestamp }) => {
      return `[${timestamp}] ${level.toUpperCase()}: ${message}`;
    })
  ),
  transports: [
    new winston.transports.File({
      filename: `logs/${new Date().toISOString().slice(0, 10)}.log`,
      maxsize: 10000000, // 10MB
      maxFiles: 30, // keep up to 30 files
    }),
  ],
});

module.exports = { logger };
