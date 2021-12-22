//comic 박스를 생성한 상태
//변수 선언
//var comic;

//comic 박스 안에 원피스 데이터를 할당한 상태
//변수 초기화
//comic = "원피스";

//console.log(comic);


//var apple = "사과";

/*
var a;
var b;
var c;
*/

// 변수 동시 선언
//var a,b,c;

// 변수 동시 초기화


/*
var d = 10;
var e = 20;
var f = 30;
*/

/*
var d = 10, 
	e = 20, 
	f = 30;
*/





// 모든 변수는 선언과 동시에 undefined가 자동으로 할당된다.
//var computer;
//console.log(computer);



/*
var house;
house = "집";

console.log(house);

house = "아파트";

console.log(house);
*/

//var house;
//console.log(house);

//undefined --> 집 으로 데이터 변경
//house = "집";
//console.log(house);




//캐멀 케이스
// var mathScoreStudent = 10;

//스네이크 케이스
// var math_score _student = 10;

//주의점
//var math_score _student = 100;
//var _math;
//var $math;

//var apple10;
//var 10apple;


//var w;



/*
// 데이터 타입
//문자열 (String)
var msg1 = "Hello World";
var msg2 = 'Welcome';


console.log(msg1);
console.log(msg2);

var msg3 = "nice to meet you';";


//she's girl

//축약어 표현
var msg4 = "she's girl";
var msg5 = 'she\'s girl';

console.log(msg4)
console.log(msg5)

*/



// 숫자(Number)
/*
var num1 = 10;
var num2 = -10;
var num3 = 3.14;
var num4 = -3.14;

console.log(num1);
console.log(num2);
console.log(num3);
console.log(num4);

console.log(num1 + num2);
console.log(num1 + num3);
*/


//연산자
//숫자 사칙연산
/*
var a = 20;
var b = 10;


console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);


// 문자열 (덧셈을 제외하고 일부 사칙연산 가능)
var str1 ="20";
var str2 ="10";

console.log (str1 + str2)
console.log (str1 - str2)
console.log (str1 * str2)
console.log (str1 / str2)
console.log (str1 % str2)



var firstName = "Sojin"
var lastName = "AN"

console.log(firstName + " " +lastName)


var str11 = "현재 시간은 ";
var time = 10;
var str12 = "시 입니다."

console.log(str11 + time + str12)

*/

// ++ ,-- 연산자

// var num10 = 10;

//num10 = num10 - 1;
//console.log(num10);
//console.log(--num10); //9
//console.log(--num10); //8

//console.log(++num10);
//console.log(++num10);

//console.log(--num10);
//console.log(num10);  



// +=, -=, *=, /=, %=

//var num20 = 20;


//자기 자신의 값을 업데이트 할떄
//num20 = num20 + 10;
//num20 +=10;
//console.log(num20)




// 비교 연산자 >, <, ==, ===, !=, !==, <=, >=
/*
var a = 10;
var b = 20;
var c = 30;

console.log(a > b);
console.log(a < b);
console.log(a >= b);
console.log(a <= b);

console.log(a == b);
console.log(a === b);

console.log(a != b);
console.log(a !== b);
*/

/*
var num10 = 10;
var num20 = 20;

var str10 = "10";
var str20 = "20";


console.log( num10 === str10);
console.log( num20 !== str20);
*/


// 논리 연산자 : AND(&&), OR(||)
/*
var num30 = 30;
var num40 = 40;
var num50 = 30;


console.log( num30 === num40 && num30 === num50 && num40 !== num50)
console.log( num30 === num40 || num30 === num50 || num40 > num50)
*/


// 불리언(boolean) :true, false

/*
console.log(true);
console.log(false);
console.log(1 === 2);
console.log(10 < 20);
console.log(10 === 10 || 20 === 30)


var bool = true;
bool = false

*/


// null, undefined 
// null : 변수 초기화롸 명시적으로.....빈 값을 변수 안에 할당한 상태
// var n = null;

// undefined : 변수를 선언만한 상태
// var u; 

// console.log(n);
// console.log(u);



// null과 undefined 차이점
// console.log(typeof 10);
// console.log(typeof "Hello World");

// console.log(typeof null);
// console.log(typeof undefined);


// console.log(null == undefined);
// console.log(null === undefined);


// !
// console.log(!true)
// console.log(!false)

//console.log(!null);  //true
//console.log(!!null); //!true

// console.log(!undefined);
// console.log(!!undefined);

//console.log(10 + null); // null = 0
//console.log(10 +  undefined); // NaN (Not a Number)






// 참조 타입
// 함수 (function)
// console.log(10 + 10);
// console.log(20 + 30);
// console.log(5 + 10);

//임의 숫자 두 개를 전달받아서 덧셈을 하는 기능을 만들고 싶다.


// 함수 선언 (기능 완성 - 동작x)
/*
function sum() {
	// console.log("Hello");
	console.log(10 + 10);
}

// 함수 호출
sum();

*/

// Paraneter (매개변수),  Argument (인수)
// 매개변수 : num1. num2
/*
function sum (num1, num2) {
	console.log(num1 + num2);
}


//인수 : 호출시 전달되는 값
sum(10,20);
sum(100,50);

*/

/*
function fullName(firstName, lastName) {
	console.log(firstName + " " + lastName);
}

fullName("Sojin, An");
*/

/*
function area(width, height) {
	// console.log(width)
	// console.log(height)

	var result = width * height;
	console.log(result);
}

area(10);
*/

/*
function test(a) {
	console.log(a);
}

test(10);
test("Hello");
test(true);
test(null);

test(fuction a() {});
test([]);
*/



// return
/*
function sum(num1, num2) {
	// console.log(num1 + num2)
	return num1 + num2;
}

var result = sum(10, 20); //함수 호출 = 30, result= = 30
console.log(result);
*/
/*
function area(hor, ver) {
	return hor * ver;
}

var volume = area(10,20) *100;
console.log(volume); 

*/


/*

// 배열 (Array)
var banana = "바나나";
var apple = "사과;"
var melon = "멜론";

var fruit = ["바나나", "사과", "멜론"];
console.log(fruit);


// 인데스 (index)
console.log(fruit[0])
console.log(fruit[2])

fruit[2] = "수박";
console.log(fruit);

*/

/*
var arr = [
	10,
	"Hello", 
	trune, 
	null, 
	undefined, 
	function a() {}, 
	[10, 20, 30], 
	{name:"An"}
];
*/

// var num = [10, 20, 30, 3.14];
// var fruit = ["사과", "배", "바나나", "귤"]


// 배열 안에 있는 배열 데이터에 접근하는 방법
/*
var score = [[10, 20, 30], [100, 200, 300]];

console.log(score);
console.log(score[1]);
console.log(score[1][2]);
*/



// 객체 (Object)
// 이름, 나이, 스킬, 성별
// key - value = property

/*
var student = {
	name:"sojin",
	age:21,
	skills: ["자바스크립트", "HTML", "CSS"]
};

console.log(student);
console.log(student.name);
console.log(student ["name"]);
console.log(student.skills[1]);

student.age = 100;

console.log(student);

student.gender = "여자";
console.log(student);
*/



/*
var student = {
	name:"sojin",
	age:21,
	skills: ["자바스크립트", "HTML", "CSS"]

	test1: true,
	test2: null,
	test3: undefined,
	test4: {color:"red"},

	//객체 안에 만들어진 함수 "메서드 함수"
	sum: function (num1, num2) {
		return num1 + num2;
	}
};


var result = student.sum(10, 20)
console.log(result);

student.sum(100, 200);
console.log("Hello World");


*/

// 원시 타입과 참조 타입 차이점
//원시 타입
/*
var str1 = "Hello World";
var str2 =str1;

// str1 = "Nice";
str2 = "Nice"

console.log(str1);
console.log(str2);
*/

//참조타입 
/*
var obj1 = {name: "sojin"}
var obj2 = obj1;


// obj1.name = "park";
obj2.name = "park";


console.log (obj1);
console.log (obj2);
*/



// yellow, green, pink #dc143c, rgba(123, 123, 123, 0.5);

var colors = ['yellow', 'green', 'pink', '#dc143c', 'rgba(123, 123, 123, 0.5)'];

var bg = document.getElementById('color_bg');
var btn = document.getElementById('btn');


//btn.addEventListener()

// 콜백 함수 : 호출 기호 없이 튼정 조건 하에 호출되는 함수
btn.addEventListener('click', function() {

	// 0 ~ 4
	var random = Math.floor(Math.random() * 5);
	// console.log(random);
	console.log(colors[random]);

	//background-color, border-radius, margin-top 적용안됌
	bg.style.backgroundColor = colors[random];
});




// 1 ~ 6 숫자를 랜덤하게 가져오는 게임
//Math,random()                       : 0 ~ 0.9999999~
//Math,random() * 6                   : 0 ~ 5.9999999~
//Math.floor.(Math.random() * 6)	  : 0 ~ 5
//Math.floor.(Math.random() * 6) +1   : 1 ~ 6


// console.log(Math.random());
// console.log(Math.random() * 6);
// console.log(Math.floor.(Math.random() * 6));
// console.log(Math.floor.(Math.random() * 100) +1);




//변수 이름을 작성할때 예약어를 사용할수없음
// var, typeof, function, null, underfined, false, true, console


// var var;
// var function;



console.log("Main");


var mainVar = "Main Var";

function mainFunc () {
	console.log("Main Func");
}



























