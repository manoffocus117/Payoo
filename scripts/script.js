let mobile_number_field = document.getElementById("mobile-number");
let pin_number_field = document.getElementById("pin-number");
let login_button = document.getElementById("login-button");
let login_section = document.getElementById("login");

let add_money_option = document.getElementById("add-money-option");
let add_money_section = document.getElementById("add-money-section");

// login system
login_button.addEventListener("click", function () {
      // mobile and pin number verification
      let mobile_number_value = mobile_number_field.value;
      let pin_number_value = pin_number_field.value;

      if (mobile_number_value.length === 11 && pin_number_value.length === 4) {
            if (mobile_number_value && pin_number_value !== "") {
                  login_section.style.display = "none";
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
})
