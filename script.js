const gridContainer = document.getElementById('gridContainer');

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

newGrid(16);