// create the grid
function newGrid(size){
    let grid=[]
    for(let i = 0 ; i < size ; i++) {
        grid.push([])
        for (let j = 0; j < size; j++) {
            grid[i].push(0)
        }
    }
    return grid;
}

// Tile class, this will hold the tiles in the grid, empty by default with max waveOrder
class Tile {
    constructor(){
        this.img = null;
        this.waveOrder = Infinity
    }
} 

// 