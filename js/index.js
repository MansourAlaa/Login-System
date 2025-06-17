var signupName = document.getElementById('signupName');
var signupEmail = document.getElementById('signupEmail');
var signupPassword = document.getElementById('signupPassword');
var signinEmail = document.getElementById('signinEmail');
var signinPassword = document.getElementById('signinPassword');


var signupContainer = [];


if (localStorage.getItem('account') !== null) {
  signupContainer = JSON.parse(localStorage.getItem('account'));
}


function signup() {

  if (signupName.value === '' || signupEmail.value === '' || signupPassword.value === '') {
    document.getElementById('required').classList.replace('d-none', 'd-block');
    document.getElementById('success').classList.replace('d-block', 'd-none');
    
  }


  var newAccount = {
    name: signupName.value,
    email: signupEmail.value,
    password: signupPassword.value
  };

  signupContainer.push(newAccount);
  localStorage.setItem('account', JSON.stringify(signupContainer));


  document.getElementById('success').classList.replace('d-none', 'd-block');
  document.getElementById('required').classList.replace('d-block', 'd-none');

  signupName.value = '';
  signupEmail.value = '';
  signupPassword.value = '';
}

function login() {
  let isFound = false;

  if (signupContainer.length === 0) {
    document.getElementById('notfound').classList.replace('d-none', 'd-block');
    return;
  }

  for (var i = 0; i < signupContainer.length; i++) {
    if (
      signupContainer[i].email === signinEmail.value &&
      signupContainer[i].password === signinPassword.value
    ) {
     
      localStorage.setItem('loggedInName', signupContainer[i].name);
      isFound = true;
    }
  }

  if (isFound) {
    document.getElementById('incorrect').classList.replace('d-block', 'd-none');
    window.location.href = "home.html";
  } else {
    document.getElementById('incorrect').classList.replace('d-none', 'd-block');
  }
}
