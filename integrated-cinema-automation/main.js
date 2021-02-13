var userID = 0; // deafault id number for the user's account

function setFormMessage(formElement, type, message) {
    const messageElement = formElement.querySelector(".formMessage");

    messageElement.textContent = message;
    messageElement.classList.remove("formMessage--success", "formMessage--error");
    messageElement.classList.add(`formMessage--${type}`);
}

function setInputError(inputElement, message) {
    inputElement.classList.add("formInput--error");
    inputElement.parentElement.querySelector(".formInputErrorMessage").textContent = message;
}

function clearInputError(inputElement) {
    inputElement.classList.remove("formInput--error");
    inputElement.parentElement.querySelector(".formInputErrorMessage").textContent = "";
}

document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector("#login");
    const createAccountForm = document.querySelector("#createAccount");

    document.querySelector("#linkCreateAccount").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.add("formHidden");
        createAccountForm.classList.remove("formHidden");
    });

    document.querySelector("#linkLogin").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.remove("formHidden");
        createAccountForm.classList.add("formHidden");
    });


    document.querySelectorAll(".formInput").forEach(inputElement => {
        inputElement.addEventListener("blur", e => {

        });

        inputElement.addEventListener("input", e => {

        });
    });
});

function userExists(){
  //clearInputError(inputElement);
  //userID = 0;
  var email = document.getElementByID("email").value;
  var password = document.getElementByID("password").value;
  // search the data base for a matching username and password.
  if (userID == 0) {
      setFormMessage(loginForm, "error", "Invalid email/password");
  }
}
