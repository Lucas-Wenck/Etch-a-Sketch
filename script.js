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

}
baseGrid()
function click(){
    body.removeChild(grid);
    grid = document.createElement('div');
    grid.setAttribute('id', 'grid');
    let columns = Number(prompt(`How many columns should the grid have?`, `16`));
    let check1 = parseInt(columns);
    if(columns > 100  || (isNaN(check1) == true)){
        window.alert('Thats too big or not a number at all, please choose between 1 and 100. I am going to put this value at 16 ok?')
        columns = 16;
    }
    let rows = Number(prompt(`how many rows should the grid have?`, `16`));
    let check = parseInt(rows);
    if((rows > 100) || (isNaN(check) == true)){
        window.alert('Thats too big or not a number at all, please choose between 1 and 100. I am going to put this value at 16 ok?')
        rows = 16;
    }
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

}

const proportions = document.getElementById('proportions');
proportions.addEventListener('click', () => {
    click();
})
let randColor;
function generateRandomColor(){
    let maxVal = 0xFFFFFF;
    let randomNumber = Math.random() * maxVal; 
    randomNumber = Math.floor(randomNumber);
    randomNumber = randomNumber.toString(16);
    randColor = randomNumber.padStart(6, 0);   
    return `#${randColor.toUpperCase()}`
}

const pencil = document.getElementById('pencil');
pencil.addEventListener('click', () => {
    generateRandomColor();
    const hover = document.querySelectorAll('.row');
    hover.forEach(row => {
    row.addEventListener('mouseover', function backgroundChange(event){
        row.style.backgroundColor = `#${randColor.toUpperCase()}`;
        })
    })
})

const eraser = document.getElementById('eraser');
eraser.addEventListener('click', () => {
    const hover = document.querySelectorAll('.row');
    hover.forEach(row => {
    row.addEventListener('mouseover', function backgroundChange(event){
        row.style.backgroundColor = 'white';
        })
    })
})