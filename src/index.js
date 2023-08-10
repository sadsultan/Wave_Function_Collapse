import './style.css';

import up from './tiles/up.png';
import down from './tiles/down.png';
import left from './tiles/left.png';
import right from './tiles/right.png';
import blank from './tiles/blank.png';

import {pattern} from './pattern.js';

const IMAGES = {
    "up": up,
    "down": down,
    "left": left,
    "right": right,
    "blank": blank
}

function clearGrid () {
    document.getElementById('container').innerHTML = '';
}

function drawGrid (grid, size) {
    const container = document.getElementById('container');
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
                let tile = document.createElement('img');
                tile.setAttribute('class', 'tile');
                tile.setAttribute('src', IMAGES[grid[i][j]]);
                tile.setAttribute('alt', 'blank');
                tile.setAttribute('width', `${400/grid.length}px`);
                tile.setAttribute('height', `${400/grid.length}px`);
                container.appendChild(tile);
        }
    }
}

const generate = document.getElementById('generate');
generate.addEventListener('click', () =>{
    let size = document.getElementById('size').value;
    if (size >= 2 && size <= 35) {
        generate.innerText = 'Generating...'
        let grid = pattern(size);
        clearGrid();
        drawGrid(grid, size);
        generate.innerText = 'Regenerate'
    } else {
        alert('Please enter a number between 2 and 35');
    }
});