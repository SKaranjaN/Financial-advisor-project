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
    if (weeklyChecked) {
        const monthlyOnWeekly = (incomeValue * 4);
      return (incomeValue * 4);
    } else if (monthlyChecked) {
      return (incomeValue);
    } else if (annuallyChecked) {
      return (incomeValue / 12);
    } else {
      return "Please select an income frequency.";
    }
  }

// // Step 3: Create a function to calculate the user's monthly expenses
function calculateExpenses() {
  // code to calculate expenses
    const expenseValue = document.getElementById('expensesInput').value;
    if (expenseValue > 0) {
      const monthlyExpense = (calculateIncome() / 2);
      const dailyExpense = (monthlyExpense / 30);
      const expensesMessage = (`${monthlyExpense}, this should be your monthly expenses and, ${dailyExpense}, this should be your daily expenses`);
      return (expensesMessage);
    } else {
      return "Kindly input an amount as your expense.";
    }
  }

// // Step 4: Create a function to calculate the user's monthly savings
function calculateSavings() {
  // code to calculate savings
  const savingsMonthly = ((calculateIncome *20)/100);
  const savingsDaily = (savingsMonthly/30);
  const savingsMessage = (`${savingsMonthly}, This should be your monthly savings and this, ${savingsDaily}, should be your daily savings.`)
  return(savingsMessage);
}
// // Step 5: Create a function to display the user's financial information
// function displayFinancialInformation() {
//   // code to display income, expenses, and savings
// }
// // Step 6: Call the functions in the appropriate order to calculate and display the user's financial information
// calculateIncome();
// calculateExpenses();
// calculateSavings();
// displayFinancialInformation();

//Fetch the data from the API
// const apiData = "https://api.currencyapi.com/v3/latest?apikey=4CpaYxoACbxAMvtSNNUjSbDZCggfAWL0pidRcHt6";
// const baseUrl = "http://localhost:3000";
// 
//Eventlistener for the submit button 

const submitButton = document.getElementById('submit');
submitButton.addEventListener('click', () => {
  const calculatedIncome = calculateIncome();
  alert(calculatedIncome);
  const calculatedExpense = calculateExpenses();
  alert(calculatedExpense);
});