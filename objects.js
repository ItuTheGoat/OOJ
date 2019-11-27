// object literals
// var userOne = {
// 	email: "naruto@konoha.com",
// 	name: "Naruto",
// 	login() {
// 		// ES6 method
// 		console.log(this.email, "has logged in");
// 	},

// 	logout: function() {
// 		// ES5 method
// 		console.log(this.email, "has logged out");
// 	}
// };

// console.log(userOne.name);

// userOne.age = 3 to add onto the object literal.
// var prop = age
// userOne.prop does the same thing and is useful for variables

// Always make class start with a capital letter by convention
// class User {
// 	// the constructer created properties of the user class
// 	constructor(email, name) {
// 		this.email = email;
// 		this.name = name;
// 		this.score = 0;
// 	}
// 	// Calling a method inside the user class
// 	login() {
// 		console.log(this.email, "Just logged in");
// 		return this;
// 	}

// 	logout() {
// 		console.log(this.email, "Just logged out");
// 		return this;
// 	}

// 	updateScore() {
// 		this.score++;
// 		console.log(this.email, "score is now", this.score);
// 		return this; // allows method chaining.
// 	}
// }

// Extends allows us to inherit from another class
// class Admin extends User {
// 	deletUser(user) {
// 		users = users.filter(u => {
// 			return u.email != user.email;
// 		});
// 	}
// }

// Prototypes
function User(email, name) {
	this.email = email;
	this.name = name;
	this.online = false;
}

User.prototype.login = function() {
	this.online = true;
	console.log(this.email, "Has logged in");
};

User.prototype.logout = function() {
	this.online = false;
	console.log(this.email, "Has logged out");
};

function Admin(...args) {
	User.apply(this, args);
	this.role = "super admin";
}

// Binding the user prototype to the admin.
Admin.prototype = Object.create(User.prototype);

// Admin's own prototype
// this causes 'Prototype Chain'
Admin.prototype.deleteUser = function(u) {
	users = users.filter(user => {
		return user.email != u.email;
	});
};

var userOne = new User("naruto@konoha.com", "Naruto");
var userTwo = new User("superman@metroplois.com", "Clark");
var admin = new Admin("itu@admin.com", "Itu");

var users = [userOne, userTwo, admin];

admin.deleteUser(users[1]);

console.log(users);

// userOne.login();
// userTwo.logout();

// var users = [userOne, userTwo, admin];

// admin.deletUser(userOne);
// console.log(users);

// method chaining
// userOne
// 	.updateScore()
// 	.updateScore()
// 	.login();

// the 'new' keyword
// - creates a new empty object {}
// - sets the value of 'this' to be a the new empty object
// - calls the constructor method
