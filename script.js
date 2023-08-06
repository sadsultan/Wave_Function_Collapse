// Tiles are assigned the value clockwise from the top
class Tile {
    constructor(up, right, down, left, name) {
        this.name = name; // allows for checking and also displaying the tile later
        this.up = up;
        this.down = down;
        this.left = left;
        this.right = right;
    }
}

// holds tiles that are in the order: blank, up, right, down, left.
const TILES = [new Tile(0,0,0,0, 'blank'), new Tile(1,1,0,1,'up'), new Tile(1,1,1,0,'right'), new Tile(0,1,1,1,'down'), new Tile(1,0,1,1,'left')]

// size of grid, ONLY FOR TESTING PURPOSES
const SIZE = 3;

// create a grid using nested arrays that has all the tiles in each spot 
function newGrid(size){
    let grid = []
    for (let i = 0; i < size; i++) {
        grid.push([]);
        for (let j = 0; j < size; j++) {
            grid[i].push(TILES.slice());
        }
    }
    return grid
}
