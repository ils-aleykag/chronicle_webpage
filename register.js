var Firstnamerr = document.getElementById('firstname-error');
var Lastnamerr = document.getElementById('lastname-error');
var Emailerr = document.getElementById('email-error');
var Mobilerr = document.getElementById('number-error');
var Passerr = document.getElementById('password-error');
var Confirmerr = document.getElementById('confirmPass-error');


function validateFirstname(){
    var fname = document.getElementById('floatingfName').value;
	window.localStorage.setItem('firstname', fname);
	if(fname.length ==""){
		Firstnamerr.style.visibility="visible";
		Firstnamerr.innerHTML='*Please enter firstname';
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
	window.localStorage.setItem('lastname', lname);
	if(lname.length ==""){
		Lastnamerr.style.visibility="visible";
		Lastnamerr.innerHTML='*Please enter lastname';
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
	window.localStorage.setItem('emailid', email);
    //sessionStorage.setItem('EmailId', email);
    var regEmail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;  //Javascript reGex for Email Validation.
    if(email.length == ""){
        Emailerr.style.visibility="visible";
        Emailerr.innerHTML='*Please enter email address';
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

function validateMobileno(){
	 var mobile = document.getElementById('contact-number').value;
	 sessionStorage.setItem('MobileNo.', mobile);
	 var regMobile = /^\d{10}$/;
	 if(mobile.length == ""){
		Mobilerr.style.visibility="visible";
		Mobilerr.innerHTML="*Please enter mobile number";
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
	window.localStorage.setItem('Password', password);
    sessionStorage.setItem('Password', password);
	var regPass = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{6,}$/ ;
    if(password.length == 0){
		Passerr.innerHTML='*Please enter password';
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
  if(pw2.length == 0){
	Confirmerr.style.visibility="visible";
	Confirmerr.innerHTML="*Please enter password"
	document.getElementById('confirm-password').style.borderBottom = "2px solid red";
	return false;
  }
  else if(pw1 != pw2)  
  {   
    Confirmerr.style.visibility="visible";
	Confirmerr.innerHTML="*Password doesn't match"
	document.getElementById('confirm-password').style.borderBottom = "2px solid red";
	return false;
  } 
  else {  
	Confirmerr.style.visibility="hidden";
	document.getElementById("confirm-password").style.borderBottom = "1px solid #ced4da";
	return true;
  }  
} 


function validateForm(){
	 validateFirstname(); validateLastname(); validateEmail(); validateMobileno(); validatePswd(); matchPassword();
    if(!(validateFirstname() &&  validateLastname() && validateEmail() && validateMobileno() &&  validatePswd() && matchPassword())){
         //loginBtn.classList.add("disable");
		 //window.alert("Please enter all the details to register!");
        //Suberr.innerHTML='*Please enter details in all feilds to submit';
        return false;
    }
    else{
		Next();
    }
    return true;
}


/****** country code *******/
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

   const togglePass = document.querySelector('#eyes-img');
   const Confirmpassword = document.querySelector('#confirm-password');
   togglePass.addEventListener('click', function (e) {
	   // toggle the type attribute
	   const type = Confirmpassword.getAttribute('type') === 'password' ? 'text' : 'password';
	   Confirmpassword.setAttribute('type', type);
	   
   });
   
   function ConfirmchangeImage() {
	   var image = document.getElementById('eyes-img');
	   if (image.src.match("eye-closed")) {
		   image.src = "img/eye.png";
	   }
	   else {
		   image.src = "img/eye-closed.png";
	   }
   }


/**** next-prev button *****/
   function Next(){
	    document.getElementById("card-width").style.width = "73%"
		document.getElementById("step1").style.display = "none";
		document.getElementById("step2").style.display = "block"
		document.getElementsByClassName("step1")[0].style.color="#AFC4E1";
		document.getElementsByClassName("hrStep1")[0].style.background="#AFC4E1";
		document.getElementsByClassName("step2")[0].style.color="#386CB5";
		document.getElementsByClassName("hrstep2")[0].style.background="#386CB5";
	    }
   function prev(){
	   document.getElementById("card-width").style.width = "67%"
	   document.getElementById("step1").style.display = "block";
	   document.getElementById("step2").style.display = "none";
	   document.getElementsByClassName("step1")[0].style.color="#386CB5";
	   document.getElementsByClassName("hrStep1")[0].style.background="#386CB5";
	   document.getElementsByClassName("step2")[0].style.color="#AFC4E1";
	   document.getElementsByClassName("hrstep2")[0].style.background="#AFC4E1";
   }


   /***validation for step2 ****/


   var Schlerr = document.getElementById('school-error');
   var Staterr = document.getElementById('state-error');
   var Cityerr = document.getElementById('city-error');
   var Countryerr = document.getElementById('county-error');
   var Ziperr = document.getElementById('zipcode-error');
  

	function schlvalidate() {
	  var schlName = document.getElementById('schoolName').value;
	   if(schlName.length ==""){
		 Schlerr.style.visibility="visible";
		 Schlerr.innerHTML='*Please enter school name';
		 document.getElementById("schoolName").style.borderBottom = "2px solid red";
		 return false;
	  }
	  else {
		 Schlerr.style.visibility="hidden";
		 document.getElementById("schoolName").style.borderBottom = "1px solid #ced4da";
	  }
	  return true;
	}

	function stateValidate() {
	  var stateName = document.getElementById('stateName').value;
	  if(stateName.length ==""){
		Staterr.style.visibility="visible";
		Staterr.innerHTML='*Please enter statename';
		document.getElementById("stateName").style.borderBottom = "2px solid red";
		return false;
	  }
	  else {
		Staterr.style.visibility="hidden";
		document.getElementById("stateName").style.borderBottom = "1px solid #ced4da";
	  }
	  return true;
	}

	function cityValidate() {
	  var cityName = document.getElementById('cityName').value;
	  if(cityName.length ==""){
		Cityerr.style.visibility="visible";
		Cityerr.innerHTML='*Please enter city name';
		document.getElementById("cityName").style.borderBottom = "2px solid red";
		return false;
	  }
	  else {
		Cityerr.style.visibility="hidden";
		document.getElementById("cityName").style.borderBottom = "1px solid #ced4da";
	  }
	  return true;
	}

	function countryValidate() {
	  console.log('countryName');
	  var countryName = document.getElementById('countryName').value;
	  if(countryName.length ==""){
		Countryerr.style.visibility="visible";
		Countryerr.innerHTML='*Please enter country name';
		document.getElementById("countryName").style.borderBottom = "2px solid red";
		return false;
	  }
	  else {
		Countryerr.style.visibility="hidden";
		document.getElementById("countryName").style.borderBottom = "1px solid #ced4da";
	  }
	  return true;
	}

	function zipcodeValidate(event) {
	  console.log('zipcode');
	  var zipcode = document.getElementById('zipcode').value;
	  if(zipcode.length ==""){
		Ziperr.style.visibility="visible";
		Ziperr.innerHTML='*Please enter zipcode, sholud be number only';
		document.getElementById("zipcode").style.borderBottom = "2px solid red";
		return false;
	  }
	  else {
		Ziperr.style.visibility="hidden";
		document.getElementById("zipcode").style.borderBottom = "1px solid #ced4da";
	  }
	  return true;
	}
  


/**zipcode **/
function onlyNumberKey(evt) {            
	// Only ASCII character in that range allowed
	var ASCIICode = (evt.which) ? evt.which : evt.keyCode
	if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57))
		return false;
	return true;
}

function alphaOnly(event) {
	var key = event.keyCode;
	return ((key >= 65 && key <= 90) || key == 8);
  };

/**Checkbox Validation***/
function policyChecked() {
	  // get the checkbox element from the DOM using the getElementId function
	  let checkbox=document.getElementById("flexCheckChecked");
	  // get the text element to display the status of the checkbox
	  let checkboxErr=document.getElementById("checkbox-error");
	  // use the checked property to check if the checkbox is checked
	  if (checkbox.checked){
		  // display result by assigning to innerHTML of the text element.
		  checkboxErr.style.visibility="hidden";
		  checkboxErr.innerHTML="Thank you for accepting the agreement";
		  return true;
	  }
	  else{
		checkboxErr.style.visibility="visible";
		checkboxErr.innerHTML = "*Please accept the polices to proceed";
		return false;
	  }
}

function step2Validation() {
	schlvalidate(); stateValidate(); cityValidate(); countryValidate(); policyChecked(); zipcodeValidate();
	if(!(schlvalidate() &&  stateValidate() && cityValidate() && countryValidate() &&  policyChecked() && zipcodeValidate())){
		//loginBtn.classList.add("disable");
		//window.alert("Please enter all the details to register!");
	   //Suberr.innerHTML='*Please enter details in all feilds to submit';
	   return false;
   }
   else{
	   window.alert("Your account is created, you can now login!");
	   window.location.href="login.html";
   }
}