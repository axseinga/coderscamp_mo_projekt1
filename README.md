# Coders Camp 2021 | Project Team | JavaScript: Star Wars Quiz

--> See original [repository](https://github.com/m-ossolinski/coderscamp_mo_projekt1) <--

## Project Team

Our team collaborated as part of CodersCamp course. The Star Wars quiz was coded by students with help of our Mentor. Please feel free to check all collaborator's Github profiles to get to know their portfolios.

Mentor: [Mateusz Ossoliński](https://github.com/m-ossolinski)

Students:

- [Agnieszka Urbanowicz](https://github.com/axseinga) - Tech Lead
- [Justyna Dąbrowska](https://github.com/justynadabrowska) - Development Manager
- [Magdalena Piotrowska](https://github.com/magdalena-piotrowska) - Product Owner
- [Magdalena Kostrzewa](https://github.com/svingel)
- [Hanna Kozak](https://github.com/hannakozak)
- [Krzysztof Kos](https://github.com/Kosik33i6)

## Star Wars Quiz

[Mockups and prototypes](https://www.figma.com/file/4HOOjnEYjb7W7xEh2Vb4lx/CodersCamp2020.Project.JavaScript.StarWarsQuiz?node-id=256%3A107)

## Screenshots

<img width="1680" alt="Screenshot 2022-01-15 at 12 42 11" src="https://user-images.githubusercontent.com/46648993/149622586-c4828d85-d3d2-4e67-88cb-44330f1ab5ee.png">

<img width="190" alt="Screenshot 2022-01-15 at 12 43 48" src="https://user-images.githubusercontent.com/46648993/149622593-6c96807b-e55d-4999-b8bb-ad1486fb4921.png">

## Videos

https://user-images.githubusercontent.com/46648993/149622608-bce7b909-417d-4cc1-8062-db22e5ce6762.mov



https://user-images.githubusercontent.com/46648993/149622624-96afa756-cb24-4813-9e92-44714d373e50.mov



### Project's goal

The goal of this project was to deliver the app with a Star Wars quiz functionality. The User can test his/her knowledge about Star Wars characters, vehicles and starships. During the play, the User competes against a computer player. 

### App functionality

#### Main Menu

The User can choose a mode of the game (default "people"):

- People: recognizing what character from the Star Wars universe is shown on the image
- Vehicles — recognizing what vehicle from the Star Wars universe is shown on the image
- Starships — recognizing what starship from the Star Wars universe is shown on the image

#### The game — Quiz

To play the game, the User has to click the button "Play the game". The game is about guessing who or what is shown on the image on the left. The User has four answers to choose from. Only one answer is correct. During the play, a computer is trying to guess (the logic behind it is simple: one number from a total of four is randomly drawn by the algorithm). At the end of the game, the modal with correct and wrong guesses is displayed and the User's and computer's results are compared.

The game continues until the time is over (1 minute and 30 seconds). The time left is shown by lightsaber and text below answer cards. The User can guess as many times as he/she is able during the given time.

### Hall of Fame

After clicking the "Hall of Fame" button, the User can see the three best results for the mode he is currently in. The results are stored in LocalStorage.

### Built with:

- HTML
- CSS
- media queries for RWD
- JavaScript
- JS modules
- LocalStorage
- rest API
- JSON server

The app was coded in compliance with CodersCamp's requirements.

In regards to technologies used we were required to code our app in Javascript. We decided to code HTML dynamically with JS as well. The app is created with components similar to those in React, we used JS modules to mimic them. Every component has a separate CSS file for styling. The goal to code it this way was to understand better how React works behind the scenes.

### How to run the app

To run the app follow steps below on your local machine:

1. Clone git repository and open file on your local device in Code editor.
2. Run `npm install` command to install all npm packages.
3. To run json-server, run `cd swapi-json-server` to open swapi-json-server folder, install npm packages with `npm install` and run `npm run start`.
4. Open new terminal in your code editor and run `npm run start:dev` to open developers mode.

The app will run on port [localhost:8765/index.html](localhost:8765/index.html)
