const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2D');
canvas.width = 900;
canvas.height = 600;

// global variables
const cellSize = 100;
const cellGap = 3;
const gameGrid = [];
const defenders = [];
let defenderCost = 100;

// mouse
const mouse = {
    x:10,
    y:10,
    width: 0.1,
    height: 0.1,
}

let canvasPosition = canvas.getBoundingClientRect();
canvas.addEventListener('mousemove', (e) => {
    mouse.x = e.x - canvasPosition.left;
    mouse.y = e.y - canvasPosition.top;
})

canvas.addEventListener('mouseleave', () => {
    mouse.x = undefined;
    mouse.y = undefined;
} )

// game board
const controlsBar = {
    width: canvas.width,
    height: cellSize,
}
class Cell {
    constructor (x,y) {
        this.x=x;
        this.y=y;
        this.width = cellSize;
        this.height = cellSize;
    }
    draw(){
        if (mouse.x && mouse.y && collision(this, mouse)) {
            ctx.strokeStyle = 'black';
        ctx.strokeRect(this.x,this.y,this.width,this.height);
        }
    }
}
let createGrid = () => {
    for (let y = cellSize; y < canvas.height; y += cellSize) {
        for (let x = cellSize; x < canvas.height; x += cellSize) {
            gameGrid.push(new Cell(x,y));
        }
    }
}
createGrid();
handleGameGrid = () => {
    for (let i = 0; i < gameGrid.length; i++) {
        gameGrid[i].draw();
    }
}

// projectiles
// defenders
class Defender {
    constructor(x,y) {
        this.x = x;
        this.y = y;
        this.width = cellSize;
        this.height = cellSize;
        this.shooting = false;
        this.health = 100;
        this.projectiles = [];
        this.timer = 0;
    }
    draw(){
        ctx.fillStyle
    }
}


// enemies
// resources 
// utilities (animmation loop & collison detection)
let animate = () => {
    ctx.clearRect(0,0, canvas.width, canvas.height);
    ctx.fillStyle = 'blue';
    ctx.fillRect(0,0,controlsBar.width, controlsBar.height);
    requestAnimationFrame(animate);
}
animate();

let collision = (first, second) => {
    if ( !(first.x > second.x + second.width || 
            first.x + first.width < second.x ||
            first.y > second.y + second.height ||
            first.y + first.height < second.y)
    ) {
        return true;
    };
};