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

// create a grid object that has 2 nexter arrays : grid and possibilities
// grid will hold the index of what tile from TILES is to be placed there and 
// possibilities will hold the number of possible tiles that can be placed there
function newGrid(size){
    let grid=[]
    let possibilities=[]
    for(let i = 0 ; i < size ; i++) {
        grid.push([])
        possibilities.push([])
        for (let j = 0; j < size; j++) {
            grid[i].push(-1)
            possibilities[i].push(TILES.length)
        }
    }
    return {grid : grid, possibilities : possibilities};
}