## Testing

### Code Validators

I used [w3.org's validator](https://validator.w3.org/) for my HTML validation checks, here are my results:

+ Home page (index.html)

    ![Home Page Validation](readme-files/html-test.png)

I used [w3.org's validator](https://jigsaw.w3.org/css-validator/) for my CSS validation checks.

+ CSS (style.css)

    ![CSS Validation](readme-files/css-test.png)

+ No errors were found within the document.

### Responsiveness

To test the responsiveness of the site I used [Chrome DevTools](https://developers.google.com/web/tools/chrome-devtools), [Firefox Devtools](https://developer.mozilla.org/en-US/docs/Tools) and [Responsive Design Checker](https://www.responsivedesignchecker.com/).


Responsiveness (website layout)

|           All Pages           | Samsung 9+ | Galaxy S5  | iPhone 6/7/8 | iPhone X | iPad | iPad Pro | Desktop 1024px | Desktop >1200px |
|:-----------------------------:|------------|------------|--------------|----------|------|----------|----------------|-----------------|
| Website is  responsive >800px |     N/A    |    N/A     |      N/A     |    N/A   | Good |   Good   |      Good      |       Good      |
| Website is  responsive <799px |    Good    |    Good    |     Good     |   Good   |  N/A |    N/A   |       N/A      |       N/A       |
|                               |            |            |              |          |      |          |                |                 |
| **index.html**                |            |            |              |          |      |          |                |                 |
| Links/URLs                    |    Good    |    Good    |     Good     |   Good   | Good |   Good   |      Good      |      Good       |
| Images                        |    Good    |    Good    |     Good     |   Good   | Good |   Good   |      Good      |      Good       |
| Renders as expected           |    Good    |    Good    |     Good     |   Good   | Good |   Good   |      Good      |      Good       |
|                               |            |            |              |          |      |          |                |                 |
| **Questions Screen**          |            |            |              |          |      |          |                |                 |
| Images                        |    Good    |    Good    |     Good     |   Good   | Good |   Good   |      Good      |      Good       |
| Renders as expected           |    Good    |    Good    |     Good     |   Good   | Good |   Good   |      Good      |      Good       |
|                               |            |            |              |          |      |          |                |                 |
| **Answers Screen**            |            |            |              |          |      |          |                |                 |
| Links/URLs                    |    Good    |    Good    |     Good     |   Good   | Good |   Good   |      Good      |      Good       |
| Images                        |    Good    |    Good    |     Good     |   Good   | Good |   Good   |      Good      |      Good       |
| Renders as expected           |    Good    |    Good    |     Good     |   Good   | Good |   Good   |      Good      |      Good       |
|                               |            |            |              |          |      |          |                |                 |
| **Finish Screen**             |            |            |              |          |      |          |                |                 |
| Renders as expected           |    Good    |    Good    |     Good     |   Good   | Good |   Good   |      Good      |      Good       |

Notes:

+ Through the use of BootStrap and my own design input the site is responsive on all screen sizes that I have tested personally. There may be slight issues on certain abstract displays that might need additional media queries as I experienced minor issues in the development of the project pertaining to content being too big for the viewport.

### Browser Compatibility

I tested the appearance and responsiveness of the website across 5 different browsers and varying browser sizes and these are my results:

|    All Pages   | Firefox | Chrome |  IE  | Edge | Opera |
|:--------------:|:-------:|:------:|:----:|:----:|:-----:|
| Appearance     |   Good  |  Good  | Good | Good |  Good |
| Responsiveness |   Good  |  Good  | Good | Good |  Good |

Notes:

+ Everything functions as expected with no issues that I could find.

### Bugs

+ When trying to get the answers to display correctly I was originally using a standard for loop. (`for (i=0;i<answers.length;i++)`). After a few hours of attempts of trying to get my dataSet to import and load correctly. I decided to look into other methods of providing this functionality.
    + I have included within the credits section of my README.md how I went about fixing this bug using the array function forEach.