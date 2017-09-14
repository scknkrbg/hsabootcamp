// object creation

var o = new Object();
o.firstName = "Jordan";
o.lastName = "Hayashi";
o.isTeachingRn = true;
o.age = 22;
o.greet = function() {console.log("hello!\n"); };




// alternative object creation

var o2 = {};

// dot notation ===  like key-value pairs

o2['firstName'] = 'Ismet';

var a = 'lastName';

o2[a] = 'Badem';

// last alternative object creation 

var o3 = {
	firstName: 'Hasan',
	lastName: 'Yaman',
	greet: function() {
		console.log('hi!');
	}
};


console.log(JSON.stringify(o3));
console.log(o3.greet());

// bind function 




