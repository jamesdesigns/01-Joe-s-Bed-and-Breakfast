// JavaScript Document

// Create today's date
var d = new Date();
document.getElementById("date").innerHTML = "Today is " + d.toLocaleDateString();

// Create Prompt Box where users enter their name. Once they enter their name a Welcome message is placed in the HTML document
var person = prompt("What is your name");
if (person != null) {
	document.getElementById("demo").innerHTML = "Hello " + person + ", Welcome to the finest bed & breakfast in the West.";
}

// Declare variables for the output
var company;
var slogan;
var pageName;

// Assign variables the Output display 
company = 'White River Lodge';
slogan = 'The most scenic resort in the West.';
pageName = 'Welcome to the White River Lodge';


var elCompany = document.getElementById('company');
elCompany.textContent = company;
var elSlogan = document.getElementById('slogan');
elSlogan.textContent = slogan;
var elWelcome = document.getElementById('pageName');
elWelcome.textContent = pageName;

