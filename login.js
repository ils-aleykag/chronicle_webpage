var Emailerr = document.getElementById('email-error');
var Passerr = document.getElementById('password-error');
var Suberr = document.getElementById('submit-error');
//var loginBtn = document.getElementById('loginbtn');



const togglePassword = document.querySelector('#eye-img');
const password = document.querySelector('#contact-password');
togglePassword.addEventListener('click', function (e) {
    // toggle the type attribute
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
});


function validateEmail(){
    var email = document.getElementById('contact-email').value;
    sessionStorage.setItem('EmailId', email);
    var regEmail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;  //Javascript reGex for Email Validation.
    if(email.length == ""){
        Emailerr.style.visibility="visible";
        Emailerr.innerHTML='*Please enter your email address';
        document.getElementById("contact-email").style.borderBottom = "2px solid red";
        document.getElementById("regt").style.marginTop = "0px";
        return false;
    }
    else if(!regEmail.test(email)){
        Emailerr.style.visibility="visible";
        Emailerr.innerHTML='*Please enter valid email address';
        document.getElementById("contact-email").style.borderBottom = "2px solid red";
        document.getElementById("regt").style.marginTop = "0px";
        return false;
    }
    else {
        Emailerr.style.visibility="hidden";
        document.getElementById("contact-email").style.borderBottom = "1px solid #ced4da";
        document.getElementById("Emailjs").style.marginBottom = "1px";
    }
return true;
}
function validatePswd(){
    var password = document.getElementById('contact-password').value;
    sessionStorage.setItem('Password', password);
    console.log(password);
    if(password.length == 0){
        Passerr.innerHTML=' *Please enter your password';
        Passerr.style.visibility="visible";
        document.getElementById('contact-password').style.borderBottom = "2px solid red";
        document.getElementById("regt").style.marginTop = "3px";
        return false;
    }
    else if(password!="aleyka") {
        Passerr.innerHTML='*Password is not valid, enter correct password!';
        Passerr.style.visibility="visible";
        document.getElementById('contact-password').style.borderBottom = "2px solid red";
        document.getElementById("regt").style.marginTop = "3px";
        return false;
    }
    else if(password == "aleyka") {
        Passerr.innerHTML=' *Please enter your password';
        document.getElementById('contact-password').style.borderBottom = "1px solid #ced4da";
        document.getElementById('RemmJs').style.marginTop = "4px";
    }

return true;
}
function validateForm(){
    if(!validateEmail() || !validatePswd()){
         //loginBtn.classList.add("disable");
         card.style.Height="500px";
        //Suberr.innerHTML='*Please enter details in all feilds to submit';
        return false;
    }
    else{
        window.alert("Details saved successfully!");
    }
    return true;
}




