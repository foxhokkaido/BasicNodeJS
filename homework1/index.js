// index.js
const readlineSync = require("readline-sync");
const tictactoe = require('./app/index');

let win = false;
let game = new tictactoe();
while (!win) {
    let successStep = false;
    while (!successStep) {
        const input = readlineSync.question("Ход " + game.gamer + "-го игрока, введите номер строки и столбца: ");
        let _step = game.valid(input);
        if (_step) {
            if (game.checkFree(..._step)) {
                game.step(..._step);
                successStep = true;
            } else {
                console.log("Клетка занята!");
            }
        } else {
            console.log("Некорректный ввод");
        }
    }
    //Проверка конца игры
    win = game.endWin();
    if (!win) {
        game.changeGamer();
    } else {
        console.log("Победил " + game.getWinGamer() + "-й игрок");
        break;
    }
    if (game.end()) {
        console.log("Ничья!");
        break;
    }
    console.log(game.square);
}
