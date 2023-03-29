var Emailerr = document.getElementById('email-error');
var Passerr = document.getElementById('password-error');
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
   // sessionStorage.setItem('EmailId', email);
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
    //sessionStorage.setItem('Password', password);
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
        return false;
         //loginBtn.classList.add("disable");
         //card.style.Height="500px";
        //Suberr.innerHTML='*Please enter details in all feilds to submit';
    }
    else{
       // window.alert("LogedIn successfully!");
        window.location.href = "dashboard.html";
    }
    return true;
}

/****cookies****/

function setCookie() {
    //fetch values from input box//
    var  email= document.getElementById("contact-email").value
    var password = document.getElementById("contact-password").value
    var rememberMe = document.getElementById("flexCheckChecked").checked

    // set cookies where path is defined//
    if(rememberMe == true){
        document.cookie = "email="+email+";path=http://127.0.0.1:5500/"
        document.cookie = "password="+password+";path=http://127.0.0.1:5500/"
        document.cookie = "rememberMe="+rememberMe+";path=http://127.0.0.1:5500/"
    }else{
        //max-age=max-age-in-seconds (e.g., 606024*365 or 31536000 for a year) ;expires=date-in-GMTString-format If neither expires nor max-age specified it will expire at the end of session.
        document.cookie = "email=;  expires=Fri, 31 Dec 9999 23:59:59 GMT; path=http://127.0.0.1:5500/;";
        document.cookie = "password=; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=http://127.0.0.1:5500/;";
        document.cookie = "rememberMe=; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=http://127.0.0.1:5500/;";
    }

}

//this will fetch data from cookies to display in inputbox//
function getCookieData() {
    console.log(document.cookie);
    var email = getCookie("email");
    var password = getCookie("password");
    var rememberMe = getCookie("rememberMe");
    document.getElementById("contact-email").value = email;
    document.getElementById("contact-password").value = password;
    document.getElementById("flexCheckChecked").checked = rememberMe;

}

//cookies save data in key-value pair in form of string, so to get indiviual field data, used getCookie function//
function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  } 

  





