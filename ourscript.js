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
	alert("Coming very soon! We're working on this!");
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
}

$(document).ready(setup);

