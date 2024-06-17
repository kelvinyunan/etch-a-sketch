const canvasHolder = document.getElementById('container');

function createCanvas(row,col) {
    
    for (let i = 0; i < col; i++) {
        const rowDiv = document.createElement('div');

        for (let j = 0; j < row; j++) {
            const pixel = document.createElement('div')
            pixel.classList.add('square');
            pixel.classList.add('rows');
            rowDiv.appendChild(pixel);
        }

        canvasHolder.appendChild(rowDiv)
    }
}
createCanvas(16,16);
