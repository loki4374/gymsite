// Script File

// Home Section Starts
var hamburgerBtn = document.querySelector('.main-navbar .hamburger-btn' );
var navList = document.querySelector('.main-navbar .nav-list');
var navListItems = document.querySelectorAll('.nav-list li a');

	hamburgerBtn.addEventListener('click', ()=>{
		hamburgerBtn.classList.toggle('active');
		navList.classList.toggle('active');
	});


for(var i = 0; i < navListItems.length; i++){
	navListItems[i].addEventListener('click', listItemClicked);
}

function listItemClicked(){
	hamburgerBtn.classList.remove('active');
	navList.classList.remove('active');
}

// Code For Navbar
var homeSection = document.querySelector('#home');
window.addEventListener('scroll', pageScrollFunction);
window.addEventListener('load', pageScrollFunction);

function pageScrollFunction(){
	if(window.scrollY > 70){
		homeSection.classList.add('active');
	}
	else{
		homeSection.classList.remove('active');
	}
}

// Home Section Ends

// BMI calculator 

function calculateBMI() {
	// Get user inputs
	const weight = parseFloat(document.getElementById("weight").value);
	const height = parseFloat(document.getElementById("height").value);
	const age = parseInt(document.getElementById("age").value);
	const sex = document.getElementById("gender").value;

	if (isNaN(weight) || isNaN(height) || isNaN(age) || !sex) {
		
		return;
	}

	// Calculate BMI
	const bmi = (weight / Math.pow( (height/100), 2 )).toFixed(1);

	// Display the result
	document.getElementById("result").innerText = `
		Your BMI is:${bmi}%
	`;
}



// alert popup script 


	

	function sendMail(event) {
		event.preventDefault();

		emailjs.init("EOIjLoRwZ6N87QjOc"); 
		var name = document.getElementById("name").value;
		var email = document.getElementById("email").value;
		var number = document.getElementById("mobile").value;
		var message = document.getElementById("message").value;

		var templateParams = {
			email: email,
			from_name: name,
			message: message,
			number: number,
		};

		const form = document.getElementById('contact-form');
		

		emailjs.send('service_q4ozvck', 'template_z825gff', templateParams)
			.then(function(response) {
				console.log('SUCCESS!', response.status, response.text);
				alert('success');
				form.reset();
			}, function(error) {
				console.log('FAILED...', error);
				alert('error');
				form.reset();
			});
	}   

	