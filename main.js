function playRound(player, computerSelection) {
  player = player.toLowerCase();

  const winMassage = "Anda menang";
  const loseMassage = "anda kalah";
  const drawMassage = "hasil seri";

  if (player === computerSelection) {
    return drawMassage;
  } else if (
    (player === "batu" && computerSelection === "gunting") ||
    (player === "gunting" && computerSelection === "kertas") ||
    (player === "kertas" && computerSelection === "batu")
  ) {
    return `${winMassage} ${player} mengalahkan ${computerSelection}`;
  } else {
    return `${loseMassage} ${computerSelection} mengalahkan ${player}`;
  }
}

function computerChoice() {
  let choice = ["batu", "gunting", "kertas"];
  let randomIndex = Math.floor(Math.random() * choice.length);

  return choice[randomIndex];
}

function game() {
  let playerSkor = 0;
  let computerSkor = 0;

  for (i = 0; i <= 5; i++) {
    const player = prompt("masukkan pilihan anda");
    const computerSelection = computerChoice();
    const result = playRound(player, computerSelection);

    console.log(result);
    if (result.includes("Anda menang")) {
      playerSkor++;
    } else if (result.includes("anda kalah")) {
      computerSkor++;
    }
  }
  if (playerSkor > computerSkor) {
    console.log("kamu menang");
  } else if (computerSkor > playerSkor) {
    console.log("kamu kalah");
  } else {
    console.log("permainan seeri anjayani");
  }
}

game();
