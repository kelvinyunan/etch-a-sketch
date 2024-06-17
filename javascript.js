const canvasHolder = document.getElementById('container');

function createCanvas(row,col) {
    
    for (let i = 0; i < col; i++) {
        const rowDiv = document.createElement('div');

        for (let j = 0; j < row; j++) {
            const pixel = document.createElement('div')
            pixel.classList.add('square');
            pixel.classList.add('rows');
            pixel.style.width = `${750/col}px`
            pixel.style.height = `${750/row}px`
            rowDiv.appendChild(pixel);
        }

        canvasHolder.appendChild(rowDiv)
    }
}
createCanvas(100,100);
