/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable no-console */

function getTimestamp() {
  return `${new Date().toLocaleString()}.${new Date().getMilliseconds()}`
}

function logWithTimestamp(message?: any, ...optionalParams: any[]) {
  console.log(`[${getTimestamp()}]`, message, ...optionalParams)
}

function infoWithTimestamp(message?: any, ...optionalParams: any[]) {
  console.info(`[${getTimestamp()}]`, message, ...optionalParams)
}

function warnWithTimestamp(message?: any, ...optionalParams: any[]) {
  console.warn(`[${getTimestamp()}]`, message, ...optionalParams)
}

function errorWithTimestamp(message?: any, ...optionalParams: any[]) {
  console.error(`[${getTimestamp()}]`, message, ...optionalParams)
}

const Logger = {
  log: logWithTimestamp,
  info: infoWithTimestamp,
  warn: warnWithTimestamp,
  error: errorWithTimestamp,
}

export default Logger
