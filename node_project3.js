const readlineSync = require('readline-sync');
const fs = require('fs');

function getRandomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
let arrQuestions = [];
while (arrQuestions.length < 5) {
    let tmp = getRandomInRange(1, 10);
    if (arrQuestions.indexOf(tmp) === -1) {
        arrQuestions.push(tmp);
    }
}
let countTrue = 0;
for (let i=0; i<arrQuestions.length; i++) {
    const data = fs.readFileSync('questions/'+ arrQuestions[i] +'.txt', 'utf8');
    const arrStr = data.split('\n');
    console.log(arrStr[0]);
    for(let j=2; j<arrStr.length; j++) {
        console.log(j-1 + ': ' + arrStr[j]);
    }
    const answer = readlineSync.question('Ваш ответ - ');
    if (parseInt(answer) === parseInt(arrStr[1])) {
        countTrue++;
    }
}
console.log('Количество правильных ответов - ', countTrue);
