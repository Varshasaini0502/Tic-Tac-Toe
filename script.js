let container = document.querySelector('.container');
let currentPlayer = 'O';
let boxes = document.querySelectorAll('.box');
let Winner = document.querySelector('.Winner');
let reset = document.querySelector('.reset');
const winPatterns =[[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
boxes.forEach ((box) => {
    box.addEventListener('click', () => {
        if(box.innerText === '' && currentPlayer === 'O'){
            box.onclick = box.innerText = currentPlayer;
            currentPlayer = 'X';

        }
        else if(box.innerText === '' && currentPlayer === 'X'){
            box.onclick = box.innerText = currentPlayer;
            currentPlayer = 'O';
        }
        else if(currentPlayer ===0){
            alert('Game Over');
        }
        else{
            alert('This box is already taken');
        }
        checkWinner();

    });
});

reset.onclick = () => {
    boxes.forEach((box) => {
        box.innerText = '';
        currentPlayer = 'O';
    });
}
const checkWinner = ()=>{
    for(let patterns of winPatterns){ 
        let pos1val = boxes[patterns[0]].innerText;
        let pos2val = boxes[patterns[1]].innerText;
        let pos3val = boxes[patterns[2]].innerText;
        if(pos1val !== '' && pos2val !== '' && pos3val !== '' ){
            if(pos1val == pos2val && pos2val == pos3val ){
                Winner.onclick = Winner.innerText= pos1val;
                currentPlayer = 0;
            }
            
        }
    }
}

// modes 
let newbut = document.querySelector(".togbut");
let body = document.querySelector("body");
let curMode="dark";
newbut.addEventListener("click",function(){
    if(curMode==="dark"){
        body.style.backgroundColor="#090909";
        body.style.color="white";
        newbut.style.backgroundColor="skyblue";
        newbut.style.color="white";
        newbut.textContent="Light Mode";
        boxes.forEach((box)=>{
            box.style.backgroundColor="#e2dbbd";
            box.style.color="white";
        });
        
        curMode="light";
        
        
    }
    else{
        body.style.backgroundColor="#f3edd5";
        body.style.color="black";
        newbut.style.backgroundColor="grey";
        newbut.style.color="white";
        newbut.textContent="Dark Mode";
        boxes.forEach((box)=>{
            box.style.backgroundColor="white";
            box.style.color="black";
        });
        curMode="dark";
    }
});


