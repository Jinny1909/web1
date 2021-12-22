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


































