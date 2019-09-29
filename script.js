'use strict';

let money = parseInt(prompt('Enter your month budget', 'Insert the number')),
    currentTime = new Date(),
    time = prompt("Введите дату в формате YYYY-MM-DD", currentTime);
    

const appData = {
    budget: money,
    //timeData: time,
    expenses: {

    },
    optionalExpenses:{

    },
    income:[

    ],
    savings: false,

};


for(let i = 0; i < 2; i++){
    let a = prompt('Введите обязательную статью расходов в этом месяце1', 'введите слово'),
        b = parseInt(prompt('Во сколько обойдется1?', 'введите число'));

    if((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) === 'string' && (typeof(b) != null
    && a !='' && b!= '' & a.length < 50)){
        appData.expenses[a] = b; // а станет свойством б станет значением
    } else{
            // прописать возврат к новому циклу
    }
};

appData.moneyPerDay = appData.budget.toFixed(3) / 30;
//let calcSum = (calc / 30);
alert('Ежедневній бюджет' + appData.moneyPerDay);
console.log(appData);

if(appData.moneyPerDay < 100){
    console.log("na podsosah");
} else if(appData.moneyPerDay > 100 && appData.moneyPerDay < 2000){
    console.log("middle");
}