const ceils = document.querySelectorAll('.board > div')
const mainBoard = document.querySelector('.board')
const modalBlock = document.querySelector('#modalWinner')
var winnerText = document.querySelector('#winner')
const restartBtn = document.querySelector('#restart')
let submit = document.querySelector('.submit')
let popup = document.querySelector('.popup')
let O_inp = document.querySelector('.O_inp')
let X_inp = document.querySelector('.X_inp')
const b1 = document.querySelector('#b1')
const b2 = document.querySelector('#b2')
const b3 = document.querySelector('#b3')
const b4 = document.querySelector('#b4')
const b5 = document.querySelector('#b5')
const b6 = document.querySelector('#b6')
const b7 = document.querySelector('#b7')
const b8 = document.querySelector('#b8')
const b9 = document.querySelector('#b9')
var step = 0
var usersWins

ceils.forEach(item => {
    item.addEventListener('click', () => {
        if (step % 2 == 0) {
            usersWins = ("X-gamer: " + X_inp.value)
            if (item.innerHTML.trim() != 'O') {
                item.innerHTML = 'X'
                console.log(step)
                step++
            }
        }
        else {
            usersWins = ("O-gamer: " + O_inp.value)
            if (item.innerHTML.trim() != 'X') {
                item.innerHTML = 'O'
                step++
            }
        }
    })
})

mainBoard.addEventListener('click', () => {
    if (b2.innerHTML == 'X' && b5.innerHTML == 'X' && b8.innerHTML == 'X' || b2.innerHTML == 'O' && b5.innerHTML == 'O' && b8.innerHTML == 'O') {
        showModal()
    }
    if (b1.innerHTML == 'X' && b2.innerHTML == 'X' && b3.innerHTML == 'X' || b1.innerHTML == 'O' && b2.innerHTML == 'O' && b3.innerHTML == 'O') {
        showModal()
    }
    if (b4.innerHTML == 'X' && b5.innerHTML == 'X' && b6.innerHTML == 'X' || b4.innerHTML == 'O' && b5.innerHTML == 'O' && b6.innerHTML == 'O') {
        showModal()
    }
    if (b7.innerHTML == 'X' && b8.innerHTML == 'X' && b9.innerHTML == 'X' || b7.innerHTML == 'O' && b8.innerHTML == 'O' && b9.innerHTML == 'O') {
        showModal()
    }
    if (b3.innerHTML == 'X' && b6.innerHTML == 'X' && b9.innerHTML == 'X' || b3.innerHTML == 'O' && b6.innerHTML == 'O' && b9.innerHTML == 'O') {
        showModal()
    }
    if (b1.innerHTML == 'X' && b4.innerHTML == 'X' && b7.innerHTML == 'X' || b1.innerHTML == 'O' && b4.innerHTML == 'O' && b7.innerHTML == 'O') {
        showModal()
    }
    if (b1.innerHTML == 'X' && b5.innerHTML == 'X' && b9.innerHTML == 'X' || b1.innerHTML == 'O' && b5.innerHTML == 'O' && b9.innerHTML == 'O') {
        showModal()
    }
    if (b3.innerHTML == 'X' && b5.innerHTML == 'X' && b7.innerHTML == 'X' || b3.innerHTML == 'O' && b5.innerHTML == 'O' && b7.innerHTML == 'O') {
        showModal()
    }
    
})


function showModal(){
   modalBlock.classList.remove('hide') 
   winnerText.innerHTML = ''
   winnerText.innerHTML = `Congratulations, <br />  ${usersWins}  you have won`
}
submit.addEventListener('click',()=>{
    popup.style.display = 'none'
})