let appData = {
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: true
}

function start() {
  appData.money = +prompt("Ваш бюджет на месяц?", "");
  appData.timeData = prompt("Введите дату в формате YYYY-MM-DD", "");

  while (isNaN(appData.money) || appData.money == "" || appData.money == null) {
    appData.money = +prompt("Ваш бюджет на месяц?", "");
  }
}
start();

function chooseExpenses() {
  for (let i = 0; i < 2; i++) {
    let a = prompt("Введите обязательную статью расходовы в этом месяце", ""),
        b = prompt("Во сколько обойдется?", "");

    if ( (typeof(a)) === "string" && (typeof(a)) != null && (typeof(b)) != null 
    && a != '' && b != '' && a.length < 50 ) {
      console.log("done");
      appData.expenses[a] = b;
    } else {
      i -= 1;
    }
  }
}
chooseExpenses();

function detectDayBudget() {
  appData.moneyPerDay = (appData.money / 30).toFixed();
  alert("Ежедневный бюджет: " + appData.moneyPerDay);
}
detectDayBudget();

function detectLevel() {
  if (appData.moneyPerDay < 100) {
    console.log("Минимальный уровень достатка");
  } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log("Средний уровень достатка");
  } else if (appData.moneyPerDay > 2000) {
    console.log("Высокий уровень достатка");
  } else {
    console.log("Произошла ошибка");
  }
}
detectLevel();

function chooseOptExpenses() {
  for (let i = 1; i <= 3; i++) {
    let b = prompt("Статья необязательных расходов?", "");
    appData.optionalExpenses[i] = b;
  }
}
chooseOptExpenses();

function checkSavings() {
  if (appData.savings == true) {
    let save = +prompt("Какая сумма накоплений", ''),
        percent = +prompt("Под какой процент", "");

    appData.monthIncome = save / 100 / 12 * percent;
    alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
  }
}
checkSavings();