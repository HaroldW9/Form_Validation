const form = document.querySelector("#container");
const username = document.querySelector("#txtUserName");
const email = document.querySelector("#txtEmail");
const password = document.querySelector("#txtPassword");
const verPassword = document.querySelector("#txtVerPassword");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  
  validateForm();
});

function validateForm() {
  //check if username is blank and correct character amount
  if(username.value.trim()=="") {
    onError(username, "Username cannot be blank");
  } else if (username.value.trim().length <5 || username.value.trim().length >15) {
    onError(username, "Name must be min 5 and max 15 characters");
  } else {
    onSuccess(username);
  }

  //check if email is blank and valid
  if(email.value.trim()=="") {
    onError(email, "Email cannot be blank");
  } else if (isEmail(email.value)) {
    onSuccess(email);
  } else {
    onError(email, "Email is not valid");
  }

  //check if password is blank and correct character amount
  if(password.value.trim()=="") {
    onError(password, "Password cannot be blank");
  } else if (password.value.trim().length <6 || password.value.trim().length >20) {
    onError(password, "Password must be min 6 and max 20 characters");
  } else {
    onSuccess(password);
  }

  //check if verPassword is blank and matches password
  if(verPassword.value.trim()=="") {
    onError(verPassword, "Verify Password cannot be blank");
  } else if (verPassword.value !== password.value) {
    onError(verPassword, "Password does not match");
  } else {
    onSuccess(verPassword);
  }
}

function onError(element, errorMessage) {
  const parent = element.parentElement;
  if (parent.classList.contains("success")) {
      parent.classList.remove("success");
  }
  parent.classList.add("error");
  const paragraph = parent.querySelector("small");
  paragraph.textContent = errorMessage;
}

function onSuccess(element) {
  const parent = element.parentElement;
  if (parent.classList.contains("error")) {
      parent.classList.remove("error");
  }
  parent.classList.add("success");
}

function isEmail(email) {
  return /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(email);
}