// Wave function collapse implemented here

function emptyTile(grid){
    return grid.every( row => row.every( tile => !(tile.empty))) 
}

function collapse(grid) {
    while(!emptyTile(grid)){
        
    }
    return grid;
}

