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

// size of grid, ONLY FOR TESTING PURPOSES
const SIZE = 5;

// create a grid using nested arrays that has all the tiles in each spot 
function newGrid(){
    let grid = []
    for (let i = 0; i < SIZE; i++) {
        grid.push([]);
        for (let j = 0; j < SIZE; j++) {
            grid[i].push(TILES.slice());
        }
    }
    return grid
}


// Remove impossible tiles from the possibilities array of each position in the grid
function updatePossibilities(grid, position) {
    let row = position[0]
    let column = position[1]
    let lastTile = grid[row][column]

    // check if lastTile is a valid key in TILEKEY
    if (TILEKEY[lastTile]) {
      // if the recently placed tile was not on the top row
      if(row > 0 && Array.isArray(grid[row-1][column]) && grid[row-1][column].length >= 1) 
          grid[row-1][column] = grid[row-1][column].filter(tile => TILEKEY[lastTile]['up'].includes(tile));

      // if the recently placed tile was not on the bottom row
      if(row < SIZE-1 && Array.isArray(grid[row+1][column]) && grid[row+1][column].length >= 1) 
          grid[row+1][column] = grid[row+1][column].filter(tile => TILEKEY[lastTile]['down'].includes(tile));

      // if the recently placed tile was not on the first column
      if(column > 0 && Array.isArray(grid[row][column-1]) && grid[row][column-1].length >= 1) 
          grid[row][column-1] = grid[row][column-1].filter(tile => TILEKEY[lastTile]['left'].includes(tile));

      // if the recently placed tile was not on the last column
      if(column < SIZE-1 && Array.isArray(grid[row][column+1]) && grid[row][column+1].length >= 1) 
          grid[row][column+1] = grid[row][column+1].filter(tile => TILEKEY[lastTile]['right'].includes(tile));
    }

    return grid
}



// Check if the grid has a solved tile, else return position of the spot with least possibilities
function collapse(grid) {
    let row = 0;
    let column = 0;
    let tileCollapsed = false;
    for (let i = 0; i < SIZE; i++) {
        for (let j = 0; j < SIZE; j++) {
            if (Array.isArray(grid[i][j])){
                if (grid[i][j].length == 1) { // this checks if the thingie is an arrayv and never gets past the first point
                    row = i;
                    column = j;
                    grid[i][j] = grid[i][j][0];
                    tileCollapsed = true;
                    break;
                } else if (grid[i][j].length <= grid[row][column].length && grid[i][j].length != 1) {
                    row = i;
                    column = j;
                } else continue;
            }
        }
    }
    if (!tileCollapsed)
        grid[row][column] = grid[row][column][Math.floor(Math.random() * grid[row][column].length)];

    console.log('Another one down');
    return updatePossibilities(grid, [row, column]);
}

function isSolved(grid) {
    for (let i = 0; i < SIZE; i++) {
        for (let j = 0; j < SIZE; j++) {
           if (Array.isArray(grid[i][j])) {
               return false;
           }
        }
    }
    return true;
}

function main() {
    let grid = newGrid();
    while (!isSolved(grid)) {
        grid = collapse(grid);
    }
    return grid;
}

main();