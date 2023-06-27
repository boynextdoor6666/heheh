let area = document.getElementById('area')
let cells = document.getElementById('cells')
let whoWins = document.getElementById('whoWins')
let currentPlayers = document.getElementById('currentPlayer')
let roundHistory = [] 
let ai ='O'

let stat = {
    'X' : 0,
    'O' : 0,
    'D' : 0,
}  

let winCombination = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [1,4,7],
    [2,5,8],
    [3,6,9],
    [1,5,9],
    [3,5,7]
]

for(i =1; i<=9; i++){
    area.innerHTML +=  `<div> class="cell" pos="${i}"</div>`
}

for (let i=0; i< cells.length; i++){
    cells[i].addEventlistener('click', cellOnclick)
}
// console.log (cells)

function cellOnclick() {
    let data = []
    console.log(this,innerHTML)
    if(this.innerHTML){
        this.innerHTML = player
    }else{
        alert('THIS CELL IS FREE')
        return;
    }
    for(let i in cells) {
        if(cells[i].innerHTML==player){
            data.push(parseInt(cells[i].getAttribute('pos')))
        }
    }
    player=player=="X"?"O":"X"
    console.log(data)
}

// function checkWinner(data){
//     for(let i in winCombination){
//         let win = true;
//         for(let j in winCombination[i]){
//             let id = winCombination[i][j];
//             let ind = data.indexOF(id)

//             if(ind== -1){
//                 win=false
//             }
//         }

//     }
// }