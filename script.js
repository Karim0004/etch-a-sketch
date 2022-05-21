const grid = document.querySelector('.gridContainer');

for (let i = 0; i < 256; i++) {
    grid.appendChild(document.createElement('div'));
}

const gridBoxes = document.querySelectorAll('.gridContainer div');
gridBoxes.forEach(box => {
    box.addEventListener('mouseenter', e => e.target.style.backgroundColor = 'black' )
})