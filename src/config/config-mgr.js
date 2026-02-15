import chalk from "chalk"
import { pkgUpSync } from "pkg-up"
import {readFileSync} from "fs"

module.export = function getConfig() {
    const pkgpath = pkgUpSync({cwd : process.cwd() })
    const pkg = JSON.parse(readFileSync(pkgpath), 'utf8')
    if(pkg.tool) {
		console.log('Found config', pkg.tool);
        return pkg.tool;
	} else {
		console.log(chalk.yellow("Coundn't find config, using default"))
        return {port: 1234}
	}

}