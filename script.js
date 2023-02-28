let columns = 16;
let rows = 16;
let grid;
const body = document.getElementById('body');
function baseGrid(){
    grid = document.createElement('div');
    grid.setAttribute('id', 'grid');
    for(let i = 0; i < columns; i++){
        let column = document.createElement('div');
        column.className = 'column';
        for(let j = 0; j < rows; j++){
            let row = document.createElement('div');
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
}
baseGrid()
function click(){
    body.removeChild(grid);
    grid = document.createElement('div');
    grid.setAttribute('id', 'grid');
    let columns = Number(prompt(`How many columns should the grid have?`, `16`));
    let rows = Number(prompt(`how many rows should the grid have?`, `16`));
        for(let i = 0; i < columns; i++){
        let column = document.createElement('div');
        column.className = 'column';
        for(let j = 0; j < rows; j++){
            let row = document.createElement('div');
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
}

const proportions = document.getElementById('proportions')
proportions.addEventListener('click', () => {
    click();
})