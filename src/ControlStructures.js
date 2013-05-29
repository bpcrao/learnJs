//appends two strings
function correct_answer(answer) {
	if (answer === "Yes") {
		return true;
	} else {
		return false;
	}
}

//calculates sum of n numbers
function calculate_sum(number) {
	sum = 0;
	for ( var index = 0; index < number; index++) {
		sum = sum + index;
	}
	return sum;

}