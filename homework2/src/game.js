let field = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
let gamer = 1;
let winGamer = -1;

function getField() {
    return field;
}

function makeMove(x, y) {
    field[y][x] = Number(gamer);
}

function reset() {
    field = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
}

function presetField(newField) {
    field = newField;
}

function setGamer(newGamer) {
    gamer = newGamer;
}

function changeGamer() {
    if (gamer === 1) {
        gamer = 2;
    } else {
        gamer = 1;
    }
}

function checkFree (x, y) {
    if (field[y][x] === 0) {
        return true;
    }
    return false;
}

function getEnd () {
    if ((field[0][0] !== 0 && field[0][0] === field[0][1] && field[0][1] === field[0][2]) ||
        (field[1][0] !== 0 && field[1][0] === field[1][1] && field[1][1] === field[1][2]) ||
        (field[2][0] !== 0 && field[2][0] === field[2][1] && field[2][1] === field[2][2]) ||
        (field[0][0] !== 0 && field[0][0] === field[1][0] && field[1][0] === field[2][0]) ||
        (field[0][1] !== 0 && field[0][1] === field[1][1] && field[1][1] === field[2][1]) ||
        (field[0][2] !== 0 && field[0][2] === field[1][2] && field[1][2] === field[2][2]) ||
        (field[0][0] !== 0 && field[0][0] === field[1][1] && field[1][1] === field[2][2]) ||
        (field[2][0] !== 0 && field[2][0] === field[1][1] && field[1][1] === field[0][2])) {
        winGamer = gamer;
        return true;
    } else if (notEmpty()) {
        return true;
    }
    return false;
}

function getWin () {
    return winGamer;
}

function notEmpty () {
    let i;
    let j;
    for (i = 0; i < 3; i += 1) {
        for (j = 0; j < 3; j += 1) {
            if (field[i][j] === 0) {
                return false;
            }
        }
    }
    return true;
}

module.exports = {
    getField,
    makeMove,
    reset,
    presetField,
    setGamer,
    changeGamer,
    checkFree,
    getEnd,
    getWin
};