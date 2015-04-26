function when_click2() {
	location.replace("index2.html");
}

function when_click1() {
	location.replace("index.html");
}

function when_clicksignup() {
	location.replace("index3.html");
}

function when_clickgetstarted() {
	location.replace("menu1.html");
}

function when_clickoption() {
	location.replace("menu2.html");
}

function when_clickoption2() {
	location.replace("menu3.html");
}

function when_clickback1() {
	location.replace("menu1.html");
}

function when_clickback2() {
	location.replace("menu2.html");
}

function setup() {
	var click2 = $("#index2");
	$(click2).click(when_click2);
	var click1 = $(".taketoindex");
	$(click1).click(when_click1);	
	var signupb = $(".signup");
	$(signupb).click(when_clicksignup);
	var getstartedb = $("#getstarted");
	$(getstartedb).click(when_clickgetstarted);
	var optionb = $(".option");
	$(optionb).click(when_clickoption);
	var back1 = $("#back1");
	$(back1).click(when_clickback1);
	var back2 = $("#back2");
	$(back2).click(when_clickback2);
	var option2 = $(".option2");
	$(option2).click(when_clickoption2);
}

$(document).ready(setup);

