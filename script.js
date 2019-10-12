'use strict';

let money, time;

function start(){
    money = +prompt('Enter your month budget', 'Insert the number');
    

    while(isNaN(money) || money == "" || money == null){
        money = +prompt('Enter your month budget', 'Insert the number');
    }

    let currentTime = new Date();
    time = prompt("Введите дату в формате YYYY-MM-DD", currentTime);
}
start();




    

const appData = {
    budget: money,
    timeData: time,
    expenses: {

    },
    optionalExpenses:{

    },
    income:[

    ],
    savings: true,

};




function chooseExpenses(){
    for(let i = 0; i < 2; i++){
        let a = prompt('Введите обязательную статью расходов в этом месяце1', 'введите слово'),
            b = parseInt(prompt('Во сколько обойдется1?', 'введите число'));
    
        if((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) === 'string' && (typeof(b) != null
        && a !='' && b != '' && a.length < 50)){
            appData.expenses[a] = b; // а станет свойством б станет значением
            console.log("done");
        } else {
            // i = i - 1;
    }};
}

chooseExpenses();


function detectDayBudget(){
    appData.moneyPerDay = appData.budget.toFixed(3) / 30;
    //let calcSum = (calc / 30);
    alert('Ежедневній бюджет' + appData.moneyPerDay);
    console.log(appData);
}

detectDayBudget();



function detectLevel(){
    if(appData.moneyPerDay < 100){
        console.log("na podsosah");
    } else if(appData.moneyPerDay > 100 && appData.moneyPerDay < 700){
        console.log("middle");
    } else {
        console.log("We have an error (few error) sir");
    }
}

detectLevel();

function checkSavings(){
    if (appData.savings == true){
        let save = +prompt("какова сумма накоплений?"),
            percent = +prompt("под какой процент?");

        appData.monthIncome = save/100/12*percent;
        alert("Доход в месяц с Вашего депозита: " + appData.monthIncome);
    }
}

checkSavings();


function chooseOptExpenses() {
    for(let i = 1; i <=3; i++){
        let optExp = prompt("Статья необязательных расходов?");
        appData.optionalExpenses[i] = optExp;
        
    }
    console.log(appData.optionalExpenses);
}

chooseOptExpenses();