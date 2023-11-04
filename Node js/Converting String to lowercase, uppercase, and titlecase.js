var person = "Hello Eric, would you like to learn some Python today?";
document.write(person.toLowerCase()); // Lower Case
document.write("<br> <br>");
document.write(person.toUpperCase()); // Upper Case
document.write("<br> <br>");
function sentenceCase(str) {
	if ((str === null) || (str === ''))
		return false;
	else
		str = str.toString();

	return str.replace(/\w\S*/g,
		function (txt) {
			return txt.charAt(0).toUpperCase() +
				txt.substr(1).toLowerCase();
		});
}

document.write(sentenceCase(person)); // Sentence Case


Output:

LowerCase:
           hello eric, would you like to learn some python today?
UpperCase: 
           HELLO ERIC, WOULD YOU LIKE TO LEARN SOME PYTHON TODAY?
TitleCase:
          Hello Eric, Would You Like To Learn Some Python Today?
