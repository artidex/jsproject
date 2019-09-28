'use strict';

let money = parseInt(prompt('Enter your month budget', 'Insert the number')),
    currentTime = new Date(),
    time = prompt("Введите дату в формате YYYY-MM-DD", currentTime),
    firstQ = prompt('Введите обязательную статью расходов в этом месяце', 'введите слово'),
    secondQ = parseInt(prompt('Во сколько обойдется?', 'введите число'));

const appData = {
    budget: money,
    timeData: time,
    expenses: {
        firstA: firstQ, 
        secondA: secondQ,
    },
    optionalExpenses:{

    },
    income:[

    ],
    savings: Boolean,

};

let calcSum = ((appData.budget - appData.expenses.secondA) / 30);


alert (calcSum.toFixed(3));