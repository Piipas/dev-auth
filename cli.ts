import minimist from "minimist";
import execute from "src/index";

execute(minimist(process.argv.slice(2)));
