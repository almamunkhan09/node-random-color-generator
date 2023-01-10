import { stdin as input, stdout as output } from 'node:process';
import * as readline from 'node:readline/promises';
// import packages
import chalk from 'chalk';
import randomcolor from 'randomcolor';

// Initializing error messageand error color by chalk js

const hueError = 'input Color is not supported';
const luminosityError = 'Input luminosity is not supported';
const error = chalk.bold.red;

// Defining valid color

const validHue = ['', 'blue', 'red', 'green'];
const validLuminosity = ['', 'bright', 'dark', 'light'];

// define generate color function
const generateRandomColor = (inputHeu, inputLuminosity) => {
  return randomcolor({ hue: inputHeu, luminosity: inputLuminosity });
};
// function for print color

function printColor(hue, luminosity) {
  if (!validHue.includes(hue)) {
    console.log(error(hueError)); // provide error message if the color is not valid
  } else if (!validLuminosity.includes(luminosity)) {
    console.log(error(luminosityError)); // provide error message if the luminosity is not valid
  } else {
    const randomColor = generateRandomColor(hue, luminosity);
    // console.log(randomColor); //// to check if the generateRandomColor is working

    // Initialze the output that should look like

    const outputString = ` ###############################
  ###############################
  ###############################
  #####                     #####
  #####       ${randomColor}       #####
  #####                     #####
  ###############################
  ###############################
  ###############################`;

    const consoleColor = chalk.hex(randomColor); // defines the color to output
    console.log('\n', consoleColor(outputString));
  }
}

// checking if the user input is valid
// valid colors are blue,green,red
// valid luminosities are bright , light,dark

const inputHue = !process.argv[2] ? '' : process.argv[2].toLowerCase();
const inputLuminosity = !process.argv[3] ? '' : process.argv[3].toLowerCase();

// check if the user type ask instead of color

if (inputHue === 'ask') {
  const rl = readline.createInterface({ input, output });
  const hue = (await rl.question('What color do you want?')).toLowerCase();
  const luminosity = (
    await rl.question('How luminosity do you need? ')
  ).toLowerCase();
  console.log(hue, luminosity);
  console.log(validHue.includes(hue));
  rl.close();
  printColor(hue, luminosity);
  process.exit();
}

printColor(inputHue, inputLuminosity);
