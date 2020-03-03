//chcp 65001 - смена кодировки на юникод

const readlineSync = require('readline-sync');

const len = 6; //длина числа
const k = 4; //максимальное число различающихся цифр
const attempt = 6; //число попыток

function getRandomInt() {
    return Math.floor(Math.random() * 10);
}

let num = "";
let changeNum = 0;
while (num.length < len) {
 let tmp = getRandomInt().toString();
 if (num.indexOf(tmp) === -1 && changeNum < k) { //цифры еще не было и есть место для новой
     changeNum++;
     num += tmp;
 } else if (num.indexOf(tmp) !== -1) {
     num += tmp;
 }
}

//console.log(num);//загаданное число

let curAttempt = 0;
while (curAttempt < attempt) {
    curAttempt++;
    let answer = "";
    while (answer.length === 0) {
        let input = readlineSync.question('Введи ' + len + ' значное число из ' + changeNum + ' различающихся цифр ');
        input = input.toString();
        if (input.length === len && /^\d+$/.test(input)) {
            answer += input;
        }
    }
    let strTrue = "";
    let countTrue = 0;
    let strFalse = "";
    let countFalse = 0;
    for (let i=0; i<len; i++) {
        if (num.indexOf(answer[i]) !== -1) { //цифра совпала
            if (num[i] === answer[i]) { //цифра на своем месте
                if (countTrue > 0) {
                    strTrue += ','
                }
                countTrue++;
                strTrue += answer[i];
            } else {
                if (countFalse > 0) {
                    strFalse += ',';
                }
                countFalse++;
                strFalse += answer[i];
            }
        }
    }
    if (countTrue === len) {
        console.log('Поздравляем! Вы угадали!');
        break;
    } else {
        console.log('Совпавших цифр не на своих местах - ' + countFalse + '(' + strFalse + '), цифр на своих местах - ' + countTrue + '(' + strTrue + ')');
        if (curAttempt === attempt) {
            console.log('Вы проиграли! Ха-ха-ха! Правильный ответ ' + num);
        }
    }
}