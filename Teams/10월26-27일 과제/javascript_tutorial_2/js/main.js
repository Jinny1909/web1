// IF 조건문
// var a = 40;
// var b = 40;
// var c = 60;

/*
if (a > b) {
	console.log("a는 b보다 작다. ");
}
*/

/*
if(a>b) {
	console.log("a는 b보다 크다.");
} else {
	console.log("a는 b보다 작다.")
}
*/


/*
if(a > b) {
	console.log("a는 b보다 크다.");
} else if(b > c) {
	console.log("b는 c보다 크다.");
} else if(a < c) {
	console.log("a는 c보다 작다.")
} else if(b < c) {
	console.log("b는 c보다 작다.")
} else {
	console.log("모든 조건을 만족하지 않는다.")
}
*/

/*
if (a !== b) {

	if (a > b) {
		console.log("a는 b보다 크다.");
	}	else {
		console.log("a는 b보다 작다.");
	}

} else {
	console.log ("a와 b는 같다.");
}
*/




// 거짓이 되는 상황
// false, "", 0(0보다 큰경우 다 상으로 취급), null, undefined

/*
var test;
if("hello") {
	console.log("참!!!!")
} else {
	console.log("거짓!!!!")
} 
*/


//삼항 연산자
/*
var age = 15;

if (age >= 18) {
	console.log("성인");
} else {
	console.log("어린이");
}

var result = (age >= 18 ) ? "성인" : "어린이";

console.log(result);
*/


/*
var userId = prompt("아이디를 입력해 주세요.");
var userPw = prompt("비밀번호를 입력해 주세요.");

// console.log(userId);
// console.log(typeof userPw);

if(userId === "sojin" && parseInt userPw === 12345) {
	alert("로그인 되었습니다.");
} else {
	alert("아이디 또는 비밀번호가 틀렸습니다.");
}

*/








// 전역변수 , 지역변수
/*
var globalV = "전역변수";

function func() {
	var localV = "지역변수"; 

	console.log(globalV);
	console.log(localV);
}

// func();

console.log(globalV);
console.log(localV);

*/

//var a = 10;
//a = 100;

/*
function func() {
	var gv = "지역변수";
	console.log(gv); 
}

func();

console.log(gv);

*/
/*
var gv = "전역변수";

if(true) {
	var lv = "지역변수????";

	// console.log(gv);
	// console.log(lv);
}

console.log(gv);
console.log(lv);
*/


/*
var gv = "전역변수";
var aaa = "aaa";
*/
/*
function a() {
	console.log("a");
}
*/




//전역 스코프
/*
var gv = "전역변수"

function func() {
	console.log(gv);
}

func();

console.log(gv);
*/


// 지역 스코프
/*
function func() {

	var lv = "지역변수"
	console.log(lv);
}

func();

console.log(lv);
*/


//렉시컬 스코핑
// 함수는 서로의 스코프에 접근할수없다!!!!

/*
function a() {
	var apple = "사과";
}

function b() {
	a();
	console.log(apple);
}

b();
*/

/*
var a = 10;

function func1() {

	var b = 20;

	function func2() {
		var c = 30;
		console.log(a + b + c);
	}

	func2();

	console.log(c);
}

func1();
*/

/*
var a = 100;
a =3.14


var name = "Sojin";

function func1() {
	console.log(name);
}

function func2() {
	name = "Jun";

	func1();
}

func2();
*/


// 호이스팅

//변수 호이스팅
/*
// var a;

console.log(a);

// var a;
// a = "나는 A다.";

var a = "나는 A다.";

console.log(a);

*/


//함수 호이스팅
/*
func1();

function func1() {
	console.log("Func1 함수다.");
}

// func1();
*/





//var func2 = undefined;
/*
func2();

var func2 = function() {
	console.log("Func2 함수다.");
}

// func2();
*/




// Math

//console.log(Math);


// var num1 = Math.abs(-3);
// console.log(num1);

// var num2 = Math.ceil(0.3);
// console.log(num2);

// var num3 = Math.floor(10.9);
// console.log(num3);

// var num4 = Math.random();
// console.log(num4);




// parseInt, parseFloat()
// String --> Number
/*
var str1 = "20.6";
var str2 = "3.14";

var num1 = parseInt(str1);
var num2 = parseFloat(str2);

console.log(num1);
console.log(num2);

*/



// 반복문
// 고정값 : console.log(2 * );
// 일정한 규칙을 갖고 있는 가변값 : 1, 2, 3, 4, 5, 6, 7, 8, 9
// console.log(2 * 1);
// console.log(2 * 2);
// console.log(2 * 3);
// console.log(2 * 4);
// console.log(2 * 5);
// console.log(2 * 6);
// console.log(2 * 7);
// console.log(2 * 8);
// console.log(2 * 9);




// while
/*
var num = 1; //2, 3 ......10

while (num < 10) {
	// 2 * 1 = 2
	// 2 * 2 = 4
	// 2 * 3 = 6
	// 2 * 9 = 18
	console.log(2 * num);
	num += 2;
}

console.log("반복문 종료")
*/



//do ~ while 
/*
var i = 12;

do{
	console.log(i);
	i++;
} while ( i < 10);
*/



// 고정값
// 일정한 규칙을 갖고 있는 가변값
// for
/*
var i;
for (var i = 1; i < 10; i++) {
	console.log(2 * i);
}
*/



// 중첩 반복문
// 중첩 for

// 2단 ~ 9단
/*
for(var i= 2; i < 10; i++) {

	for(var j = 1; j < 10; j++) {
		console.log(i * j);
	}
}
*/



// break. continue
/*
for (var i = 1; i < 10; i++) {
	if (i === 5) {
		continue;
	}
	console.log(2 * i);
}
*/




//var arr = ['바나나', '사과', '수박', '토마토'];
// console.log(arr);
// console.log(arr.length);

// 고정값 : console.log(arr[]);
// 가변값 : 0, 1, 2
// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);

/*
for(var i = 0; i < arr.length; i++) {
	console.log(arr[i]);
}
*/

// for ~ in
/*
for ( var i in arr) {
	console.log(i);
	console.log(arr[i]);
}
*/

/*
// 익명함수, 콜백함수
.addEventListener('click', function() {

})

arr.forEach( function(element, index) {

	console.log(element);
	console.log(index);

})

*/

/*
arr.map(function(element, index) {

	console.log(element);
	console.log(index);
})
*/


/*
var result = arr.map(function(element,index) {

	return element + " " + "10";
})

console.log(result);
*/


/*
var student = {
	name: "kim",
	age: 20,
	skills: ["자바스크립트", "HTML", "CSS"],

	sum: function(num1, num2) {
		console.log(num1 + num2);
	}
}

// for ~ in 
// student.name
// student['name'];
for (var prop in student) {

	console.log(prop);
	console.log(student[prop]);
}
*/



// 문자열 String
// length;
// var txtLength ="              Hello world          ";

//console.log(txtLength.length);
// console.log(txtLength);
// console.log(txtLength.trim().length);

 
// var result = prompt("이름을 입력해 주세요");

// console.log(result);
// console.log(result.trim().length);


// var str = "Nice to meet you to to";

// console.log(str.length);
// console.log(str.charAt(str.length - 1));
// console.log(str.slice(2));

// console.log(str.split('/'));

// console.log(str.replace('Nice','Hello'));

// console.log(str.indexOf('to'));

// console.log(str.toUpeerCase());
// console.log(str.toLowerCase());


/*
var search = prompt("검색어를 입력해 주세요.")
if(search.toLowerCase() === "apple") {

	console.log("사과 데이터를 출력한다.")

} else {

	console.log("false");
}

*/



// var arr = ["사과", "배", "수박"]

//console.log(arr.length);

// arr.push("포도", "토마토", "감");
// console.log(arr);


// arr.unshift("포도", "토마토", "감");
// arr.unshift("토마토");
// console.log(arr);


// arr.pop();
// arr.pop();

// console.log(arr);


// arr.shift();

// console.log(arr);


/*
var arr1 = ["포도", "토마토", "감"];
var arr2 = ["노트북", "마이크", "키보드"]
// var str1 = arr1.join(' / ');

// console.log(str1);


var merge = arr1.concat(arr2);

console.log(merge);
*/
















var hex = document.getElementById('hex');
var btn = document.getElementById('btn');

// console.log(hex);
// console.log(btn);

btn.addEventListener('click', createColor);

function createColor() {

	// console.log('클릭')

	var arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d","e", "f"];
	var color = '#';

	for(var i = 0; i < 6; i++) {
		var random = Math.floor(Math.random() * arr.length);
		color += arr[random]
	}

	document.body.style.backgroundColor = color;
	hex.textContent = color;
}


// #000fff;
// 숫자 : 0 ~ 9
// 알파벳 : a ~ f
// 6글자 : 숫자와 알파벳 조합

// # + 0 = #0
// #0 + f = #0f;
// #0f + a = #0fa;
// #0fa + a = #0faa;
// #0faa + b = #0faab;
// #0faab + c = #0faabc;











































































































