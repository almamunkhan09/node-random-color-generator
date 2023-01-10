# Random Color Generator

It is simple nodejs application. It will generate Random color based on user input and print in the console. Sounds Cool. Generate random color using the commands and write me feedback.

## Authors

- [@al mamun khan](https://github.com/almamunkhan09)

## Features

- Generate random color
- Takes command line input for color and luminosity
- Also supports user input for color and luminosity

## Documentation

[Documentation](https://linktodocumentation)
This application generate random color in the rgb color domain. Also feature of luminosity added to this application

To generate random color in the console run type command

```bash
$ node index
```

Also user can provide the color and luminosity level as the input. To add color and luminosity pass the color and luminosity arguments as in order to the command linktodocumentation

```bash
 $ node index <color name > <luminosity>

```

This application supports red,green and blue color. Also supports bright,dark and light luminosity as arguments. The case of inputs does not matter.

```bash
$ node index red dark
```

This code will generate color dark red color in the console. Moreover you can try with only color options.
For example

```bash
$ node index red
```

If you want the application should ask the user for input type the command

```bash
$ node index ask
```

This command will initiate a user input in tye command line. Answer the question and the color will appear as per the user.

note the application supports only RGB and bright,light,dark as luminosity input arguments.
