// Suite
describe("Data Types", function() {

	// Spec (or test)
	it("Test add numbers", function() {
		// Expectation, how we express what we expect should happen.
		expect(addNumbers(5,6)).toEqual(11);
	});
	
	it("Test append strings",function(){
		expect(appendStrings("hello","world")).toEqual("helloworld");
	});

	it("Test Boolean",function(){
		expect(true===true);
	});
	
	it("Test Question Object",function(){
		obj = get_question_object();
		expect(obj.question).toEqual('worlds largest mammal?');
	});
	
});