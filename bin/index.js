#!/usr/bin/env node
import arg from "arg"
import chalk from "chalk"
import getconfig from "../src/config/config-mgr.js"
import start from "../src/commands/start.js"
import createLogger from "../src/logger.js"
const logger = createLogger('bin');

try {
const args = arg({
  '--start' : Boolean,
  '--build' : Boolean
});
logger.debug("received args", args)

if(args["--start"]){
	const config = getconfig()
	start(config)
	}
} catch(e){
	logger.warning(e.message);
	console.log();
	usage();
}

function usage() {
	console.log(`${chalk.whiteBright('toolt [CMD]')}
	${chalk.greenBright('--start')}\tStarts the app
	${chalk.greenBright('--build')}\tBuilds the app`);
}