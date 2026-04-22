const student = {
	name: "arun kumar",
	age: 22,
	greet: () => {
		// console.log(name + age); name and age are defined but they are exist so to access them we use "this" keywords
		console.log(this.name + this.age); // "this" for arrow fn is pointing to window > document
	},
	greet2: function () {
		console.log(this.name + this.age); // "this" for named function is its obj
	},
	greet3() {
		console.log(this.name);
	},

	timer: function(){
        setTimeout(() => {
            console.log(this.name);
        }, 2000)
    }
    
};
console.log(student.greet2());
console.log(student.greet3());
console.log(student.timer());

// setInterval(() => {
//     console.log("arun",this);
// }, 2000);

// setTimeout(() => {
// 	console.log(Date.now() + this);
// }, 2000);
