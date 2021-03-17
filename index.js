const chalk = require("chalk");

const remoteClass = (name, name1, name2, name3) => {
    return `My classmates are: ${chalk.blue(name)}, ${chalk.yellow(name1)}, ${chalk.red(name2)} and ${chalk.green(name3)}`;
};

module.exports =  remoteClass;