# Los Angeles Mountains PSD to Code Conversion

## Fonts

Lato, Oswald and Bebas are the fonts used in the mockup. Oswald and Lato are used as headings throughout the page. These are Google fonts and I've imported them into the design. Bebas however, is a downloadable only font. 

With the downloadable font, I have a few options:

1. Convert the font to a web-font, and serve it to users when they view the page.
2. Any use of Bebas, instead output as an image, and not serve the font.

For simplicity and speed, I chose option #2. However, an idea I had, if I was to use option #1, was to slice the mountains image along the mountains themselves (using my Wacom Bamboo stylus), so that the hero image is broken into 3 pieces (1) the background sky layer, (2) the foreground mountain layer, and (3) the text itself (self-hosted as a web-font). That approach would be how I'd tackle it from  a more complex way. However, again, for speed and simplicity in this mockup, I output the Bebas pieces as images (including the entire hero image, which I web optimized at 253KB only).

### Twitter Bootstrap

This project uses Twitter Bootstrap for responsiveness. The stylings have been customized for the mockup needs.

### Gulp

This project uses Gulp to process the SCSS to CSS. I've included gulp and gulp-sass to the dev dependencies in `package.json`. Once the dependencies are installed on your local machine, you can run `gulp watch` so that any changes to the SCSS file is automatically generated into CSS. If you need any help, please message me.