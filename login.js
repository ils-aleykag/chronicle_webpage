var Emailerr = document.getElementById('email-error');
var Passerr = document.getElementById('password-error');
var Suberr = document.getElementById('submit-error');
var loginBtn = document.getElementById('loginbtn');


function validateEmail(){
    var email = document.getElementById('contact-email').value;
    var regEmail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;  //Javascript reGex for Email Validation.
    if(email.length == ""){
        Emailerr.innerHTML='*Please enter your email address';
        card.style.maxHeight="482px";
        card.style.Height="fit-content";
        return false;
    }
    else if(!regEmail.test(email)){
        Emailerr.innerHTML='*Please enter valid email address';
        card.style.Height="482px";
        return false;
    }
    else {
        Emailerr.style.visibility="hidden";
        card.style.Height="450px";
    }
return true;
}
function validatePswd(){
    var password = document.getElementById('contact-password').value;
    console.log(password);
    if(password.length == 0){
        Passerr.innerHTML=' *Please enter your password';
        return false;
    }
    else if(password!="aleyka") {
        Passerr.innerHTML='*Password is not valid, enter correct password!';
        return false;
    }
    else if(password == "aleyka") {
        Passerr.style.visibility="hidden";
    }

return true;
}
function validateForm(){
    if(!validateEmail() || !validatePswd()){
         loginBtn.classList.add("disable");
         card.style.Height="500px";
        //Suberr.innerHTML='*Please enter details in all feilds to submit';
        return false;
    }
    else{
        window.alert("Details saved successfully!");
    }
    return true;
}

/*function getVisibility(){
    var getPassword = document.getElementById("contact-password");
    console.log(getPassword.value);
    if (getPassword.type === "password") {  
        getPassword.type = "text";  
    } else {  
        getPassword.type = "password";  
    }  
}
function registerNow(){
    window.location = "register.html";
}

function errorMessage() {
    var error = document.getElementById("password-error");
    if (isNaN(document.getElementById("contact-password").value))
    {
       error.textContent = "*Please enter password";
        error.style.color = "red";
    }
    else if(document.getElementById("contact-password")=="ilead"){
        error.textContent = "*Please enter a valid password";
        error.style.color = "red";
    }
    else {
        error.textContent = "";
    }
}*/