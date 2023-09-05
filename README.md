# Tower Defense Game

Tower Defense Game is a simple web-based tower defense game where your goal is to defend your territory from waves of enemy creatures. Place defenders strategically, collect resources, and defeat the enemy waves to win the game.

## Motivation

The motivation behind creating this game is to provide a fun and interactive way for users to enjoy a classic tower defense gaming experience in their web browser. It's a project developed for learning and entertainment purposes.

## Build Status

Currently, the project is in the development stage. There is no continuous integration set up at the moment. Future commits will add sprites and more features.

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

// projectiles
class Projectile {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.width = 10;
        this.height = 10;
        this.power = 20;
        this.speed = 5;
    }
    update(){
        this.x + this.speed;
    }
    draw(){
        ctx.fillStyle = 'black';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.width, 0, Math.PI * 2);
        ctx.fill();
    }
}
```

## Installation

To run the game locally, follow these steps:

1. Clone this repository to your local machine.
2. Open the `index.html` file in a web browser or open it on live server using VS Code.

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

This project was created by Kelly Siu.
ChatGBT for helping with the readMe.
Inspiration came from Plants Vs Zombies.
Tutorial by Frank's Laboratory for guideline.
https://www.youtube.com/watch?v=QxYg8-mhhhs&t=2830s



## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.


