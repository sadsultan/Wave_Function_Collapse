// Key for what tiles can have what neighbours and in what directions.
const TILEKEY = {
    'blank': {
        'up': ['up', 'blank'],
        'down': ['blank', 'down'],
        'left': ['left', 'blank'],
        'right': ['blank', 'right']
    },
    'up': {
        'up': ['down', 'left', 'right'],
        'down': ['down', 'blank'],
        'left': ['up', 'down', 'right'],
        'right': ['up', 'down', 'left']
    },
    'down': {
        'up': ['up', 'blank'],
        'down': ['up', 'left', 'right'],
        'left': ['down' ,'up', 'right'],
        'right': ['down' ,'up', 'left']
    },
    'left': {
        'up': ['down', 'left', 'right'],
        'down': ['up', 'right', 'left'],
        'left': ['right', 'down', 'up'],
        'right': ['blank', 'right']
    },
    'right': {
        'up': ['right', 'down', 'left'],
        'down': ['up', 'left', 'right'],
        'left': ['left', 'blank'],
        'right': ['up', 'down', 'left']
    }        
}

// holds tile names
const TILES = ['up','down','left','right','blank']

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
// grid[row-1][column] = grid[row-1][column].filter(tile => TILEKEY[lastTile]['up'].includes(tile));
function compareTiles(comparisonTile, currTile, direction) {
    if (!Array.isArray(comparisonTile) && currTile.length > 1) {
        currTile = currTile.filter(tile => TILEKEY[comparisonTile][direction].includes(tile));
    }
    return currTile
}

// Remove impossible tiles from the possibilities array of each position in the grid
function updatePossibilities(grid, size) {
    for (let row = 0; row < size; row++) {
        for (let column = 0; column < size; column++) {
            // comparing with the "down" of the tile above
            if (Array.isArray(grid[row][column])){
                if (row > 0) {
                    grid[row][column] = compareTiles(grid[row-1][column], grid[row][column], 'down');
                    if(grid[row][column].length == 1) return grid
                }
                // comparing with the "up" of the tile below
                if (row < size-1) {
                    grid[row][column] = compareTiles(grid[row+1][column], grid[row][column], 'up');
                    if(grid[row][column].length == 1) return grid
                }
                // comparing with the "right" of the tile to the left
                if (column > 0) {
                    grid[row][column] = compareTiles(grid[row][column-1], grid[row][column], 'right');
                    if(grid[row][column].length == 1) return grid
                }
                // comparing with the "left" of the tile to the right
                if (column < size-1) {
                    grid[row][column] = compareTiles(grid[row][column+1], grid[row][column], 'left');
                    if(grid[row][column].length == 1) return grid
                }
            }
        }
    }
    return grid
}

// Check if the grid has a solved tile, else return position of the spot with least possibilities
function collapse(grid, size) {
    let row = 0;
    let column = 0;
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            if (Array.isArray(grid[i][j])){
                if (grid[i][j].length == 1) {
                    grid[i][j] = grid[i][j][0];
                    return grid;
                } else { 
                    if (grid[i][j].length < grid[row][column].length) {
                        row = i;
                        column = j;
                    } else continue;
                }
            } else continue;
        }
    }

    grid[row][column] = grid[row][column][Math.floor(Math.random() * grid[row][column].length)];
    return grid;
}

function isSolved(grid, size) {
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
           if (Array.isArray(grid[i][j])) {
               return false;
           }
        }
    }
    return true;
}

export function pattern (size) {
    let grid = newGrid(size);
    let reps = 0
    while (reps < size**2 + 10) {
        grid = collapse(grid, size);
        grid = updatePossibilities(grid, size);
        if (isSolved(grid, size)) return grid;
        reps++;
    }
    return pattern(size);
}

// console.log(pattern(5));
