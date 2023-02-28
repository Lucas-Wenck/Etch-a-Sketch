let columns = 100;
let rows = 100;

const grid = document.createElement('div');
grid.setAttribute('id', 'grid');
for(let i = 0; i < columns; i++){
    let column = document.createElement('div');
    column.className = 'column';
    for(let j = 0; j < rows; j++){
        let row = document.createElement('div');
        row.className = 'row';
        column.appendChild(row);
    }
    grid.appendChild(column);
}
document.body.appendChild(grid);

const rowSize = document.getElementsByClassName('row');
for(let k = 0; k < rowSize.length; k++){
    rowSize[k].style.setProperty(`height`, `calc(960px/${rows})`)
}
