"use strict";

window.addEventListener("load", () => {
  init();
});

const init = () => {
  document.querySelector(".loaderWrapper").classList.add("hideLoader");

  let inputEmail = document
    .querySelector("#contact_form")
    .querySelector("input[type=email]");
  let submitButton = document
    .querySelector("#contact_form")
    .querySelector("input[type=button]");
  let textArea = document.querySelector("#text_message");

  inputEmail.addEventListener("keyup", () => {
    let inputValid = inputEmail.checkValidity();
    if (inputValid == true) {
      document.querySelector(".error-message-email-contact").innerHTML = "";
      submitButton.disabled = true;
    }
  });

  inputEmail.addEventListener("change", () => {
    let inputValid = inputEmail.checkValidity();
    if (inputValid == false) {
      document.querySelector(".error-message-email-contact").innerHTML =
        "Invalid type of email";
    }
  });

  textArea.addEventListener("keyup", () => {
    if (textArea.checkValidity() == true) {
      document.querySelector(".error-message-text-contact").innerHTML = "";
    } else {
      document.querySelector(".error-message-text-contact").innerHTML =
        "Message can not be empty";
    }
  });

  document.querySelector("#contact_form").addEventListener("keyup", () => {
    if (
      textArea.checkValidity() == true &&
      inputEmail.checkValidity() == true
    ) {
      console.log({ textArea });
      console.log({ inputEmail });
      submitButton.disabled = false;
    } else {
      submitButton.disabled = true;
    }
  });

  submitButton.addEventListener("click", () => {
    showAlert(document.querySelector("header"), "contactFormID");
    document.querySelector("#text_message").value = "";
    inputEmail.value = "";
    document.querySelector("#contact_firstName").value = "";
    document.querySelector("#contact_lastName").value = "";
    submitButton.disabled = true;
  });
};
