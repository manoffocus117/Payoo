// demo login system
let mobile_number_field = document.getElementById("mobile-number");
let pin_number_field = document.getElementById("pin-number");
let login_button = document.getElementById("login-button");
let login_section = document.getElementById("login");

// home section 
let home_section = document.getElementById("home");

// add money section
let add_money_option = document.getElementById("add-money-option");
let add_money_section = document.getElementById("add-money-section");

// cash out section
let cash_out_option = document.getElementById("cash-out-option");
let cash_out_section = document.getElementById("cash-out-section");

// transfer money section 
let transfer_money_option = document.getElementById("transfer-money-option");
let transfer_money_section = document.getElementById("transfer-money-section");

// get bonus section 
let get_bonus_option = document.getElementById("get-bonus-option");
let get_bonus_section = document.getElementById("get-bonus-section");

// pay bill section 
let pay_bill_option = document.getElementById("pay-bill-option");
let pay_bill_section = document.getElementById("pay-bill-section");

// transaction history section
let transaction_history_option = document.getElementById("transactions-option");
let transaction_history_section = document.getElementById("transaction-history-section");

// login system
login_button.addEventListener("click", function () {
      // mobile and pin number verification
      let mobile_number_value = mobile_number_field.value;
      let pin_number_value = pin_number_field.value;

      if (mobile_number_value.length === 11 && pin_number_value.length === 4) {
            if (mobile_number_value && pin_number_value !== "") {
                  login_section.style.display = "none";
                  home_section.style.display = "block";
            }
            alert("Welcome to Payoo");
      } else {
            alert("Invalid mobile number or pin");
      }

      // empty input fields
      mobile_number_field.value = "";
      pin_number_field.value = "";
});

// add money section 
add_money_option.addEventListener("click", function () {
      add_money_section.style.display = "block";
      cash_out_section.style.display = "none";
      transfer_money_section.style.display = "none";
      get_bonus_section.style.display = "none";
      pay_bill_section.style.display = "none";
      transaction_history_section.style.display = "none";
})

// cash out section 
cash_out_option.addEventListener("click", function () {
      cash_out_section.style.display = "block";
      add_money_section.style.display = "none";
      transfer_money_section.style.display = "none";
      get_bonus_section.style.display = "none";
      pay_bill_section.style.display = "none";
      transaction_history_section.style.display = "none";
})

// transfer money section 
transfer_money_option.addEventListener("click", function () {
      transfer_money_section.style.display = "block"
      add_money_section.style.display = "none";
      cash_out_section.style.display = "none";
      get_bonus_section.style.display = "none";
      pay_bill_section.style.display = "none";
      transaction_history_section.style.display = "none";
})

// get bonus section 
get_bonus_option.addEventListener("click", function () {
      get_bonus_section.style.display = "block";
      add_money_section.style.display = "none";
      cash_out_section.style.display = "none";
      transfer_money_section.style.display = "none";
      pay_bill_section.style.display = "none";
      transaction_history_section.style.display = "none";
})

// pay bill section 
pay_bill_option.addEventListener("click", function () {
      pay_bill_section.style.display = "block";
      add_money_section.style.display = "none";
      cash_out_section.style.display = "none";
      transfer_money_section.style.display = "none";
      get_bonus_section.style.display = "none";
      transaction_history_section.style.display = "none";
})

// transaction history section
transaction_history_option.addEventListener("click", function () {
      transaction_history_section.style.display = "block";
      add_money_section.style.display = "none";
      cash_out_section.style.display = "none";
      transfer_money_section.style.display = "none";
      get_bonus_section.style.display = "none";
      pay_bill_section.style.display = "none";
})



