/* eslint-disable import/no-extraneous-dependencies */

const assert = require('assert');
const { Given, Then } = require('cucumber');
const request = require('supertest');
const app = require('../src/server');

const controller = require('../src/game');

let lastResult = {};
let error;

Given('пустое поле', () => {
    controller.reset();
});

Given('поле {string}', function (startFieldStr) {
    const arr = startFieldStr.split("|");
    let startField = [];
    let i;
    for (i = 0; i < 3; i += 1) {
        startField.push(arr[i].split("").map(function (item) {
            return Number(item);
        }));
    }
    controller.presetField(startField);
});

Given('ходит игрок {int}', (int) => {
    controller.setGamer(int);
});

Given('игрок ходит в клетку {int}, {int}', (x, y) => {
    return request(app)
        .post('/move')
        .send({x, y})
        .then((res) => {
            lastResult = res;
            error = res.status;
        });
});

Then('поле становится {string}', function (testFieldStr) {
    const arr = testFieldStr.split("|");
    let testField = [];
    let i;
    for (i = 0; i < 3; i += 1) {
        testField.push(arr[i].split("").map(function (item) {
            return Number(item);
        }));
    }
    const field = controller.getField();
    assert.deepEqual(testField, field);
});

Then('возвращается ошибка', function () {
    assert.equal(error, 400);
});

Then('победил игрок {int}', function (testWin) {
    if (controller.getEnd()) {
        const win = controller.getWin();
        assert.equal(testWin, win);
    } else {
        return false;
    }
});




