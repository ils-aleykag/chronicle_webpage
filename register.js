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