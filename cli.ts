#!/usr/bin/env node
import minimist from "minimist";
import execute from "./src";

execute(minimist(process.argv.slice(2)));
