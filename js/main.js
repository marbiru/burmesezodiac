var zodiacArray = [
"Sunday: Garuda (Mythical Bird)",
"Monday: Tiger",
"Tuesday: Lion",
"Wednesday: Elephant",
"Thursday: Rat",
"Friday: Guinea Pig",
"Saturday: Naga (Cobra)",
]

$( "#submit" ).click(function () {

	var birthday = $( "#inputDate" ).val();

	birthday = new Date(birthday);

	var dayOfBirth = birthday.getDay();

	printZodiac.innerHTML = zodiacArray[dayOfBirth];

});