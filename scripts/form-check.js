let form = {
    uname: document.getElementById("uname"),
    email: document.getElementById("email"),
    pass: document.getElementById("pass"),
    cpass: document.getElementById("cpass"),
    gender: document.getElementsByName("gender") //array 0, 1
};

let form_errors = {
    uname: document.getElementById("uname-error"),
    email: document.getElementById("email-error"),
    pass: document.getElementById("pass-error"),
    cpass: document.getElementById("cpass-error"),
    gender: document.getElementById("gender-error")
};

let registered_users = ['Patrik', 'Tevž', 'Jan', 'Aljoša', 'Larisa'];

form.uname.addEventListener('input', (e) => {
    unameValidation();
})

form.email.addEventListener('input', (e) => {
    emailValidation();
})

form.pass.addEventListener('input', (e) => {
    passValidation();
})

form.cpass.addEventListener('input', (e) => {
    cPassValidation();
})

form.gender[0].addEventListener('input', (e) => {
    isGenderChecked();
})

form.gender[1].addEventListener('input', (e) => {
    isGenderChecked();
})

function cPassValidation() {
    if (form.pass.value !== form.cpass.value){
        form_errors.cpass.innerText = "Gesli se ne ujemata";
        return false;
    } else {
        form_errors.cpass.innerText = "";
        return true;
    }
}

function passValidation() {
    let pass_regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/; //https://stackoverflow.com/questions/19605150/regex-for-password-must-contain-at-least-eight-characters-at-least-one-number-a
    if (form.pass.value.length < 6){
        form_errors.pass.innerText = "Prekratko geslo";
        return false;
    } else if (!pass_regex.test(form.pass.value)) {
        form_errors.pass.innerText = "Geslo mora vsebovati vsaj eno veliko črko, malo črko in številko";
        return false;
    } else {
        form_errors.pass.innerText = "";
        return true;
    }
}

function emailValidation() {
    let email_regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g; //https://regexr.com/3e48o
    if (!email_regex.test(form.email.value)){
        form_errors.email.innerText = "Neveljaven elektronski naslov";
        return false;
    } else {
        form_errors.email.innerText = "";
        return true;
    }
}

function unameValidation() {
    if (form.uname.value.length < 3 || form.uname.value.length > 20) {
        form_errors.uname.innerText = "Uporabniško ime mora vsebovati 3 do 20 znakov";
        return false;
    } else if (registered_users.includes(form.uname.value)) {
        form_errors.uname.innerText = "Uporabniško ime že obstaja";
        return false;
    } else {
        form_errors.uname.innerText = "";
        return true;
    }
}

function isGenderChecked() {
    if (!form.gender[0].checked && !form.gender[1].checked) {
        form_errors.gender.innerText = "Niste izbrali spola";
        return false;
    } else {
        form_errors.gender.innerText = "";
        return true;
    }
}

function formValidation() {
    let fields = {
        uname: unameValidation(),
        email: emailValidation(),
        pass: passValidation(),
        cpass: cPassValidation(),
        gender: isGenderChecked()
    };
    
    let areFieldsTrue = Object.values(fields).every(
        value => value === true
    );

    if (!areFieldsTrue) {
        return false;
    }
}