/**
 * 
 */
// Suite
describe("Inheritance", function() {

	// Spec (or test)	student = new Student()
	//expect(student.getType()).toEqual("student");
	it("Invoke base class person method", function() {
		person = new Person();
		expect(person.getType()).toEqual("person");
	});

	it("Invoke derived class student method", function() {
		student = new Student();
		expect(student.getType()).toEqual("student");
	});
	
	it("check derived class student calls supers method", function() {
		student = new Student("purna");
		expect(student.sayHello()).toEqual("Hello!");
	});
	
	it("check derived class student calls supers name", function() {
		student = new Student("purna");
		expect(student.name).toEqual("purna");
	});
	
});