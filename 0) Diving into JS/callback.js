// simulate fetching data from a db
function getUserFromDatabase(callback){
	setTimeout(()=>callback({firstName: 'Jordan', lastName: 'Hayashi'}),1000);

}

function greetUser() {
	getUserFromDatabase(function (userObject) {
		console.log('Hi! ' + userObject.firstName);
	});
}

greetUser(); 