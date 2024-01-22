let boxes = Array.from(document.querySelectorAll(".box"))
const winner = document.querySelector(".winner")
const reset = document.querySelector(".reset")

let spaces = Array(9).fill(null);

let game_status = true
const o = "O"
const x = "X"
let current_player = x
let move_count = 0

const winning_combos = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
]

function display_winner(player) {
    game_status = false

    if (player === x) {
        return "<h4>Player 1 wins!</h4>";
    }
    else if(player === o) {
        return "<h4>Player 2 wins!</h4>";
    }
    else {
        return "<h4>Draw!</h4>";
    }
}

    boxes.forEach( (box) => {
        box.addEventListener("click", function() {
            if(game_status === false) {
                return
            }

            const id = box.id
            if(!spaces[id]) {
                spaces[id] = current_player
                box.innerHTML = current_player

                let length = winning_combos.length
                for(let i = 0; i < length; i++) {
                    let index = winning_combos[i]
                    
                    if(spaces[index[0]] === current_player && spaces[index[1]] === current_player && spaces[index[2]] === current_player ) {
                        return winner.insertAdjacentHTML("beforeend", display_winner(current_player))
                    }

                }

            move_count++
            if(move_count === 9) {
                current_player = "Draw"
                return winner.insertAdjacentHTML("beforeend", display_winner(current_player))
            } 
            
            if (current_player === "X") {
                   current_player = o
                   ai_move(spaces)
            }
        }})
    })


function ai_move(array) {
    let posible_moves = []
    for(let i = 0; i < array.length; i++) {
        if(!array[i]) {
            posible_moves.push(i)
        }
    }
    let random_index = Math.floor(Math.random() * posible_moves.length);
    spaces[posible_moves[random_index]] = o
    boxes[posible_moves[random_index]].innerHTML = current_player
    
    
    let length = winning_combos.length
    for(let i = 0; i < length; i++) {
        let index = winning_combos[i]
        
        if(spaces[index[0]] === current_player && spaces[index[1]] === current_player && spaces[index[2]] === current_player ) {
            return winner.insertAdjacentHTML("beforeend", display_winner(current_player))
        }

    }

    move_count++
    if(move_count === 9) {
        current_player = "Draw"
        return winner.insertAdjacentHTML("beforeend", display_winner(current_player))
    }
    console.log(move_count) 

    current_player = x
}

reset.addEventListener("click", function() {
    current_player = x
    spaces.fill(null)
    boxes.forEach((box) => {
        box.innerHTML = ""
    })
    winner.innerHTML = ""
    game_status = true
    move_count = 0
})



