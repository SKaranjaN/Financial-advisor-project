/* Work plan:
1.Define the layout and design of the application, including the user interface and data visualization tools.
2. Set up the necessary files and folders for the application, including the HTML, CSS, and JavaScript files.
3. Write the JavaScript code to define the variables for the user's financial information.
4. Write the JavaScript code to calculate the user's monthly income.
5. Write the JavaScript code to calculate the user's monthly expenses.
6. Write the JavaScript code to calculate the user's monthly savings.
7. Write the JavaScript code to display the user's financial information.
8. Test the application to ensure that it is working properly and producing accurate results.
9. Implement any necessary changes or updates based on user feedback and testing results.
10. Deploy the application to a live server or hosting platform for users to access.
*/
// Pseudo code
// Step 1: Define variables for the user's financial information
// let income;
// let expenses;
// let savings;


// // Step 2: Create a function to calculate the user's annual income
//This function takes the income, whether daily, weekly or monthly and calculates the annual income
function calculateIncome() {
    const incomeValue = document.getElementById('incomeInput').value;
    const weeklyChecked = document.getElementById('Weekly').checked;
    const monthlyChecked = document.getElementById('Monthly').checked;
    const annuallyChecked = document.getElementById('Annual').checked;
    
    if (weeklyChecked && !monthlyChecked && !annuallyChecked) {
      return (incomeValue * 4);
    } else if (!weeklyChecked && monthlyChecked && !annuallyChecked) {
      return (incomeValue);
    } else if (!weeklyChecked && !monthlyChecked && annuallyChecked) {
      return (incomeValue / 12);
    } else {
      return alert("Please select one income frequency.");
    }
  }

// // Step 3: Create a function to calculate the user's monthly expenses
function calculateExpenses() {
  // code to calculate expenses
  const currencySymbol = getCurrencySymbol();
    const expenseValue = document.getElementById('expensesInput').value;
    if (expenseValue > 0) {
      const monthlyExpense = Math.round((calculateIncome() / 2));
      const dailyExpense = Math.round((monthlyExpense / 30));
      //This was to test whether the function works correctly although it will be called by the displayFinancialInfo function.
      const expensesMessage = (`${monthlyExpense.toLocaleString()} should be the recommended monthly expenses or even less if you can.
    The recommended daily expenses should be ${currencySymbol}${dailyExpense.toLocaleString()} or even less if you can`);
      return (expensesMessage);
    } else {
      return "Kindly input an amount as your expense.";
    }
  }

// // Step 4: Create a function to calculate the user's monthly savings
function calculateSavings() {
  // code to calculate savings
  const currencySymbol = getCurrencySymbol();
  const savingsMonthly = Math.round(((calculateIncome() *20)/100));
  const savingsDaily = Math.round((savingsMonthly/30));
  //This was to test whether the function works correctly although it will be called by the displayFinancialInfo function.
  const savingsMessage = (`${savingsMonthly.toLocaleString()}, is the recommended amount for you to save monthly and to realize this, the recommended daily savings should be atleast ${currencySymbol}${savingsDaily.toLocaleString()}`)
  return(savingsMessage);
}
// Step 5: Create a function to display the user's financial information
function displayFinancialInformation() {
  // code to display income, expenses, and savings
  const income = Math.round(calculateIncome());
  const expenses = calculateExpenses();
  const savings = calculateSavings();
  const currencySymbol = getCurrencySymbol();

  const financialInfo = `Your monthly income is ${currencySymbol}${income.toLocaleString()}.
  ${currencySymbol}${expenses}.
  ${currencySymbol}${savings}.`;
  const displayElement = document.createElement('p');
  displayElement.innerText = financialInfo;
  const body = document.getElementById('body');
  body.appendChild(displayElement);
}
// // Step 6: Call the functions in the appropriate order to calculate and display the user's financial information
// calculateIncome();
// calculateExpenses();
// calculateSavings();
// displayFinancialInformation();


//Currency function

function getCurrencySymbol() {
    const kshChecked = document.getElementById("Ksh").checked;
    const usdChecked = document.getElementById("Usd").checked;

    if (kshChecked && !usdChecked) {
      return 'Ksh. ';
    } else if (usdChecked && !kshChecked) {
      return 'USD ';
    } else {
      return '';
    }
  }

//Eventlistener for the submit button 

const submitButton = document.getElementById('submit');
submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    const infoData = displayFinancialInformation();
    // alert(infoData);
});

//EventListener for the reset button

const resetBtn = document.getElementById("reset");
resetBtn.addEventListener("click", () => reset.default)



//Fetch the data from the API

const exchangeRateDiv = document.getElementById('exchange-rate');

fetch('https://api.fiscaldata.treasury.gov/services/api/fiscal_service/v1/accounting/od/rates_of_exchange?fields=country_currency_desc')
  .then(response => response.json())
  .then(data => {
    const exchangeRate = data.exchange_rate;
    exchangeRateDiv.textContent = `1 USD = ${exchangeRate} KES`;
  })
  .catch(error => {
    console.error('Error fetching exchange rate:', error);
    exchangeRateDiv.textContent = 'Error fetching exchange rate';
  });

// const apiData = "https://api.currencyapi.com/v3/latest?apikey=4CpaYxoACbxAMvtSNNUjSbDZCggfAWL0pidRcHt6";
// const baseUrl = "http://localhost:3000";
// 

//apilayer.com fAPfog4rTdxeUqidgZKULnXnf9KVgMaH key


//key a707eed4dbmshbb6575b7dab2316p177f63jsnadf3ac3474OO
//host yh-finance.p.rapidapi.com

