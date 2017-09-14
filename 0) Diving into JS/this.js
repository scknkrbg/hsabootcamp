function whatIsThis() {
	console.log(this);
}

var person = {
	firstName: 'Jordan',
	lastName: 'Hayashi',
	whatIsThis: function(){console.log(this);},
	greet: function(whatIsToSay) {console.log(whatIsToSay + ', ' + this.firstName);}
}

var student = {
	firstName: 'John',
	lastName: 'Doe'
};


// bind is to creata a new function 
// whatIsThis();
var studentGreet = person.greet.bind(student, 'hello papa!');
studentGreet('hi bind!');
studentGreet();

// call and apply to use one time 
// apply accepts arguments as array, call as usual

person.greet.apply(student, ['apply arr hi!']);
person.greet.call(student, 'call hi!');

var newPerson = {
	firstName: 'Jane',
	lastName: 'Doe',
	greet: () => console.log('hi, ' + this.firstName),
}

newPerson.greet('hi ulan!');

// lexical scoping
console.log('\nlexical scoping');
console.log('-----------------');

var x = 42;

function setx(){
	x = 50;
}

setx();

function printx(){
	console.log(x);
}

printx();


// map, filter and reduce functions
console.log('\nmap() function');
console.log('-----------------');

var x = [0,1,2,3];
console.log(x.map(x=> x+1));


console.log('\nfilter() function');
console.log('-----------------');

console.log(x.filter(x=> x%2==0));
console.log(x);