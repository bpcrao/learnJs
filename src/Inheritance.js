function Person(name) {
	this.name = name;
}

Person.prototype.getType = function() {
	return "person";
};

Person.prototype.sayHello = function() {
	return "Hello!";
};

//student class
function Student(name) {
	Person.call(this,name);
}

//inherit Person
Student.prototype = new Person();
 
// correct the constructor pointer because it points to Person
Student.prototype.constructor = Student;

Student.prototype.getType = function() {
	return "student";
};