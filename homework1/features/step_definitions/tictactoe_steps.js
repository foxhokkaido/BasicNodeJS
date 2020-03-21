const assert = require('assert');
const { Given, When, Then } = require('cucumber');
const tictactoe = require('../../app/index');

let game;
let errorFree = true;

Given('поле {string}', function (string) {
    const arr = string.split("|");
    let square = [];
    for (let i = 0; i < 3; i += 1) {
        square.push(arr[i].split(""));
    }
    game = new tictactoe(square);
});

Given('ходит игрок {int}', function (int) {
    game.setGamer(Number(int));
});

Given('игрок ходит в клетку {int}, {int}', function (row, col) {
    if (game.checkFree(Number(row),Number(col))) {
        game.step(Number(row),Number(col));
    } else {
        errorFree = false;
    }
});

Then('поле становится {string}', function (string) {
    const arr = string.split("|");
    let square = [];
    let i;
    for (i = 0; i < 3; i += 1) {
        square.push(arr[i].split(""));
    }
    assert.deepEqual(square, game.getSquare());
});

Then('возвращается ошибка', function () {
    return errorFree;
});

Then('победил игрок {int}', function (int) {
    if (game.endWin()) {
        assert.equal(Number(int), Number(game.getWinGamer()));
    }
});
