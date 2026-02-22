import createLogger from "../logger.js"
const logger = createLogger('start')

export default function start(config) {
    logger.highlight('  Starting the app ')
    logger.debug('Received config in the start -', config)
}
