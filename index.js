let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#reset");
let newgame=document.querySelector("#new-game");
let msgcontain=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let player1='X';
let player2='O';
let player=player1;
let winPattern =[
    [0,1,2],
    [0,4,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

const resetGame=()=>{
    player=player1;
    msgcontain.classList.add("hide");
    enableBtn();
};

const disableBtn=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
};

const enableBtn=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
} 

boxes.forEach((el) => {
    el.addEventListener("click", () => {
        if(player==player1){
            el.innerHTML="X";
            player=player2;
        }
        else{
            el.innerHTML="O";
            player=player1;
        }
        el.disabled = true;
        checkWinner();
    }); 
});
const showWinner=(Winner)=>{
    msg.innerText=`Congratulations Winner is ${Winner}`;
    msgcontain.classList.remove("hide");
    disableBtn();
};
const checkWinner = () => {
    for(let pattern of winPattern)
    {
        let pos1 =boxes[pattern[0]].innerText;
        let pos2 =boxes[pattern[1]].innerText;
        let pos3 =boxes[pattern[2]].innerText;
        if(pos1 !="" && pos2 !="" && pos3 !=""){
            if(pos1===pos2 && pos2===pos3){
                showWinner(pos1);
            }
        }
    }
};

newgame.addEventListener("click",resetGame);
reset.addEventListener("click",resetGame);