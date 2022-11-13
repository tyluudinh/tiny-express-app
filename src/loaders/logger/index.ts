import winston from 'winston';
import configs from '@app/configs';

const transports = [];
if (process.env.NODE_ENV !== 'development') {
  transports.push(new winston.transports.Console());
} else {
  transports.push(
    new winston.transports.Console({
      format: winston.format.combine(winston.format.cli(), winston.format.splat()),
    }),
  );
}

export const Logger = winston.createLogger({
  level: configs.logs.level,
  levels: winston.config.npm.levels,
  format: winston.format.combine(
    winston.format.timestamp({
      format: 'YYYY-MM-DD HH:mm:ss',
    }),
    winston.format.errors({ stack: true }),
    winston.format.splat(),
    winston.format.json(),
  ),
  transports,
});

export default Logger;
