#!/usr/bin/env node
import arg from "arg"
import chalk from "chalk"
import {pkgUpSync} from "pkg-up"
import {readFileSync} from 'fs'

try {
const args = arg({
  '--start' : Boolean,
  '--build' : Boolean
});

if(args["--start"]){
	const pkgpath = pkgUpSync({cwd: process.cwd()})
	const pkg = JSON.parse(readFileSync(pkgpath, "utf8"))
	if(pkg.tool) {
		console.log('Found config', pkg.tool);
	} else {
		console.log(chalk.yellow("Coundn't find config, using default"))
	}
	console.log(chalk.bgCyanBright("starting the app"));
	}
} catch(e){
	console.log(chalk.yellow(e.message));
	console.log();
	usage();
}

function usage() {
	console.log(`${chalk.whiteBright('toolt [CMD]')}
	${chalk.greenBright('--start')}\tStarts the app
	${chalk.greenBright('--build')}\tBuilds the app`);
}
