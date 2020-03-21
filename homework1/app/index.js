class Tictactoe {
    constructor(square, gamer) {
        this.square = square || [[0, 0, 0],[0, 0, 0],[0, 0, 0]];
        this.gamer = gamer || 1;
        this.winGamer = 0;
    }
    setGamer (gamer) {
        this.gamer = gamer;
    }
    //валидация хода
    valid (str) {
        if (str.length === 2) {
            const row = Number(str[0]);
            const cell = Number(str[1]);
            if (!Number.isNaN(row) && !Number.isNaN(cell) && row > -1 && row < 3 && cell > -1 && row < 3) {
                return [row, cell];
            }
        }
        return false;
    }
    //проверка, что клетка свободна
    checkFree (row, cell) {
        if (Number(this.square[row][cell]) === 0) {
            return true;
        }
        return false;
    }
    //ход
    step (row, cell) {
        this.square[row][cell] = this.gamer;
    }
    getSquare () {
        return this.square;
    }
    //Смена игрока
    changeGamer () {
        if (this.gamer === 1) {
            this.gamer = 2;
        } else if (this.gamer === 2) {
            this.gamer = 1;
        }
    }
    //Проверка на победу
    endWin () {
        if ((this.square[0][0] !== 0 && this.square[0][0] === this.square[0][1] && this.square[0][1] === this.square[0][2]) ||
            (this.square[1][0] !== 0 && this.square[1][0] === this.square[1][1] && this.square[1][1] === this.square[1][2]) ||
            (this.square[2][0] !== 0 && this.square[2][0] === this.square[2][1] && this.square[2][1] === this.square[2][2]) ||
            (this.square[0][0] !== 0 && this.square[0][0] === this.square[1][0] && this.square[1][0] === this.square[2][0]) ||
            (this.square[0][1] !== 0 && this.square[0][1] === this.square[1][1] && this.square[1][1] === this.square[2][1]) ||
            (this.square[0][2] !== 0 && this.square[0][2] === this.square[1][2] && this.square[1][2] === this.square[2][2]) ||
            (this.square[0][0] !== 0 && this.square[0][0] === this.square[1][1] && this.square[1][1] === this.square[2][2]) ||
            (this.square[2][0] !== 0 && this.square[2][0] === this.square[1][1] && this.square[1][1] === this.square[0][2])) {
            this.winGamer = this.gamer;
            return true;
        }
        return false;
    }
    //Проверка на ничью
    end () {
        let i;
        let j;
        for (i = 0; i < 3; i += 1) {
            for (j = 0; j < 3; j += 1) {
                if (this.square[i][j] === 0) {
                    return false;
                }
            }
        }
        return true;
    }
    getWinGamer () {
        if (this.winGamer !== 0) {
            return this.winGamer;
        }
        return false;
    }
}

module.exports = Tictactoe;