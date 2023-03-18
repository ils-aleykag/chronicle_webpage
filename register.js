var Firstnamerr = document.getElementById('firstname-error');
var Lastnamerr = document.getElementById('lastname-error');
var Emailerr = document.getElementById('email-error');
var Mobilerr = document.getElementById('number-error');
var Passerr = document.getElementById('password-error');
var Confirmerr = document.getElementById('confirmPass-error');

function validateFirstname(){
    var fname = document.getElementById('floatingfName').value;
	if(fname.length ==""){
		Firstnamerr.style.visibility="visible";
		Firstnamerr.innerHTML='*Please enter your first name';
		document.getElementById("floatingfName").style.borderBottom = "2px solid red";
		return false;
	}
	else{
		Firstnamerr.style.visibility="hidden";
		document.getElementById("floatingfName").style.borderBottom = "1px solid #ced4da";
	}
	return true;
}
function validateLastname(){
	var lname = document.getElementById('floatinglName').value;
	if(lname.length ==""){
		Lastnamerr.style.visibility="visible";
		Lastnamerr.innerHTML='*Please enter your name';
		document.getElementById("floatinglName").style.borderBottom = "2px solid red";
		return false;
	}
	else {
		Lastnamerr.style.visibility="hidden";
		document.getElementById("floatinglName").style.borderBottom = "1px solid #ced4da";
	}
	return true;
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
        document.getElementById("Emailjs").style.marginBottom = "1px";
    }
return true;
}

function validateMobileno(){
	 var mobile = document.getElementById('contact-number').value;
	 sessionStorage.setItem('MobileNo.', mobile);
	 var regMobile = /^\d{10}$/;
	 if(mobile.length == ""){
		Mobilerr.style.visibility="visible";
		Mobilerr.innerHTML="*Please enter your mobile number";
		document.getElementById("contact-number").style.borderBottom = "2px solid red";
		return false;
	}
	else if(!mobile.match(regMobile)){
		Mobilerr.style.visibility="visible";
		Mobilerr.innerHTML="*Please enter valid mobile number";
		document.getElementById("contact-number").style.borderBottom = "2px solid red";
		return false;
	}
	else {
		Mobilerr.style.visibility="hidden";
		document.getElementById("contact-number").style.borderBottom = "1px solid #ced4da";
	}
return true;
}
function validatePswd() {
	var password = document.getElementById('contact-password').value;
    sessionStorage.setItem('Password', password);
	var regPass = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{6,}$/ ;
    if(password.length == 0){
		Passerr.innerHTML='*Please enter your password';
        Passerr.style.visibility="visible";
        document.getElementById('contact-password').style.borderBottom = "2px solid red";
        return false;
	}
	else if(!password.match(regPass)){
		Passerr.style.visibility="visible";
		Passerr.innerHTML="*Please create a strong password";
		document.getElementById('contact-password').style.borderBottom = "2px solid red";
        return false;
	}
	else {
		Passerr.style.visibility="hidden";
		document.getElementById("contact-password").style.borderBottom = "1px solid #ced4da";
	}
	return true;
}

function matchPassword() {  
  var pw1 = document.getElementById("contact-password").value;  
  var pw2 = document.getElementById("confirm-password").value;  
  if(pw1 != pw2)  
  {   
    Confirmerr.style.visibility="visible";
	Confirmerr.innerHTML="*Password doesn't match"
	document.getElementById('confirm-password').style.borderBottom = "2px solid red";
	return false;
  } 
  else {  
	Confirmerr.style.visibility="hidden";
	document.getElementById("contact-password").style.borderBottom = "1px solid #ced4da";
  }  
} 


function validateForm(){
    if(!validateName() || validateEmail() || validateMobileno() || validatePswd() || matchPassword()){
         //loginBtn.classList.add("disable");
		 window.alert("Please enter all the details to register!");
        //Suberr.innerHTML='*Please enter details in all feilds to submit';
        return false;
    }
    else{
        window.alert("Details saved successfully!");
    }
    return true;
}


function getIp(callback) {
	fetch('https://ipinfo.io/json?token=d2cbda6c7125f3', { headers: { 'Accept': 'application/json' }})
	  .then((resp) => resp.json())
	  .catch(() => {
		return {
		  country: 'us',
		};
	  })
	  .then((resp) => callback(resp.country));
   }
   
   const phoneInputField = document.querySelector("#contact-number");
   const phoneInput = window.intlTelInput(phoneInputField, {
	initialCountry: "auto",
	separateDialCode: true,
	geoIpLookup: getIp,
     utilsScript:
       "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
   });
   function Next(){
		document.getElementById("step1").style.display = "none";
		document.getElementById("step2").style.display = "block"
		document.getElementsByClassName("step1")[0].style.color="#AFC4E1";
		document.getElementsByClassName("hrStep1")[0].style.background="#AFC4E1";
		document.getElementsByClassName("step2")[0].style.color="#386CB5";
		document.getElementsByClassName("hrstep2")[0].style.background="#386CB5";
	    }
   function prev(){
	   document.getElementById("step1").style.display = "block";
	   document.getElementById("step2").style.display = "none";
	   document.getElementsByClassName("step1")[0].style.color="#386CB5";
	   document.getElementsByClassName("hrStep1")[0].style.background="#386CB5";
	   document.getElementsByClassName("step2")[0].style.color="#AFC4E1";
	   document.getElementsByClassName("hrstep2")[0].style.background="#AFC4E1";
   }