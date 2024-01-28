window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  
  const values = {amount: 100000, years: 1, rate: 6};

  const formLoanAmount = document.getElementById("loan-amount");
  formLoanAmount.value = values.amount;

  const formLoanYears = document.getElementById("loan-years");
   formLoanYears.value = values.years;

  const formLoanRate = document.getElementById("loan-rate");
  formLoanRate.value = values.rate;

  update();

}

// Get the current values from the UI
// Update the monthly payment
function update() {
  const updatedValues = getCurrentUIValues();
  updateMonthly(calculateMonthlyPayment(updatedValues));

}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  const P = values.amount;
  const i = (1 + (values.rate/100)) ** (1 / 12) - 1;
  const n = Math.floor(values.years * 12);

  const monthlyPayment = (P * i) / (1 - (1 + i)**(-n));

  return monthlyPayment.toFixed(2);
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  const text = "$" + monthly.toString();
  const monthlyPaymentSpan = document.querySelector("#monthly-payment");

  monthlyPaymentSpan.innerHTML = text;
}
