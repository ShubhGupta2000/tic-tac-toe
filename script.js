let box1 = document.querySelectorAll(".box");

let reset1 = document.querySelector("#reset");

let newgame = document.querySelector("#new-bt");
let msgcont = document.querySelector(".msg-container");

let mes = document.querySelector("#msg");

let turn0 = true;

const winpattern = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const resetGame = () => {
  turn0 = true;
  enableBoxes();
  msgcont.classList.add("hide");
};
box1.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("Box Was Clicked");
    if (turn0) {
      box.innerText = "O";
      turn0 = false;
    } else {
      box.innerText = "X";
      turn0 = true;
    }
    box.disabled = true;

    checkWinner();
  });
});

const disableBoxes = () => {
  for (let box of box1) {
    box.disabled = true;
  }
};

const enableBoxes = () => {
  for (let box of box1) {
    box.disabled = false;
    box.innerText = "";
  }
};

const showWinner = (winner) => {
  mes.innerText = `Congratulation , Winner is ${winner}`;
  msgcont.classList.remove("hide");
  disableBoxes();
};

const checkWinner = () => {
  for (let pattern of winpattern) {
    let pos1 = box1[pattern[0]].innerText;
    let pos2 = box1[pattern[1]].innerText;
    let pos3 = box1[pattern[2]].innerText;

    if (pos1 != "" && pos2 != "" && pos3 != "") {
      if (pos1 === pos2 && pos2 === pos3) {
        console.log("winner", pos1);
        showWinner(pos1);
      }
    }
  }
};

newgame.addEventListener("click", resetGame);
reset1.addEventListener("click", resetGame);
