const user = {
    currentBalance: 5000,
    transactionsMonthToDate: [{}],
  };
  
  user.transactionsMonthToDate = [
    {
      amount: 3000,
      type: "deposit",
      category: "Salary - Full Time",
    },
    { category: "Dining", amount: 50, type: "withdrawal" },
    { category: "Dining", amount: 100, type: "withdrawal" },
    { category: "Rent", amount: 2000, type: "withdrawal" },
    { category: "Groceries", amount: 250, type: "withdrawal" },
    {
      amount: 250,
      type: "withdrawal",
      category: "Transportation",
    },
    {
      amount: 250,
      type: "withdrawal",
      category: "Health",
    },
    {
      amount: 50,
      type: "withdrawal",
      category: "Travel - Fuel",
    },
    { category: "Living", amount: 650, type: "withdrawal" },
    { category: "Groceries", amount: 500, type: "withdrawal" },
    { category: "Living", amount: 250, type: "withdrawal" },
    { category: "Living", amount: 250, type: "withdrawal" },
    {
      amount: 5000,
      type: "deposit",
      category: "Salary - Part Time",
    },
    { category: "Groceries", amount: 450, type: "withdrawal" },
    {
      amount: 58,
      type: "withdrawal",
      category: "Transportation",
    },
    {
      amount: 50,
      type: "withdrawal",
      category: "Health",
    },
    {
      amount: 100,
      type: "withdrawal",
      category: "Transportation",
    },
    {
      amount: 150,
      type: "withdrawal",
      category: "Transportation",
    },
    { category: "Groceries", amount: 100, type: "withdrawal" },
    {
      amount: 100,
      type: "withdrawal",
      category: "Entertainment",
    },
    {
      amount: 500,
      type: "withdrawal",
      category: "Entertainment",
    },
    { category: "Groceries", amount: 300, type: "withdrawal" },
    {
      amount: 500,
      type: "withdrawal",
      category: "Travel - Airline",
    },
    {
      amount: 1500,
      type: "withdrawal",
      category: "Travel - Hotel",
    },
    {
      amount: 50,
      type: "withdrawal",
      category: "Travel - Fuel",
    },
    { category: "Groceries", amount: 200, type: "withdrawal" },
    {
      amount: 500,
      type: "deposit",
      category: "Portfolio Dividends",
    },
    {
      amount: 100,
      type: "withdrawal",
      category: "Entertainment",
    },
    {
      amount: 100,
      type: "withdrawal",
      category: "Travel - Fuel",
    },
    { category: "Groceries", amount: 200, type: "withdrawal" },
    {
      amount: 100,
      type: "withdrawal",
      category: "Entertainment",
    },
    {
      amount: 100,
      type: "withdrawal",
      category: "Health",
    },
  ];


  //Use a for loop to print to the screen the transaction history for the month in this format:

  const transactionHistoryPrint = () => {
    console.log('Balance:', `${user.currentBalance}`);
    console.log('Transaction History:');
    let amountOfMoney = user.currentBalance;
    user.transactionsMonthToDate.forEach(trans => {
      if (trans.type === 'deposit') {
        amountOfMoney += trans.amount;
        console.log(`- You deposited \$${trans.amount}. The new balance is \$${amountOfMoney}.`);
      } else {
        amountOfMoney -= trans.amount;
        console.log(`- You withdrew \$${trans.amount}. The new balance is \$${amountOfMoney}.`);
      }
    });
  };
  transactionHistoryPrint();
//   Define a function that returns the total number of deposits.
//Way 1:
// let totalNumber = 0
// user.forEach(e=>{
//     totalNumber += (e.type ==='deposit')
// })
const totalNumberDeposits =() => {
    const sum = user.transactionsMonthToDate.reduce((total, e) => { 
        return total + (e.type === 'deposit');
    },0) //0 -> initialize value accumulator: total = 0
    console.log("Total Number Deposit:", sum);
} 
totalNumberDeposits();

//   Define a function that returns the total number of withdrawals.
const totalNumberwithDrawals = () => {
    const sum = user.transactionsMonthToDate.reduce((total,e) => {
        return total + (e.type === 'withdrawal');
    },0)
    console.log("Total number withdrawal", sum);
}
totalNumberwithDrawals();
//   Define a function that returns the sum of deposits.
//way 1: use for loop
// let total = 0;
// user.transactionsMonthToDate.forEach(e =>{
//     if(e.type ==="deposit"){
//         total += e.amount;
//     }
// })
// console.log(total)
//way 2: use reduce
const sumOfDeposits = () => {
    const sum = user.transactionsMonthToDate.reduce((total,e)=> {
        return total + e.amount * (e.type ==='deposit');
    },0)
    console.log("sumOfDeposits", sum);
}
sumOfDeposits();
//   Define a function that returns the sum of withdrawals.
const sumOfWithDrawals = () => {
    const sum = user.transactionsMonthToDate.reduce((total,e)=> {
        return total + e.amount * (e.type ==='withdrawal');
    },0)
    console.log("sumOfWithDrawal", sum);
}
sumOfWithDrawals();
//   Define a function that returns the difference between deposits and withdrawals.
const betweenDW = () => {
    const sum = user.transactionsMonthToDate.reduce((total,e) =>{
        return total + (e.amount *(e.type ==='deposit') - (e.amount * (e.type ==='withdrawal')))
    },0)
    console.log("between Deposit and Withdrawal:", sum);
}
betweenDW();
//   Define a function that returns a new balance for the next month.
const newBalance = () => {
  const sum = user.transactionsMonthToDate.reduce((total,e) => {
    return total + (e.amount *(e.type ==='deposit') - (e.amount * (e.type ==='withdrawal')))
},0)
  user.currentBalance += sum;
  console.log("New balance this month:", user.currentBalance);
};
newBalance();
//   Define a function that returns the sum of the groceries.
const sumOfGroceries = () => { 
  const sum = user.transactionsMonthToDate.reduce((total,e) => {
    return total + (e.amount * (e.category === 'Groceries'))
},0)
  console.log("sum of groceries", sum);
};
sumOfGroceries();
//   Define a function that returns the sum of the entertainment.
const sumOfEntertainment = () => { 
  const sum = user.transactionsMonthToDate.reduce((total,e) => {
    return total + (e.amount * (e.category === 'Entertainment'))
},0)
  console.log("sum of Entertainment", sum);
};
sumOfEntertainment();
//   Define a function that returns the sum of the travel.
  // for (let i = 0; i < user.transactionsMonthToDate.length; i++) {
      // const element = user.transactionsMonthToDate[i];
  // }
  const sumOfTravel = () => {
    let output = 0;
    const sum = user.transactionsMonthToDate.reduce((acc, e) => {
        let x = e.category.split(' ')[0];
        if (x === 'Travel') {
        output += e.amount;
        }
    }, 0);
        console.log("sumOfTravel", output);  
}
sumOfTravel();
//   Define a function that given a conversion rate of 23000vnd to 1usd returns if the account spent more usd than vnd was deposited into the account for the month.
const conversionRate = () => {
  const sum1 = user.transactionsMonthToDate.reduce((total,e)=> {
    return total + e.amount * (e.type ==='deposit');
},0)
const sum2 = user.transactionsMonthToDate.reduce((total,e)=> {
  return total + e.amount * (e.type ==='withdrawal');
},0)
if(sum1 > sum2){
  console.log(user.transactionsMonthToDate.amount *= 23000,"VND")
}
}
conversionRate()
//   Define a function that returns an array of new objects where currency is VND and the amount is it's converted amount.
const currencyConvert = () => {
  user.transactionsMonthToDate.forEach(item => {
    item.currencyNew = "VND";
    item.amount *= 23000;
  })
  console.log(user.transactionsMonthToDate);
}
currencyConvert();
// Use a for loop to print out the transaction history for the month in this format:
const transactionHistoryPrintNew = () => {
  const d = 23000;
  console.log('Balance:', `${user.currentBalance*d}`);
  console.log('Transaction History:');
  let amountOfMoney = user.currentBalance *d;
  user.transactionsMonthToDate.forEach(trans => {
    if (trans.type === 'deposit') {
      amountOfMoney += trans.amount * d;
      console.log(`- You deposited \d ${trans.amount*d}. The new balance is \d ${amountOfMoney}.`);
    } else {
      amountOfMoney -= trans.amount * d;
      console.log(`- You withdrew \d ${trans.amount*d}. The new balance is \d ${amountOfMoney}.`);
    }
  });
};
transactionHistoryPrintNew();