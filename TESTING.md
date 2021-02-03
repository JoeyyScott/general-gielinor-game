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

### Testing User stories

- #### First Time Visitor Goals    

    + As a **user** I want to understand the website's purpose on my first visit.
        + Upon loading the site the user will land on index.html and be greeted with the header "Welcome to the General Gielinor Game"
        + There is a tagline that says "Want to test your RuneScape knowledge?" which tells the user the purpose of the site.
        + There is also a prompt for the user to click the "Find out more" button if they wish to find out more information.
            |                                                  index.html                                                         |
            | :-----------------------------------------------------------------------------------------------------------------: |
            | [Mobile](https://github.com/JoeyyScott/general-gielinor-game/blob/master/readme-files/user-stories/user1mobile.png) |
            | [Tablet](https://github.com/JoeyyScott/general-gielinor-game/blob/master/readme-files/user-stories/user1tablet.png) |
            |     [PC](https://github.com/JoeyyScott/general-gielinor-game/blob/master/readme-files/user-stories/user1pc.png)     |

    + As a **user** I want easily to be able to smoothly use all the desired function of the site.
        + Upon loading the site, the user can clearly see there are many buttons that provide functionality.
        + These include; Start quiz, Find out more, toggle music button, return to Home, suggest a question and LinkedIn/GitHub links.
        + Both the find out more and suggest a question will pop up modals which makes the site simple to use and the links open in a seperate tab for user retention.
            |                                                  index.html                                                         |
            | :-----------------------------------------------------------------------------------------------------------------: |
            | [Mobile](https://github.com/JoeyyScott/general-gielinor-game/blob/master/readme-files/user-stories/user2mobile.png) |
            | [Tablet](https://github.com/JoeyyScott/general-gielinor-game/blob/master/readme-files/user-stories/user2tablet.png) |
            |     [PC](https://github.com/JoeyyScott/general-gielinor-game/blob/master/readme-files/user-stories/user2pc.png)     |

    + As a **user** I want to expand my RuneScape game knowledge in an intuitve way.
        + Upon loading the site the user is greeted with the pre quiz screen which provides a moment for them to compose themselves before the quiz.
        + Throughout the site the font RuneScape-UF is used which intuitively speaks to the users as RuneScape players because it draws on their knowledge of the font to promote learning.
        + On each question the user is presented with a picture for that question as well as a count of the remaining questions.
            |                                                  index.html                                                         |
            | :-----------------------------------------------------------------------------------------------------------------: |
            | [Mobile](https://github.com/JoeyyScott/general-gielinor-game/blob/master/readme-files/user-stories/user3mobile.png) |
            | [Tablet](https://github.com/JoeyyScott/general-gielinor-game/blob/master/readme-files/user-stories/user3tablet.png) |
            |     [PC](https://github.com/JoeyyScott/general-gielinor-game/blob/master/readme-files/user-stories/user3pc.png)     |

    + As a **user** I want to be able to view and use the site on any device.
        + I have tested the website across multiple screen sizes and have found no issues thus far.
        + The index page and it's associated modals provides all the functionality across multiple screen sizes.
        + Screenshots for the main site but can be found in other tests but I've included pictures of the modal.
            |                                                  index.html                                                         |
            | :-----------------------------------------------------------------------------------------------------------------: |
            | [Mobile](https://github.com/JoeyyScott/general-gielinor-game/blob/master/readme-files/user-stories/user4mobile.png) |
            | [Tablet](https://github.com/JoeyyScott/general-gielinor-game/blob/master/readme-files/user-stories/user4tablet.png) |
            |     [PC](https://github.com/JoeyyScott/general-gielinor-game/blob/master/readme-files/user-stories/user4pc.png)     |

    + As a **user** I want to see other work the site owner has created.
        + In the footer there is a GitHub icon with a link that will open my GitHub profile up in a new tab for user retention.
        + Also in the footer there is a LinkedIn icon with similar functionality should the user to wish to view my profile there.
            |                                                  Footer Icons                                                       |
            | :-----------------------------------------------------------------------------------------------------------------: |
            | [Mobile](https://github.com/JoeyyScott/general-gielinor-game/blob/master/readme-files/user-stories/user5mobile.png) |
            | [Tablet](https://github.com/JoeyyScott/general-gielinor-game/blob/master/readme-files/user-stories/user5tablet.png) |
            |     [PC](https://github.com/JoeyyScott/general-gielinor-game/blob/master/readme-files/user-stories/user5pc.png)     |

    + As a **user** I want to be able contact the site owner with any questions I would like to see added.
        + In the footer there is a '?' icon which opens up a suggest a question Modal that allows the user to submit their question, answer list, correct answer and user to be accredited.
        + User Story 4 has pictures of the suggest a quesiton modal across all screen sizes. I've included pictures below of the post-submission form where the text on the button informs the user of the status of their request.
            |                                             Suggest a Question modal                                                |
            | :-----------------------------------------------------------------------------------------------------------------: |
            | [Mobile](https://github.com/JoeyyScott/general-gielinor-game/blob/master/readme-files/user-stories/user6mobile.png) |
            | [Tablet](https://github.com/JoeyyScott/general-gielinor-game/blob/master/readme-files/user-stories/user6tablet.png) |
            |     [PC](https://github.com/JoeyyScott/general-gielinor-game/blob/master/readme-files/user-stories/user6pc.png)     |

    + As a **user** I want to know if my guess was correct or not and why.
        + After every guess the user takes in the quiz they will be presented with the post guess interface.
        + This features more supporting information on a correct guess and a hint to the answer given to the user on an incorrect guess.
        + There is also a sound for each outcome that plays upon selecting an answer from the list.
            |                                              Correct/Incorrect Guesses                                              |
            | :-----------------------------------------------------------------------------------------------------------------: |
            | [Mobile](https://github.com/JoeyyScott/general-gielinor-game/blob/master/readme-files/user-stories/user7mobile.png) |
            | [Tablet](https://github.com/JoeyyScott/general-gielinor-game/blob/master/readme-files/user-stories/user7tablet.png) |
            |     [PC](https://github.com/JoeyyScott/general-gielinor-game/blob/master/readme-files/user-stories/user7pc.png)     |

    + As a **user** I want a way to initiate the game on my action.
        + Upon loading the site, the user is greeted with the introductory paragraph which includes a prompt to press the "Start Quiz" button.
        + Once the user presses this button it will initiate the quiz.
            |                                                  Start Quiz button                                                  |
            | :-----------------------------------------------------------------------------------------------------------------: |
            | [Mobile](https://github.com/JoeyyScott/general-gielinor-game/blob/master/readme-files/user-stories/user8mobile.png) |
            | [Tablet](https://github.com/JoeyyScott/general-gielinor-game/blob/master/readme-files/user-stories/user8tablet.png) |
            |     [PC](https://github.com/JoeyyScott/general-gielinor-game/blob/master/readme-files/user-stories/user8pc.png)     |
    
    + As a **user** I want a way to return to the home page after the quiz has ended.
        + At any point throughout the quiz, the user is able to press the Home icon the header to return back to the home page.
        + Once the user completes all questions on their current instance of the Quiz, they will be presented with a "Play GGG again" button should they so wish to.
            |                                                     Home Button                                                     |
            | :-----------------------------------------------------------------------------------------------------------------: |
            | [Mobile](https://github.com/JoeyyScott/general-gielinor-game/blob/master/readme-files/user-stories/user9mobile.png) |
            | [Tablet](https://github.com/JoeyyScott/general-gielinor-game/blob/master/readme-files/user-stories/user9tablet.png) |
            |     [PC](https://github.com/JoeyyScott/general-gielinor-game/blob/master/readme-files/user-stories/user9pc.png)     |

    + As a **user** I want to enjoy playing and learning in General Gielinor Game.
        + I've designed an interactive quiz that provides visual and audio responses to the users' guesses.
        + I've stuck with the traditional RuneScape feel with the font, colour scheme and general design which allows RuneScape players to feel more at home.
        + I've also included a questions remaining counter as well as a score at the end (see previous user story) which conveys to the user of their progress
        + There is also a button to Play GGG again (see previous user story) which invites the user to beat their score thus increasing the enjoyment factor of the game.

### Bugs

+ When trying to get the answers to display correctly I was originally using a standard for loop. (`for (i=0;i<answers.length;i++)`). After a few hours of attempts of trying to get my dataSet to import and load correctly. I decided to look into other methods of providing this functionality.
    + I have included within the credits section of my README.md how I went about fixing this bug using the array function forEach.