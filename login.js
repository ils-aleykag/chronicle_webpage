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

function changeImage() {
    var image = document.getElementById('eye-img');
    if (image.src.match("eye-closed")) {
        image.src = "img/eye.png";
    }
    else {
        image.src = "img/eye-closed.png";
    }
}



function validateEmail(){
    var email = document.getElementById('contact-email').value;
    sessionStorage.setItem('EmailId', email);
    var regEmail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;  //Javascript reGex for Email Validation.
    if(email.length == ""){
        Emailerr.style.visibility="visible";
        Emailerr.innerHTML='*Please enter your email address';
        document.getElementById("contact-email").style.borderBottom = "2px solid red";
        return false;
    }
    else if(!regEmail.test(email)){
        Emailerr.style.visibility="visible";
        Emailerr.innerHTML='*Please enter valid email address';
        document.getElementById("contact-email").style.borderBottom = "2px solid red";
        return false;
    }
    else {
        Emailerr.style.visibility="hidden";
        document.getElementById("contact-email").style.borderBottom = "1px solid #ced4da";
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
        document.getElementById("contact-email").style.display="block";
        return false;
    }
    else if(password!="Aleyka@123") {
        Passerr.innerHTML='*Password is not valid, enter correct password!';
        Passerr.style.visibility="visible";
        document.getElementById('contact-password').style.borderBottom = "2px solid red";
        return false;
    }
    else if(password == "Aleyka@123") {
        document.getElementById('contact-password').style.borderBottom = "1px solid #ced4da";
        Passerr.style.visibility="hidden";
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
        window.alert("LogedIn successfully!");
    }
    return true;
}




