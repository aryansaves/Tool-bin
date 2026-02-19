import chalk from "chalk"

export default function start(config) {
    console.log(chalk.bgCyanBright('  Starting the app '))
    console.log(chalk.gray('Received config in the start -'), config)
}
