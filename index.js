const table = document.createElement('table');
const tableCell = document.createElement('td');
function randomizer() {
    return Math.floor(Math.random() * (100 - 1 + 1) + 1)
}

window.onload = function tableCreator() {
    document.body.appendChild(table);
    for (let i = 0; i < 10; i++) {
        let tableRow = document.createElement('tr');
        for (let x = 0; x < 10; x++) {
            let tableCell = document.createElement('td');
            let cellContent = document.createTextNode(randomizer());
            tableCell.appendChild(cellContent);
            tableCell.setAttribute("class", "cell")
            tableRow.appendChild(tableCell);
        }
        table.appendChild(tableRow);
    }
document.body.appendChild(table);
table.setAttribute("class", "tab") 
};

    