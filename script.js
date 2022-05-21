const grid = document.querySelector('.gridContainer');

for (let i = 0; i < 256; i++) {
    grid.appendChild(document.createElement('div'));
}