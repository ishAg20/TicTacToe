console.log("Welcome to TicTacToe");
let ting = new Audio("ting.mp3");
let gameover = new Audio("gameover.mp3");
let turn = "X";
let won = false;
const changeTurn = () => {
  if (turn === "X") return "O";
  else return "X";
};
const checkWin = () => {
  let boxtexts = document.getElementsByClassName("boxtext");
  let wins = [
    [0, 1, 2, 0, 3, 0],
    [3, 4, 5, 0, 14, 0],
    [6, 7, 8, 0, 25, 0],
    [0, 3, 6, -10, 15, 90],
    [1, 4, 7, 0, 15, 90],
    [2, 5, 8, 10, 15, 90],
    [0, 4, 8, 2.5, 15, 45],
    [2, 4, 6, 0.7, 15, 130],
  ];
  wins.forEach((e) => {
    if (
      boxtexts[e[0]].innerText === boxtexts[e[1]].innerText &&
      boxtexts[e[2]].innerText === boxtexts[e[1]].innerText &&
      boxtexts[e[0]].innerText !== ""
    ) {
      document.querySelector(".info").innerText =
        boxtexts[e[0]].innerText + " Won";
      won = true;
      document
        .querySelector(".imgbox")
        .getElementsByTagName("img")[0].style.width = "30vw";
      gameover.play();
      document.querySelector(".line").style.display = "block";
      document.querySelector(
        ".line"
      ).style.transform = `translate(${e[3]}vw,${e[4]}vw) rotate(${e[5]}deg)`;
    }
  });
};
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach((element) => {
  let boxtext = element.querySelector(".boxtext");
  element.addEventListener("click", () => {
    if (boxtext.innerText === "") {
      boxtext.innerText = turn;
      turn = changeTurn();
      ting.play();
      checkWin();
      if (!won)
        document.getElementsByClassName("info")[0].innerHTML =
          "turn for " + turn;
    }
  });
});
reset.addEventListener("click", () => {
  let bt = document.querySelectorAll(".boxtext");
  Array.from(bt).forEach((element) => {
    element.innerText = "";
  });
  turn = "X";
  document.getElementsByClassName("info")[0].innerHTML = "turn for " + turn;
  won = false;
  document.querySelector(".imgbox").getElementsByTagName("img")[0].style.width =
    "0vw";
  document.querySelector(".line").style.display = "none";
});
