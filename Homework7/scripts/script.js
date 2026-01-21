let container = document.getElementById('tableContainer');
let btn = document.getElementById('createBtn');


function createTable(rows, cols) {
    container.innerHTML = '';

    let table = document.createElement('table');

    for (let i = 1; i <= rows; i++) {
        let row = document.createElement('tr');
        for (let j = 1; j <= cols; j++) {
            let cell = document.createElement('td');
            cell.textContent = `Row-${i} Column-${j}`;
            row.appendChild(cell);
        }
        table.appendChild(row);
    }

    container.appendChild(table);
}

btn.addEventListener('click', function () {
    let numRows = parseInt(document.getElementById('rows').value);
    let numCols = parseInt(document.getElementById('cols').value);

    if (isNaN(numRows) || isNaN(numCols) || numRows <= 0 || numCols <= 0) {
        alert('Please enter valid positive numbers!');
        return;
    }

    createTable(numRows, numCols);

});
