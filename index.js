import chalk from 'chalk';
// import packages
import randomcolor from 'randomcolor';

const randomColor = randomcolor({ hue: 'blue', luminosity: 'light' });
console.log(randomColor);

const consoleColor = chalk.hex(randomColor);

const outputString = `###############################
###############################
###############################
#####                     #####
#####       ${randomColor}       #####
#####                     #####
###############################
###############################
###############################`;

console.log(consoleColor(outputString));
