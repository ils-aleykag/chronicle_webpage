var Emailerr = document.getElementById('email-error');
var Passerr = document.getElementById('password-error');
var Suberr = document.getElementById('submit-error');

function validateEmail(){
    var email = document.getElementById('contact-email').value;
    var regEmail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;  //Javascript reGex for Email Validation.
    if(email.length == 0){
        Emailerr.innerHTML='*Please enter your email address';
        return false;
    }
    if(!regEmail.test(email)){
        Emailerr.innerHTML='*Please enter valid email address';
        return false;
    }
    return true;
}
function validatePswd(){
    var password = document.getElementById('contact-password').value;
    if(password.length == 0){
        Passerr.innerHTML=' *Please enter your password';
        return false;
    }
    if(password.length < 6){
        Passerr.innerHTML='*Password should be atleast 6 character long';
        return false;
    }
return true;
}
function validateForm(){
    if(!validateEmail() || !validatePswd()){
        Suberr.innerHTML='*Please enter details in all feilds to submit';
        return false;
    }
    return true;
}
