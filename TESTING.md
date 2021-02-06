## Testing

### Code Validators

I used [w3.org's validator](https://validator.w3.org/) for my HTML validation checks, here are my results:

+ Home page (index.html)

    ![Home Page Validation](readme-files/html-test.png)

I used [w3.org's validator](https://jigsaw.w3.org/css-validator/) for my CSS validation checks.

+ CSS (style.css)

    ![CSS Validation](readme-files/css-test.png)

+ No errors were found within the document.

I used [JSHint](https://jshint.com) to check the javascript files in my project to make certain they comply with coding standards and that were no syntax errors detected.

+ Quiz (quiz.js) - When testing my code with JSHint I was getting numerous errors about const, let and the => function. I researched it and found [this post](https://stackoverflow.com/questions/27441803/why-does-jshint-throw-a-warning-if-i-am-using-const) which taught me I needed to tell JSHint what es version I was using with the following code ```/*jshint esversion: 6 */``` which fixed those errors.
    + The only other error I was receiving was from the ```$.getJSON('');``` function as it was flagging $ as an undefined variable. Upon researching I found [this post](https://stackoverflow.com/questions/8852765/jshint-and-jquery-is-not-defined) which taught me I needed to tell JSHint that I was using jQuery with the following code ```/*globals $:false */``` which fixed those errors.
    + After putting those two lines of code at the top of my JSHint tests, everything passed with no errors at all.

+ Suggest a question (suggestions.js) - I used the same two lines of code at the top of my JSHint testing for this file as I have used const, let and $ in this code. 
    + After putting those two lines of code at the top of my JSHint tests, it only found one undefined variable (emailjs) and one unused variable (suggestQuestion).

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

- #### User Goals    

    + As a **user** I want to understand the website's purpose on my first visit.
        + Upon loading the site the user will land on index.html and be greeted with the header "Welcome to the General Gielinor Game".
        + There is a tagline that says "Want to test your RuneScape knowledge?" which tells the user the purpose of the site.
        + There is also a prompt for the user to click the "Find out more" button if they wish to find out more information.
            |                                                  index.html                                                         |
            | :-----------------------------------------------------------------------------------------------------------------: |
            | [Mobile](https://github.com/JoeyyScott/general-gielinor-game/blob/master/readme-files/user-stories/user1mobile.png) |
            | [Tablet](https://github.com/JoeyyScott/general-gielinor-game/blob/master/readme-files/user-stories/user1tablet.png) |
            |     [PC](https://github.com/JoeyyScott/general-gielinor-game/blob/master/readme-files/user-stories/user1pc.png)     |

    + As a **user** I want easily to be able to smoothly use all the desired functions of the site.
        + Upon loading the site, the user can clearly see there are many buttons that provide functionality.
        + These include: Start quiz, Find out more, toggle music, return to Home, suggest a question and LinkedIn/GitHub links.
        + Both the find out more and suggest a question will pop up modals which makes the site simple to use and the links open in a seperate tab for user retention.
            |                                                  index.html                                                         |
            | :-----------------------------------------------------------------------------------------------------------------: |
            | [Mobile](https://github.com/JoeyyScott/general-gielinor-game/blob/master/readme-files/user-stories/user2mobile.png) |
            | [Tablet](https://github.com/JoeyyScott/general-gielinor-game/blob/master/readme-files/user-stories/user2tablet.png) |
            |     [PC](https://github.com/JoeyyScott/general-gielinor-game/blob/master/readme-files/user-stories/user2pc.png)     |

    + As a **user** I want to expand my RuneScape game knowledge in an intuitive way.
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
        + The index page and its associated modals provide all the functionality across multiple screen sizes.
        + Screenshots for the main site but can be found in other tests but I have included pictures of the modal.
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

    + As a **user** I want to be able to contact the site owner with any questions I would like to see added.
        + In the footer there is a '?' icon which opens up a suggest a question modal that allows the user to submit their question, answer list, correct answer and user to be accredited.
        + User Story 4 has pictures of the suggest a question modal across all screen sizes. I have included pictures below of the post-submission form where the text on the button informs the user of the status of their request.
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
        + At any point throughout the quiz, the user is able to press the Home icon in the header to return back to the home page.
        + Once the user completes all questions on their current instance of the quiz, they will be presented with a "Play GGG again" button should they so wish to.
            |                                                     Home Button                                                     |
            | :-----------------------------------------------------------------------------------------------------------------: |
            | [Mobile](https://github.com/JoeyyScott/general-gielinor-game/blob/master/readme-files/user-stories/user9mobile.png) |
            | [Tablet](https://github.com/JoeyyScott/general-gielinor-game/blob/master/readme-files/user-stories/user9tablet.png) |
            |     [PC](https://github.com/JoeyyScott/general-gielinor-game/blob/master/readme-files/user-stories/user9pc.png)     |

    + As a **user** I want to enjoy playing and learning in General Gielinor Game.
        + I have designed an interactive quiz that provides visual and audio responses to the user's guesses.
        + I have stuck with the traditional RuneScape feel with the font, colour scheme and general design which allows RuneScape players to feel more at home.
        + I have also included a questions remaining counter as well as a score at the end (see previous user story) which conveys to the user of their progress.
        + There is also a button to Play GGG again (see previous user story) which invites the user to beat their score thus increasing the enjoyment factor of the game.

- #### Site Owner Goals

    + As a **site owner** I want the user to be greeted with a brief introduction message and a run down on how to play the game so they can easily understand the whole website.
        + When I load into the site I am presented with an introductory message informing the user the site contains a quiz.
        + I am also directed to the "Find out more" button which tells me the purpose of the website.
        + Finally I am prompted on how to play the game by pressing the "Start Quiz" button. 
        + The pictures of the landing screen that show this information can be found in the user story testing 1.

    + As a **site owner** I want any user to receive the correct information for the viewport they are currently on.
        + I have tested the website across multiple screen sizes and have found no issues thus far with content displaying or appearing incorrectly.
        + The checklist icon does not show on extra small devices as intended and the footer icons become smaller to accommodate.
        + Also on small screens I have used a media query to remove the majority of the top margin for the main container as screen real estate is limited here.
            |                                                       Small device queries                                                      |
            | :-----------------------------------------------------------------------------------------------------------------------------: |
            | [Small Phone](https://github.com/JoeyyScott/general-gielinor-game/blob/master/readme-files/user-stories/siteowner1small.png)    |
            | [Average Phone](https://github.com/JoeyyScott/general-gielinor-game/blob/master/readme-files/user-stories/siteowner1avg.png)    |

    + As a **site owner** I want the user to be able to intuitively navigate the entire site on their first visit.
        + Upon loading the site I am presented with buttons for Start quiz, Find out more, Toggle music and return to Home.
        + In the footer I can see 3 self explanatory icons for Suggest a question, LinkedIn and GitHub. 
        + Both find out more and suggest a question open a modal, the links open in new tabs and the music/start/home buttons all function as intended.
  
    + As a **site owner**  I want to include links to my GitHub and LinkedIn profiles so the user can view other projects I have contributed to.
        + In the footer there are GitHub and LinkedIn icons each with a link that will open the associated profiles of the developer in a new tab.
        + From here I can see all the contributions to projects this user has made.
        + Screenshots of the footer are included in user story testing #5.

    + As a **site owner** I want to create an engaging, interactive experience through the quiz and site.
       + Upon loading the site I am given the pre quiz screen which provides a moment for me to get my bearings before the quiz.
        + Throughout the site the font RuneScape-UF is used which as a RuneScape player I instantly recognize thus making the environment engaging.
        + On each question I am presented with a question, question image, 4 possible answers and a counter showing the questions I have left to answer. This is reassuring as I am able to see my progress at any point.
        + You can find evidence of this in user stories 3 and 7.

    + As a **site owner** I want to create a site that provides a welcoming atmosphere to learn about RuneScape.
        + Upon loading the site the entire feel of what I experience makes me feel welcomed. There is minimal but critical information on the landing page.
        + There is also a Find out more modal I can activate which provides more information about the site and does not overload me with content.
        + The home, music and footer buttons are all designed/positioned cleanly and do not intrude on the experience at all.

    + As a **site owner** I want to provide the user with feedback about whether their answer is correct or not and the reasoning why after each question.
        + Upon making a guess I am presented with the post guess screen. This provides information pertaining to the outcome of their guess.
        + I will receive a randomly selected correct/incorrent message plus supporting information/reasoning if correct and a hint if incorrect. The array of responses keeps the outcomes fresh and engaging.
        + I will also hear a different sound playing based on the outcome of my guess.
        + I will also hear a sound upon reaching the scoreboard screen at the end of the quiz.

    + As a **site owner** I want to create a quiz that will help users learn about the MMORPG RuneScape.
        + The quiz itself is comprised of questions from multiple areas of RuneScape knowledge. This provides a varied learning experience and a building block for a bigger project.
        + Due to the wide variety of questions I am fairly confident most players who take the quiz may not be aware of at least some of the areas mentioned.
        + When I guess incorrectly I am given a hint about that piece of content which sparks the learning process as I am made more aware of this content.

    + As a **site owner** I want to include a form within a modal that can be accessed anywhere and allows the user to suggest questions for the quiz.
        + I have placed a '?' icon in the footer which opens up a suggest a question modal. This allows me to submit my question, answer list, correct answer and name I want credited.
        + User story 4 has pictures of the suggest a question modal across all screen sizes. User story 6 has pictures of the post submission screen to show a successful attempt.
        + Once I have filled out this form with dummy information I am then emailed the form information through emailJS.
            |                                                      Suggest Modal                                                       |
            | :----------------------------------------------------------------------------------------------------------------------: |
            | [Email](https://github.com/JoeyyScott/general-gielinor-game/blob/master/readme-files/user-stories/siteowneremail.png)    |

### Bugs

+ **forEach Loop** - When trying to get the answers to display correctly I was originally using a standard for loop. 

    ```for (i=0;i<answers.length;i++)```
    
    + After a few hours of attempts of trying to get my dataSet to import and load correctly, I decided to look into other methods of providing this functionality.
    + I have included within the credits section of my README.md how I went about fixing this bug using the array function ```forEach```.

+ **Splice function** - When I had my questions in my quiz.js file I experienced a bug where my code was removing only the first question in the array regardless of which question was loaded as question 1.
    + I was originally using this code to remove the current question from the array of remaining questions:
    
        ```questionsRemaining.splice(Math.floor(Math.random() * questionsRemaining.length), 1);```

    + I asked one of my close friends who has JavaScript experience and he suggested the splice function could not parse through my Math code. I decided to try setting the data to a variable and splicing that instead.
    + I took my Math formula and set a variable to that as you can see in the lines of code below:

        ```let questionToBeRemoved = Math.floor(Math.random() * questionsRemaining.length);```
        ```questionsRemaining.splice(questionToBeRemoved, 1);```

    + Upon retesting my code with this, everything worked perfectly. I was using two questions at the time and no longer received repeat questions as it was removing the correct question each time.

+ **getJSON not recognized** - Following my mid project call with my mentor, we decided to use a .json file to store the questions in. This would allow for less user error when adding questions as the HTML is built in the quiz.js file. I was using the ```$.getJSON('');``` function but it was not recognized as a function when I attempted to load my site.
    + Upon a quick look around the internet I found [this post](https://stackoverflow.com/questions/40600396/jquery-issue-typeerror-getjson-is-not-a-function) which contained the answer I was looking for.
    + It mentioned that the slim version of jQuery did not carry ```$.getJSON('');``` as a method and suggested the user use the full version of jQuery. I checked my code and I was also using the slim version. Upon updating it to the full version my code worked as expected.

+ **Code not loading JSON** - Once I was able to fix the ```$.getJSON('');``` bug my code was apparently working fine but the questions were not loading.
    + I debugged in Firefox DevTools and could see no apparent error. I know the order of my code matters and remembered the lesson about call back functions.
    + It got me thinking that maybe it was trying to load my code before the questions.JSON file had been loaded. I looked around and found [this post](https://stackoverflow.com/questions/52622056/how-to-delay-my-javascript-code-until-a-json-file-is-loaded) which included using the ```.then``` function to wait until the JSON file was loaded before running the ```quizStart()``` function.
    + Running my quiz after this change produced no errors and everything functioned as expected.

+ **Clearing a form of data** - When I was adding my suggest a question feature with emailJS, upon submitting the form when I would open it up again the original information would remain. I knew I could use a reset button but did not want to include this as it would impede on the user's experience.
    + Upon looking around I managed to find [this post](https://www.tutorialspoint.com/How-to-reset-or-clear-a-form-using-JavaScript) which contained information about the ```.reset()``` method which effectively mimics what a reset button would do.
    + I added this into my code within suggestions.js and after a few tests of the suggest a question modal I determined that everything was functioning as intended.

+ **Looping Music** - I originally noticed this bug by pure accident as I opened my site and went back to my code. After 5 minutes or so I noticed the music had stopped. At this point I had the music auto playing on page load before I discovered Google Chrome disables autoplay and thus made a button to toggle the music.
    + I am very new to using music functions but following my mid project call with my mentor he suggested adding in background music and that it was very little code.
    + I was able to load in and play my music so I looked around and found [this post](https://stackoverflow.com/questions/13610638/loop-audio-with-javascript). It highlighted that the ```audio``` element has a built in ```loop``` boolean property that I added into my code and which now resides in my ```toggleMusic``` function.
    + Upon various tests with myself, family and friends everyone reported that the music would play/pause/loop as intended.

+ **Sounds not playing in Safari** - After getting one of my friends to test the site he noticed that on Safari only the incorrect sound was playing.
    + I instantly checked my file list and found that was the only sound file using the .mp3 format, the rest were in .ogg the original format.
    + I used this [audio converter](https://online-audio-converter.com/) as mentioned in the Technologies section of my README.md to convert my files to .mp3 format which resolved the issue immediately.

+ **Regex Code for Validation** - After the final call with my mentor he suggested I use regular expressions to check whether the data entered was actual data. I originally tried to see if ```RegEx``` was a function and found ```RegExp``` and ended up trying various different methods of getting my checks to work.
    + After a few hours researching around I found [this post](https://shiffman.net/a2z/regex/) which explained what Regex was, how it worked and was used. It is still very new to me but I have managed to get it working in this case.
    + I tried a few more tests and decided to look around for a resource on Regex and found [this tool](https://regexr.com/) which was instrumental in helping me test and lookup what different syntax did and thus I was able to adapt my RegEx.

+ **Sounds not playing** - This bug only occured when a new question was loaded and guessed before the previous sound for the guess had finished playing.
    + I noticed this during testing as I was clicking through the questions rapidly but in an ideal user scenario they would take the time to read the outcome of their guess.
    + Nevertheless I thought about utilizing the pause function. I knew I had to reset the point at which it would play when called again and so I typed ```guessCorrect.``` and the first propety offered to me was ```currentTime``` so I utilized this in my event listener for ```buttonNext```.
    + This was done so whenever a new question was called the sounds would always play on a user's guess.
    
[Return to README.md](README.md).