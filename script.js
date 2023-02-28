let columns = 16;
let rows = 16;
let row;
const grid = document.createElement('div');
grid.setAttribute('id', 'grid');
for(let i = 0; i < columns; i++){
    let column = document.createElement('div');
    column.className = 'column';
    for(let j = 0; j < rows; j++){
        row = document.createElement('div');
        row.className = 'row';
        row.innerHTML = '';
        column.appendChild(row);
    }
    grid.appendChild(column);
}
document.body.appendChild(grid);

const hover = document.querySelectorAll('.row');
hover.forEach(row => {
    row.addEventListener('mouseover', function backgroundChange(event){
        row.style.backgroundColor = 'black';
    })
})