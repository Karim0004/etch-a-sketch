const gridContainer = document.getElementById('gridContainer');
const btn = document.querySelector('button');

function newGrid (width, height=width) {
    
    boxHeight = `${gridContainer.clientHeight / height}px`;
    boxWidth = `${gridContainer.clientWidth / width}px`;
    
    for (let h = 0; h < height; h++) {
        for (let w = 0; w < width; w++) {
            const box = document.createElement('div');
            box.style.height = boxHeight;
            box.style.width = boxWidth;
            gridContainer.appendChild(box);
            box.addEventListener('mouseenter', e => e.target.classList.add('colored'));
        }
    }
}

function replaceGrid () { // clear old grid and create a new one //
    const size = Number(prompt('Grid Size:'));
    if (!Number.isInteger(size) || size > 100 || size < 1) {
        alert('Error, Please enter a vaild number between 1 and 100');
        return;
    }
    
    const boxes = document.querySelectorAll('#gridContainer div');

    boxes.forEach(box => box.remove());
    newGrid(size, size);
}

btn.addEventListener('click', replaceGrid);

newGrid(16);