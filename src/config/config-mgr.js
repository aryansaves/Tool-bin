import chalk from "chalk"
import {cosmiconfigSync} from 'cosmiconfig'
const  configloader = cosmiconfigSync('tool')
import schema from "./schema.json"  with { type: "json" };
import Ajv from 'ajv'
import betterajverror from "better-ajv-errors"
const ajv = new Ajv({jsonPointers: true})

export default function getConfig() {
    const result = configloader.search(process.cwd())
    if(!result) {
        console.log(chalk.yellow("could not find config, using default"))
        return {port : 1234}
    } else {
        const isValid = ajv.validate(schema, result.config)
        if(!isValid){
            console.log(chalk.yellow("Invalid config was passed"))
            console.log()
            console.log(betterajverror(schema, result.config, ajv.errors))
            process.exit(1)
        }
            console.log("found config ", result.config)
            return result.config;   
    }
}