import createLogger from "../logger.js"
const logger = createLogger('config')

import {cosmiconfigSync} from 'cosmiconfig'
const  configloader = cosmiconfigSync('toolt')
import schema from "./schema.json"  with { type: "json" };
import Ajv from 'ajv'
import betterajverror from "better-ajv-errors"
const ajv = new Ajv( {
    strict: false
})



export default function getConfig() {
    const result = configloader.search()
    if(!result) {
        logger.warning("could not find config, using default")
        return {port : 1234}
    } else {
        const isValid = ajv.validate(schema, result.config)
        if(!isValid){
            logger.warning("Invalid config was passed")
            console.log()
            console.log(betterajverror(schema, result.config, ajv.errors))
            process.exit(1)
        }
            logger.debug("found config ", result.config)
            return result.config;   
    }
}