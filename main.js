let isNumber = (n) => !isNaN(parseFloat(n)) && isFinite(n);

let getRandomNumder = (min, max) =>
  Math.floor(Math.random() * (max - min) + min);
// console.log('getRandomNumder: ', getRandomNumder(1, 100));

function startGame() {
  let randomNum = getRandomNumder(1, 100);
  console.log(randomNum);

  return function game() {
    let user = prompt("Введите число от 1 до 100");
    let num;
    console.log(`загаданное число ${randomNum}`);

    if (isNumber(user)) {
      num = +user;
      if (user > randomNum) {
        alert("Загаданное число меньше");
        return game();
      } else if (user < randomNum) {
        alert("Загаданное число больше");
        return game();
      } else {
        alert("Вы выиграли ");
        if (confirm("Хочешь ещё?")) {
          return startGame();
        } else {
          alert("Пока");
        }
      }
    } else if (user === null) {
      alert("До встречи");
    } else {
      alert("Введи число");
      return game();
    }
  };
}
startGame()();
//test
