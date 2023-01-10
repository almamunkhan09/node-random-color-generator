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

// checking if the user input is valid
// valid colors are blue,green,red
// valid luminosities are bright , light,dark

const inputHue = !process.argv[2] ? '' : process.argv[2].toLowerCase();
const inputLuminosity = !process.argv[3] ? '' : process.argv[3].toLowerCase();

if (!validHue.includes(inputHue)) {
  console.log(error(hueError)); // provide error message if the color is not valid
} else if (!validLuminosity.includes(inputLuminosity)) {
  console.log(error(luminosityError)); //provide error message if the luminosity is not valid
} else {
  const randomColor = generateRandomColor(inputHue, inputLuminosity);
  // console.log(randomColor); //// to check if the generateRandomColor is working

  // Initialze the output that should look like

  const outputString = `###############################
###############################
###############################
#####                     #####
#####       ${randomColor}       #####
#####                     #####
###############################
###############################
###############################`;

  const consoleColor = chalk.hex(randomColor); // defines the color to output
  console.log(consoleColor(outputString));
}
