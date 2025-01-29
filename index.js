let boxex = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".reset-btn");

let turnX = true;

const winPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];


boxex.forEach((box) => {
    box.addEventListener("click", ()=>{
        console.log("button clicked");

        let val;
        if(turnX){
            val = "X";
            turnX = false;
        }
        else{
            val = "0";
            turnX = true;
        }
        box.innerText= val;
        box.disabled = true;

        checkWinner();
        isDraw();
    })
});


function abc(){
        for(box of boxex){
            box.innerText = "";
            box.disabled = false;
        }
    }


const checkWinner = () => {
    for(let pattern of winPatterns){
        let pos0 = boxex[pattern[0]].innerText;
        let pos1 = boxex[pattern[1]].innerText;
        let pos2 = boxex[pattern[2]].innerText;

        if(pos0 != "" && pos1 != "" && pos2 != ""){
            if(pos0 === pos1 && pos1 === pos2) {
                setTimeout(() => {
                    console.log(pos1);
                    alert("you are the winner : "+ pos1);
                    abc();
                }, 1);
            }
        }
    }
}

const isDraw = () => {
    let check = true;
    for(box of boxex){
        if(box.innerText === ""){
           return;
        }
    }
    setTimeout(() => {
        alert("Its a Draw : ");
        abc();
    }, 1);
}


resetBtn.addEventListener("click", ()=>{ abc()});