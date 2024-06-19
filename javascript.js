const canvasHolder = document.getElementById('container');
const sizePicker = document.getElementById('changeBtn')
let isMousePressed = false;

function createCanvas(row,col) {
    
    for (let i = 0; i < col; i++) {
        const rowDiv = document.createElement('div');
        rowDiv.setAttribute('draggable',false);

        for (let j = 0; j < row; j++) {
            const pixel = document.createElement('div')
            pixel.classList.add('square');
            pixel.classList.add('rows');
            pixel.style.width = `${750/col}px`
            pixel.style.height = `${750/row}px`
            pixel.setAttribute('draggable',false);
            pixel.addEventListener('mouseenter',()=>{
                
                if (isMousePressed == true) {
                    pixel.style.backgroundColor = "black"
                } else return;

            });
            pixel.addEventListener('mousedown',()=>{
                isMousePressed = !isMousePressed;
                event.preventDefault()
                pixel.style.backgroundColor = "black";
                
            });
            pixel.addEventListener('mouseup',()=>{
                isMousePressed = !isMousePressed
            })
            rowDiv.appendChild(pixel);
        }

        canvasHolder.appendChild(rowDiv)
    }
}
createCanvas(100,100);

sizePicker.addEventListener('click', ()=>{
    const newGridSize = parseInt(prompt('Enter the new canvas size'));

    if (isNaN(newGridSize)) {
        alert('Please enter a valid number from 1-100');
    } else if (newGridSize < 1 || newGridSize > 100) {
        alert('The number can only be 1-100');
    } else {
        canvasHolder.innerHTML = "";
        createCanvas(newGridSize,newGridSize);
    }
})

canvasHolder.addEventListener('mouseleave',()=>{
    isMousePressed = false;
})