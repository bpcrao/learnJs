// adds numbers
function addNumbers(numberA, numberB) {
	return numberA + numberB;
}

// appends two strings
function appendStrings(stringA, stringB) {
	return stringA + stringB;
}

function get_question_object() {
	var o = {};
	o.question = "worlds largest mammal?";
	return o;
}

function Question(qnNumber, question) {
	this.qnNumber = qnNumber;
	this.question = question;
	
	Question.prototype.toString = function() {
		return "{ qnNumber:" + this.qnNumber + ", question" + this.question + "}";
	};
}

