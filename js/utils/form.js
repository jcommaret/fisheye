/* form elements selector */
let form = document.querySelector('#message-to-send');

let firstEl = document.querySelector('#firstname');
let lastEl = document.querySelector('#lastname');
let emailEl = document.querySelector('#email');
let messageEl = document.querySelector('#message');
// Check if required // 
let isRequired = value => value === '' ? false : true;
// FirstName
let isFirstNameValid = (firstname) => {
    let regex = /^(?=.{2,})/;
    return regex.test(firstname);
};

let checkFirstName = () => {
    let valid = false;
    let firstname = firstEl.value.trim();
    if (!isRequired(firstname)) {
        showError(firstEl, 'Votre prénom ne doit pas être vide.');
    } else if (!isFirstNameValid(firstname)) {
        showError(firstEl, 'Veuillez entrer 2 caractères ou plus pour le champ du prénom.')
    } else {
        showSuccess(firstEl);
    valid = true;
    }
  return valid;
};

// Last Name
let isLastNameValid = (lastname) => {
  let regex = /^(?=.{2,})/;
  return regex.test(lastname);
};
let checkLastName = () => {
  let valid = false;
  let lastname = lastEl.value.trim();
  if (!isRequired(lastname)) {
        showError(lastEl, 'Votre nom ne doit pas être vide.');
  } else if (!isLastNameValid(lastname)) {
        showError(lastEl, 'Veuillez entrer 2 caractères ou plus pour le champ du nom.')
  } else {
        showSuccess(lastEl);
    valid = true;
  }
  return valid;
};

// Email
let isEmailValid = (email) => {
    let regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(email);
};
let checkEmail = () => {
    let valid = false;
    let email = emailEl.value.trim();
    if (!isRequired(email)) {
        showError(emailEl, 'Votre email ne peut pas être vide.');
    } else if (!isEmailValid(email)) {
        showError(emailEl, 'Votre email n\'est pas valide.')
    } else {
        showSuccess(emailEl);
        valid = true;
    }
    return valid;
};

// Presente le message d'erreur
let showError = (input, message) => {
    let formField = input.parentElement;
    formField.classList.remove('success');
    formField.classList.add('error');
    let error = formField.querySelector('small');
    error.textContent = message;
};

// Ne presente pas le message d'erreur
let showSuccess = (input) => {
    let formField = input.parentElement;
    formField.classList.remove('error');
    formField.classList.add('success');
    let error = formField.querySelector('small');
    error.textContent = '';
}

// Soumission du formulaire
form.addEventListener('submit', function (e) {
    e.preventDefault();
    // Validation des champs
    let isEmailValid = checkEmail(),
        isFirstNameValid = checkFirstName(),
        isLastNameValid = checkLastName();
        
    // Validation du formulaire    
    let isFormValid = 
        isEmailValid && 
        isFirstNameValid && 
        isLastNameValid 
        // si le formulaire est valide, crée un utilisateur, et présente le message de remerciement. 
    if (isFormValid) {
        createUser();
    }
});

form.addEventListener('input',function (e) {
    switch (e.target.id) {
        case 'firstname' :   
            checkFirstName();
            break;
        case 'lastname' :    
            checkLastName();
            break;
        case 'email': 
            checkEmail();
            break;
        default : 
            break;          
    }
});

function createUser() {
    // creation de la classe
    class User {
        constructor(firstname, lastname, emailEl, messageEl)  {
            this.firstname = firstname.value,
            this.lastname = lastname.value,
            this.email = emailEl.value,
            this.message = messageEl.value
        }
    }
    // creation du nouvel utilisateur
    const newContact = new User(firstname, lastname, email, message );
    Array.prototype.push.apply(newContact);
    console.log(newContact);
};