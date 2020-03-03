const readlineSync = require('readline-sync');

const monster = {
    maxHealth: 10,
    name: "Лютый",
    moves: [
        {
            "name": "Удар когтистой лапой",
            "physicalDmg": 3, // физический урон
            "magicDmg": 0,    // магический урон
            "physicArmorPercents": 20, // физическая броня
            "magicArmorPercents": 20,  // магическая броня
            "cooldown": 0     // ходов на восстановление
        },
        {
            "name": "Огненное дыхание",
            "physicalDmg": 0,
            "magicDmg": 4,
            "physicArmorPercents": 0,
            "magicArmorPercents": 0,
            "cooldown": 3
        },
        {
            "name": "Удар хвостом",
            "physicalDmg": 2,
            "magicDmg": 0,
            "physicArmorPercents": 50,
            "magicArmorPercents": 0,
            "cooldown": 2
        },
    ]
};
let Eustathius = {
    maxHealth: 0,
    moves: [
        {
            "name": "Удар боевым кадилом",
            "physicalDmg": 2,
            "magicDmg": 0,
            "physicArmorPercents": 0,
            "magicArmorPercents": 50,
            "cooldown": 0
        },
        {
            "name": "Вертушка левой пяткой",
            "physicalDmg": 4,
            "magicDmg": 0,
            "physicArmorPercents": 0,
            "magicArmorPercents": 0,
            "cooldown": 4
        },
        {
            "name": "Каноничный фаербол",
            "physicalDmg": 0,
            "magicDmg": 5,
            "physicArmorPercents": 0,
            "magicArmorPercents": 0,
            "cooldown": 3
        },
        {
            "name": "Магический блок",
            "physicalDmg": 0,
            "magicDmg": 0,
            "physicArmorPercents": 100,
            "magicArmorPercents": 100,
            "cooldown": 4
        },
    ]
};

function getRandomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let stepsEustathius = [0,0,0,0];
let stepsMonster = [0,0,0,0];

let start = 0;
while (start === 0) {
    let tmp = readlineSync.question('Введи начальное здоровье Евстафия - ');
    tmp = parseInt(tmp);
    if (tmp > 0) {
        start = tmp;
    }
}
Eustathius.maxHealth = start;

let i = 0; //количество ходов
let healthMonster = monster.maxHealth;
let healthEustathius = Eustathius.maxHealth;
while (true) {
    if (healthEustathius > 0 && healthMonster > 0) { //игра продолжается
        i++;

        //генерируем ход монстра
        let mStep = 0;
        while (mStep === 0) {
            let tmp = getRandomInRange(1,3);
            if (tmp === 2) {
                if (stepsMonster[stepsMonster.length-1] !== 2) {
                    if (stepsMonster[stepsMonster.length-2] !== 2) {
                        if (stepsMonster[stepsMonster.length-3] !== 2) {
                            mStep = 2;
                            break;
                        } else continue;
                    } else continue;
                } else continue;
            } else if (tmp === 3) {
                if (stepsMonster[stepsMonster.length-1] !== 3) {
                    if (stepsMonster[stepsMonster.length-2] !== 3) {
                        mStep = 3;
                        break;
                    } else continue;
                } else continue;
            } else if (tmp === 1) {
                mStep = tmp;
            }
        }
        stepsMonster.push(mStep);
        console.log('Ход монстра: ' + monster.moves[mStep-1].name);

        //ход игрока
        console.log('Выберите свой ход: 1 - Удар боевым кадилом \n 2 - Вертушка левой пяткой \n 3 - Каноничный фаербол \n 4 - Магический блок');
        let eStep = 0;
        while (eStep === 0) {
            let answer = readlineSync.question('Ваш выбор: ');
            answer = parseInt(answer);
            if (answer < 1 || answer > 4) {
                console.log('Такого варианта нет');
            } else {
                if (answer === 1) {
                    eStep = answer;
                    break;
                } else if (answer === 2) {
                    if (stepsEustathius[stepsEustathius.length-1] !== 2) {
                        if (stepsEustathius[stepsEustathius.length-2] !== 2) {
                            if (stepsEustathius[stepsEustathius.length-3] !== 2) {
                                if (stepsEustathius[stepsEustathius.length-4] !== 2) {
                                    eStep = answer;
                                    break;
                                } else {
                                    console.log('Эту атаку нельзя сейчас использовать!');
                                    continue;
                                }
                            } else {
                                console.log('Эту атаку нельзя сейчас использовать!');
                                continue;
                            }
                        } else {
                            console.log('Эту атаку нельзя сейчас использовать!');
                            continue;
                        }
                    } else {
                        console.log('Эту атаку нельзя сейчас использовать!');
                        continue;
                    }
                } else if (answer === 3) {
                    if (stepsEustathius[stepsEustathius.length-1] !== 3) {
                        if (stepsEustathius[stepsEustathius.length-2] !== 3) {
                            if (stepsEustathius[stepsEustathius.length-3] !== 3) {
                                eStep = answer;
                                break;
                            } else {
                                console.log('Эту атаку нельзя сейчас использовать!');
                                continue;
                            }
                        } else {
                            console.log('Эту атаку нельзя сейчас использовать!');
                            continue;
                        }
                    } else {
                        console.log('Эту атаку нельзя сейчас использовать!');
                        continue;
                    }
                } else if (answer === 4) {
                    if (stepsEustathius[stepsEustathius.length-1] !== 4) {
                        if (stepsEustathius[stepsEustathius.length-2] !== 4) {
                            if (stepsEustathius[stepsEustathius.length-3] !== 4) {
                                if (stepsEustathius[stepsEustathius.length-4] !== 4) {
                                    eStep = answer;
                                    break;
                                } else {
                                    console.log('Эту атаку нельзя сейчас использовать!');
                                    continue;
                                }
                            } else {
                                console.log('Эту атаку нельзя сейчас использовать!');
                                continue;
                            }
                        } else {
                            console.log('Эту атаку нельзя сейчас использовать!');
                            continue;
                        }
                    } else {
                        console.log('Эту атаку нельзя сейчас использовать!');
                        continue;
                    }
                }
            }
        }
        stepsEustathius.push(eStep);
        let moveEustathius = Eustathius.moves[eStep-1];
        let moveMonster = monster.moves[mStep-1];
        //атака
        let physicalDmgToMonster = moveEustathius.physicalDmg - ((moveEustathius.physicalDmg/100)*moveMonster.physicArmorPercents);
        let magicDmgToMonster = moveEustathius.magicDmg - ((moveEustathius.magicDmg/100)*moveMonster.magicArmorPercents);
        let physicalDmgToEustathius = moveMonster.physicalDmg - ((moveMonster.physicalDmg/100)*moveEustathius.physicArmorPercents);
        let magicDmgToEustathius = moveMonster.magicDmg - ((moveMonster.magicDmg/100)*moveEustathius.magicArmorPercents);
        healthMonster -= physicalDmgToMonster;
        healthMonster -= magicDmgToMonster;
        healthEustathius -= physicalDmgToEustathius;
        healthEustathius -= magicDmgToEustathius;
        console.log('Ход - ' + i + ': Евстафий - ' + healthEustathius + '; Лютый - ' + healthMonster);
    } else if (healthEustathius > 0) {
        console.log('Поздравляем! Вы победили монстра!');
        break;
    } else if (healthMonster > 0) {
        console.log('Вас убили! Ха-ха-ха!');
        break;
    } else {
        console.log('Евстафий и монстр были убиты на поле боя.');
        break;
    }
}

