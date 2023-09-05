# Tower Defense Game

Tower Defense Game is a simple web-based tower defense game where your goal is to defend your territory from waves of enemy creatures. Place defenders strategically, collect resources, and defeat the enemy waves to win the game.

## Motivation

The motivation behind creating this game is to provide a fun and interactive way for users to enjoy a classic tower defense gaming experience in their web browser. It's a project developed for learning and entertainment purposes.

## Build Status

Currently, the project is in the development stage. There is no continuous integration set up at the moment.

## Code Style

The code follows JavaScript best practices and conventions for readability and maintainability.

## Screenshots

![Game Screenshot](screenshot.png)

## Tech/Framework Used

- HTML5
- CSS3
- JavaScript

## Features

- Place defenders on a grid to protect your territory.
- Collect resources to purchase more defenders.
- Defeat waves of enemy creatures.
- Keep track of your score and available resources.
- Enjoy a classic tower defense gaming experience.

## Code Example

```javascript
// Sample code snippet from the game
// ...

class Cell {
    constructor (x, y) {
        this.x = x;
        this.y = y;
        this.width = cellSize;
        this.height = cellSize;
    }
    draw(){
        if (mouse.x && mouse.y && collision(this, mouse)) {
            ctx.strokeStyle = 'black';
            ctx.strokeRect(this.x, this.y, this.width, this height);
        }
    }
}

// ...

## Installation

To run the game locally, follow these steps:

1. Clone this repository to your local machine.
2. Open the `index.html` file in a web browser.

## Tests

Currently, there are no automated tests for this project.

## How to Use

1. Click on the canvas to place defenders on the grid.
2. Collect yellow resources by hovering over them with your mouse.
3. Defeat enemy waves by strategically placing defenders.
4. Keep an eye on your score and available resources.
5. The game ends when you either lose by letting enemies reach your territory or win by reaching the required score.

## Contribute

Feel free to contribute to this project by creating pull requests or reporting issues. Please follow the project's code style and make sure to thoroughly test any changes.

## Credits

This project was inspired by classic tower defense games and was created by [Your Name].

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.


