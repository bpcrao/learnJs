// Suite
describe("Data Types", function() {

	// Spec (or test)
	it("Test add numbers", function() {
		// Expectation, how we express what we expect should happen.
		expect(addNumbers(5, 6)).toEqual(11);
	});

	it("Test append strings", function() {
		expect(appendStrings("hello", "world")).toEqual("helloworld");
	});

	it("Test Boolean", function() {
		expect(true === true);
	});

	it("Test Question Object", function() {
		var obj = get_question_object();
		expect(obj.question).toEqual('worlds largest mammal?');
	});

	it("Test custom data type Question", function() {
		qnNumber = 1;
		question = "who is the richest man";
		var obj = new Question(qnNumber, question);
		expect(obj.toString()).toEqual(
				"{ qnNumber:" + qnNumber + ", question" + question + "}");
		
		qnNumber = 2;
		question = "who holds the fastest 50 in cricket";
		
		var obj = new Question(qnNumber, question);
		expect(obj.toString()).toEqual(
				"{ qnNumber:" + qnNumber + ", question" + question + "}");
	});

});