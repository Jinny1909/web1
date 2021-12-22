// 클래스 (생성자 함수)
//객체지향 프로그래밍 (OOP - Object Orientend Programming)
/*
var superMan = {
	name: "슈퍼맨",
	age: 30,
	gender: "남성".,
	skills:["레이저빔", "공중부양","파워"]
}


var spiderMan = {
	name: "스파이더맨",
	age: 18,
	gender: "남성",
	skills: ["거미줄", "벽타기", "스파이더센서"]
}

var blackWidow = {
	name: "블랙위도우",
	age: 34,
	gender: "여성",
	siklls:["격투", "암살", "침입"]
}
*/


// 생성자 함수 : 붕어빵 틀
/*
function Heroes(name, age) {
	this.name = name;
	this.age = age;
}

// 인스턴스 : 붕어빵
var superMan = new Heroes('슈퍼맨', 30);
var blackWidow = new Heroes('블랙위도우', 34);

console.log(superMan);
console.log(blackWidow);
*/





/*
function Person(firstName, lastName) {
	this.firstName = firstName;
	this.lastName = lastName;

	this.fullName = function() {
		console.log(this.firstName + " " + this.lastName);
	}
}

var kim = new Person("Insweon", "Kim");
var park = new Person("David", "Park");
var choi = new Person("Lee", "Choi");

console.log(kim);
console.log(park);
console.log(choi);

kim.fullName();
park.fullName();
choi.fullName();
*/







// 프로토타입
// Person 생성자 함수를 만들 때 Person.prototype 객체를 같이 생성한다.
// Person.prototype : 조상 

/*
function Person(firstName, lastName) {
	this.firstName = firstName;
	this.lastName = lastName;
}

Person.prototype.fullName = function() {
	console.log(this.firstName + " " + this.lastName);
}

// 인스턴스 : 후손
var kim = new Person("Insweon", "Kim");
var park = new Person("David", "Park");

kim.fullName();
park.fullName();

console.log(kim);
console.log(park);
*/



// __proto__
// var arr1 = [];
// var str1 = "Hello";
// var func1 = function() {

// }

/*
var arr2 = new Array();
var str2 = new String("Nice");
var func2 = new Function("x, y", "return x * y");


console.dir(arr2);
console.dir(str2);
console.dir(func2);
*/

/*
var person = new Object();
console.log(person);

person.name = "sojin";
person.sayHi = function() {
	console.log("hi");
}

console.log(person);
console.log(person.__proto__ === Object.prototype);

*/

/*
var arr2 = new Array();
var str2 = new String("Nice");
var func2 = new Function("x, y", "return x * y");

console.log(arr2.__proto__ === Array.prototype);
console.log(str2.__proto__ === String.prototype);
console.log(func2.__proto__ === Function.prototype);


console.log(String.prototype.__proto__ === Object.prototype);
console.log(Array.prototype.__proto__ === Object.prototype);
console.log(Function.prototype.__proto__ === Object.prototype);

console.dir(func2);
*/






//constructor : 생성자 함수는 누구인지를 찾을수 있는 property
/*
var str11 = new String("Nice");

console.dir(str11);
console.dir(str11.constructor);
console.log(str11.constructor === String);
console.log(String.prototype.constructor === String);

var arr11 = new Array();

console.log(arr11.constructor === Array);
console.log(Array.prototype.constructor === Array);


var func11 = new Function();

console.log(func11.constructor === Function);
console.log(Function.prototype.constructor === Function);
*/


/*
var str21 = new String("AAAA");
var arr21 = new Array();

console.log(String.__proto__ === Function.prototype);
console.log(Array.__proto__ === Function.prototype);

console.log(Function.prototype.__proto__ === Object.prototype);
*/








// function Person(firstName, lastName) {
// 	this.firstName = firstName;
// 	this.lastName = lastName;
// } 


// var An = new Person ("Sojin", "An");

// console.log(An);
// console.log(An.__proto__ === Person.prototype);
// console.log(Person.prototype.__proto__ === Object.prototype);
// console.log(An.__proto__ === Object.prototype);


// console.log(Person.__proto__ === Function.prototype);
// console.log(Function.prototype.__proto__ === Object.prototype);


// console.log(An.constructor === Person);
// console.log(Person.prototype.constructor === Person);





// this

// 일반 함수 this --> window
// 중첩 함수 this --> window
// 이벤트에서 this --> 이벤트 객체
// 메서드에서 this --> 객체
// 메서드 안에 함수가 들어가 있으면 this --> window
// 중첩으로 들어가 있는 함수 안에서의 this 무조건 window


/*
function a() {
	function b() {
		console.log(this);
	}

	b();
}

a();
*/

/*
var prevBtn = document.querySelector('.prevBtn');

prevBtn.addEventListener('click', function() {
	console.log(this);
})
*/


/*
var obj = {
	age: 100,
	sum: function() {
		console.log(this.age);

		function a(){
			console.log(this);
		}

		a();
		
	}
}

obj.sum();

*/


//that
/*
var obj = {
	age: 100,
	sum: function() {

		var that = this;

		function a(){
			console.log(that);
		}

		a();
		
	}
}

obj.sum();
*/







// 템플릿 리터럴 (Template Literal)
// ``. "", ''
/*
var name = "개발자";

console.log("내 이름은" + " " + name + "입니다.");
console.log(`내 이름은 ${name}입니다.`);
*/




var arr = [];
var i = 0;

function Customer(img, name, txt) {
	this.name = name;
	this.img = img;
	this.txt = txt;
}

function createCustomer(name, img, txt) {
	var fullImg = `img/customer-${img}.jpg`;
	var customer = new Customer(name, fullImg, txt);
	arr.push(customer);
}


createCustomer('애플 1 이름', 0, '애플 1 설명');
createCustomer('애플 2 이름', 1, '애플 2 설명');
createCustomer('애플 3 이름', 2, '애플 3 설명');
createCustomer('애플 4 이름', 3, '애플 4 설명');

console.log(arr);


var arr = [
	{
		img: "img/apple_0.jpg",
		name: "애플 0",
		txt: "애플 설명 0",
	},
	{
		img: "img/apple_1.jpg",
		name: "애플 1",
		txt: "애플 설명 1",
	},
	{
		img: "img/apple_2.jpg",
		name: "애플 2",
		txt: "애플 설명 2",
	},
	{
		img: "img/apple_3.jpg",
		name: "애플 3",
		txt: "애플 설명 3",
	}
];


var i = 0;

// console.log(document.querySelectorAll('.btn'));

document.querySelectorAll('.btn').forEach(function (element, index) {

	element.addEventListener ('click', function(e) {

		e.preventDefault();
		if(e.target.classList.contains('prevBtn')) {
			console.log("Prev");

			if (i === 0) {
				i = arr.length; 
			}
			i--;
			document.getElementById('img').src = arr[i].img;
			document.getElementById('name').textContent = arr[i].name;
			document.getElementById('txt').textContent = arr[i].txt;

		}

		if(e.target.classList.contains('nextBtn')) {
			if (i === arr.length -1 ) {
				i = -1;
			}
			i++;
			document.getElementById('img').src = arr[i].img;
			document.getElementById('name').textContent = arr[i].name;
			document.getElementById('txt').textContent = arr[i].txt;
		}



	});

});














































































//이전 이미지 슬라이드 효과
/*
var arr = [
	{
		img: "img/apple_0.jpg",
		name: "애플 0",
		txt: "애플 설명 0",
	},
	{
		img: "img/apple_1.jpg",
		name: "애플 1",
		txt: "애플 설명 1",
	},
	{
		img: "img/apple_2.jpg",
		name: "애플 2",
		txt: "애플 설명 2",
	},
	{
		img: "img/apple_3.jpg",
		name: "애플 3",
		txt: "애플 설명 3",
	}
];


var i = 0;

// console.log(document.querySelectorAll('.btn'));

document.querySelectorAll('.btn').forEach(function (element, index) {

	// console.log(element);

	element.addEventListener ('click', function(e) {

		e.preventDefault();
		// console.log("hello")
		// console.log(e.target);

		if(e.target.classList.contains('prevBtn')) {
			console.log("Prev");


			if (i === 0) {
				index = arr.length; //4
			}

			i--;

			document.getElementById('img').src = arr[i].img;
			document.getElementById('name').textContent = arr[i].name;
			document.getElementById('txt').textContent = arr[i].txt;

		}

		if(e.target.classList.contains('nextBtn')) {
			// console.log("Next");


			// 4 - 1 = 3
			if (i === arr.length -1 ) {
				i = -1;
			}

			i++;

			document.getElementById('img').src = arr[i].img;
			document.getElementById('name').textContent = arr[i].name;
			document.getElementById('txt').textContent = arr[i].txt;
		}



	});

});

*/




































