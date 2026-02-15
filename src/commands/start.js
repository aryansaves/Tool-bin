import chalk from "chalk"

module.export = function start(config) {
    console.log(chalk.bgCyanBright('  Starting the app '))
    console.log(chalk.gray('Received config in the start -'), config)
}