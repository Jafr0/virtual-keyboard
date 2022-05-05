const body = document.querySelector("body")

let arr = [96, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 45, 61, 8, 9,
	113, 119, 101, 114, 116, 121, 117, 105, 111, 112, 91, 93,
	46, 20, 65, 83, 68, 70, 71, 72, 74, 75, 76, 59, 39, 92, 13,
	16, 90, 88, 67, 86, 66, 78, 77, 44, 46, 47, 38, 16,
	17, 91, 18, 32, 18, 37, 40, 39, 17]

let brr = [
	{
		"key": "`",
		"keyCode": 192,
		"which": 192,
		"code": "Backquote",
		"location": 0,
		"description": "Backtick / grave accent / n / ? / o"
	},
	{
		"key": "1",
		"keyCode": 49,
		"which": 49,
		"code": "Digit1",
		"location": 0,
		"description": "1 Key",
		"unicode": "?"
	},
	{
		"key": "2",
		"keyCode": 50,
		"which": 50,
		"code": "Digit2",
		"location": 0,
		"description": "2 Key",
		"unicode": "?"
	},
	{
		"key": "3",
		"keyCode": 51,
		"which": 51,
		"code": "Digit3",
		"location": 0,
		"description": "3 Key",
		"unicode": "?"
	},
	{
		"key": "4",
		"keyCode": 52,
		"which": 52,
		"code": "Digit4",
		"location": 0,
		"description": "4 Key",
		"unicode": "?"
	},
	{
		"key": "5",
		"keyCode": 53,
		"which": 53,
		"code": "Digit5",
		"location": 0,
		"description": "5 Key",
		"unicode": "?"
	},
	{
		"key": "6",
		"keyCode": 54,
		"which": 54,
		"code": "Digit6",
		"location": 0,
		"description": "6 Key",
		"unicode": "?"
	},
	{
		"key": "7",
		"keyCode": 55,
		"which": 55,
		"code": "Digit7",
		"location": 0,
		"description": "7 Key",
		"unicode": "?"
	},
	{
		"key": "8",
		"keyCode": 56,
		"which": 56,
		"code": "Digit8",
		"location": 0,
		"description": "8 Key",
		"unicode": "?"
	},
	{
		"key": "9",
		"keyCode": 57,
		"which": 57,
		"code": "Digit9",
		"location": 0,
		"description": "9 Key",
		"unicode": "?"
	},
	{
		"key": "0",
		"keyCode": 48,
		"which": 48,
		"code": "Digit0",
		"location": 0,
		"description": "0",
		"unicode": "?"
	},
	{
		"key": "-",
		"keyCode": 109,
		"which": 109,
		"code": "NumpadSubtract",
		"location": 3,
		"description": "subtract"
	},
	{
		"key": "=",
		"keyCode": 61,
		"which": 61,
		"code": "Equal",
		"location": 0,
		"description": "equals (firefox)"
	},
	{
		"key": "Backspace",
		"keyCode": 8,
		"which": 8,
		"code": "Backspace",
		"location": 0,
		"description": "backspace / delete",
		"unicode": "?"
	},
	{
		"key": "Tab",
		"keyCode": 9,
		"which": 9,
		"code": "Tab",
		"location": 0,
		"description": "tab",
		"unicode": "?"
	},
	{
		"key": "q",
		"keyCode": 81,
		"which": 81,
		"code": "KeyQ",
		"location": 0,
		"description": "q"
	},
	{
		"key": "w",
		"keyCode": 87,
		"which": 87,
		"code": "KeyW",
		"location": 0,
		"description": "w"
	},
	{
		"key": "e",
		"keyCode": 69,
		"which": 69,
		"code": "KeyE",
		"location": 0,
		"description": "e"
	},
	{
		"key": "r",
		"keyCode": 82,
		"which": 82,
		"code": "KeyR",
		"location": 0,
		"description": "r"
	},
	{
		"key": "t",
		"keyCode": 84,
		"which": 84,
		"code": "KeyT",
		"location": 0,
		"description": "t"
	},
	{
		"key": "y",
		"keyCode": 89,
		"which": 89,
		"code": "KeyY",
		"location": 0,
		"description": "y"
	},
	{
		"key": "u",
		"keyCode": 85,
		"which": 85,
		"code": "KeyU",
		"location": 0,
		"description": "u"
	},
	{
		"key": "i",
		"keyCode": 73,
		"which": 73,
		"code": "KeyI",
		"location": 0,
		"description": "i"
	},
	{
		"key": "o",
		"keyCode": 79,
		"which": 79,
		"code": "KeyO",
		"location": 0,
		"description": "o"
	},
	{
		"key": "p",
		"keyCode": 80,
		"which": 80,
		"code": "KeyP",
		"location": 0,
		"description": "p"
	},
	{
		"key": "[",
		"keyCode": 160,
		"which": 160,
		"code": "BracketLeft",
		"location": 0,
		"altKey": false,
		"ctrlKey": false,
		"metaKey": false,
		"shiftKey": false,
		"description": "^"
	},
	{
		"key": "]",
		"keyCode": 221,
		"which": 221,
		"code": "BracketRight",
		"location": 0,
		"description": "close bracket / a"
	},
	{
		"key": "\\",
		"keyCode": 220,
		"which": 220,
		"code": "Backslash",
		"location": 0,
		"description": "back slash"
	},
	{
		"key": "Delete",
		"keyCode": 46,
		"which": 46,
		"code": "NumpadDecimal",
		"location": 3,
		"altKey": false,
		"ctrlKey": false,
		"metaKey": false,
		"shiftKey": false,
		"description": "delete",
		"unicode": "?"
	},
	{
		"key": "CapsL",
		"keyCode": 20,
		"which": 20,
		"code": "CapsLock",
		"location": 0,
		"description": "caps lock",
		"unicode": "?"
	},
	{
		"key": "a",
		"keyCode": 65,
		"which": 65,
		"code": "KeyA",
		"location": 0,
		"description": "a"
	},
	{
		"key": "s",
		"keyCode": 83,
		"which": 83,
		"code": "KeyS",
		"location": 0,
		"description": "s"
	},
	{
		"key": "d",
		"keyCode": 68,
		"which": 68,
		"code": "KeyD",
		"location": 0,
		"description": "d"
	},
	{
		"key": "f",
		"keyCode": 70,
		"which": 70,
		"code": "KeyF",
		"location": 0,
		"description": "f"
	},
	{
		"key": "g",
		"keyCode": 71,
		"which": 71,
		"code": "KeyG",
		"location": 0,
		"description": "g"
	},
	{
		"key": "h",
		"keyCode": 72,
		"which": 72,
		"code": "KeyH",
		"location": 0,
		"description": "h"
	},
	{
		"key": "j",
		"keyCode": 74,
		"which": 74,
		"code": "KeyJ",
		"location": 0,
		"description": "j"
	},
	{
		"key": "k",
		"keyCode": 75,
		"which": 75,
		"code": "KeyK",
		"location": 0,
		"altKey": true,
		"ctrlKey": false,
		"metaKey": true,
		"shiftKey": false,
		"description": "k"
	},
	{
		"key": "l",
		"keyCode": 76,
		"which": 76,
		"code": "KeyL",
		"location": 0,
		"altKey": true,
		"ctrlKey": false,
		"metaKey": true,
		"shiftKey": false,
		"description": "l"
	},
	{
		"key": ";",
		"keyCode": 59,
		"which": 59,
		"code": "Semicolon",
		"location": 0,
		"description": "semicolon (firefox), equals"
	},
	{
		"key": "'",
		"keyCode": 222,
		"which": 222,
		"code": "Quote",
		"location": 0,
		"description": "single quote / o / a"
	},
	{
		"key": "Enter",
		"keyCode": 13,
		"which": 13,
		"code": "Enter",
		"location": 0,
		"description": "Enter / Return",
		"unicode": "?"
	},
	{
		"key": "Shift",
		"keyCode": 16,
		"which": 16,
		"code": "ShiftLeft",
		"location": 1,
		"description": "shift",
		"unicode": "?"
	},
	{
		"key": "z",
		"keyCode": 90,
		"which": 90,
		"code": "KeyZ",
		"location": 0,
		"description": "z"
	},
	{
		"key": "x",
		"keyCode": 88,
		"which": 88,
		"code": "KeyX",
		"location": 0,
		"description": "x"
	},
	{
		"key": "c",
		"keyCode": 67,
		"which": 67,
		"code": "KeyC",
		"location": 0,
		"description": "c"
	},
	{
		"key": "v",
		"keyCode": 86,
		"which": 86,
		"code": "KeyV",
		"location": 0,
		"description": "v"
	},
	{
		"key": "b",
		"keyCode": 66,
		"which": 66,
		"code": "KeyB",
		"location": 0,
		"description": "b"
	},
	{
		"key": "n",
		"keyCode": 78,
		"which": 78,
		"code": "KeyN",
		"location": 0,
		"description": "n"
	},
	{
		"key": "m",
		"keyCode": 77,
		"which": 77,
		"code": "KeyM",
		"location": 0,
		"description": "m"
	},
	{
		"key": ",",
		"keyCode": 108,
		"which": 108,
		"code": "NumpadDecimal",
		"location": 3,
		"altKey": false,
		"ctrlKey": false,
		"metaKey": false,
		"shiftKey": false,
		"description": "numpad period (firefox)"
	},
	{
		"key": ".",
		"keyCode": 190,
		"which": 190,
		"code": "Period",
		"location": 0,
		"description": "period"
	},
	{
		"key": "/",
		"keyCode": 191,
		"which": 191,
		"code": "Slash",
		"location": 0,
		"description": "forward slash / c"
	},
	{
		"key": "▲",
		"keyCode": 38,
		"which": 38,
		"code": "ArrowUp",
		"location": 0,
		"altKey": false,
		"ctrlKey": false,
		"metaKey": false,
		"shiftKey": false,
		"repeat": false
	},
	{
		"key": "Shift",
		"keyCode": 16,
		"which": 16,
		"code": "ShiftLeft",
		"location": 1,
		"description": "shift",
		"unicode": "?"
	},
	{
		"key": "Ctrl",
		"keyCode": 17,
		"which": 17,
		"code": "ControlLeft",
		"location": 1,
		"altKey": true,
		"ctrlKey": false,
		"metaKey": true,
		"shiftKey": true,
		"description": "ctrl",
		"unicode": "^"
	},
	{
		"key": "Meta",
		"keyCode": 91,
		"which": 91,
		"code": "MetaLeft",
		"location": 1,
		"altKey": false,
		"ctrlKey": false,
		"metaKey": true,
		"shiftKey": false,
		"description": "Windows Key / Left ? / Chromebook Search key",
		"unicode": "? ?"
	},
	{
		"key": "Alt",
		"keyCode": 18,
		"which": 18,
		"code": "AltLeft",
		"location": 1,
		"altKey": true,
		"ctrlKey": false,
		"metaKey": true,
		"shiftKey": false,
		"description": "Alt / Option",
		"unicode": "? / ?"
	},
	{
		"key": " ",
		"keyCode": 32,
		"which": 32,
		"code": "Space",
		"location": 0,
		"altKey": false,
		"ctrlKey": false,
		"metaKey": false,
		"shiftKey": false,
		"repeat": false
	},
	{
		"key": "Alt",
		"keyCode": 18,
		"which": 18,
		"code": "AltLeft",
		"location": 1,
		"altKey": true,
		"ctrlKey": false,
		"metaKey": true,
		"shiftKey": false,
		"description": "Alt / Option",
		"unicode": "? / ?"
	},
	{
		"key": "◀",
		"keyCode": 37,
		"which": 37,
		"code": "ArrowLeft",
		"location": 0,
		"altKey": false,
		"ctrlKey": false,
		"metaKey": false,
		"shiftKey": false,
		"repeat": false
	},
	{
		"key": "▼",
		"keyCode": 40,
		"which": 40,
		"code": "ArrowDown",
		"location": 0,
		"altKey": false,
		"ctrlKey": false,
		"metaKey": false,
		"shiftKey": false,
		"repeat": false
	},
	{
		"key": "▶",
		"keyCode": 39,
		"which": 39,
		"code": "ArrowRight",
		"location": 0,
		"altKey": false,
		"ctrlKey": false,
		"metaKey": false,
		"shiftKey": false,
		"repeat": false
	},
	{
		"key": "Ctrl",
		"keyCode": 17,
		"which": 17,
		"code": "ControlLeft",
		"location": 1,
		"altKey": true,
		"ctrlKey": false,
		"metaKey": true,
		"shiftKey": true,
		"description": "ctrl",
		"unicode": "^"
	}
]

function textArea() {
	const textarea = `<h1>Виртуальная клавиатура Windows</h1>
	<textarea id="story" name="story" class="textarea"
	rows="5" cols="33">
</textarea>
<div class='keyboard'><div class='cont'></div></div>`

	body.insertAdjacentHTML("afterbegin", textarea);




}
textArea();


let div = document.querySelector('.cont');


function renderCards(brr) {
	brr.forEach(function (key, index) {
		const but = `<div class='bkey' id=${index}>${key.key}</div>`
		div.insertAdjacentHTML("beforeend", but);
	})

}

renderCards(brr)


let keys = document.querySelectorAll('.bkey');


let input = document.querySelector('textarea')

for (let i = 0; i < keys.length; i++) {
	brr.forEach(function (key) {
		keys[i].setAttribute('data', key.code)
		i++;

	})

}

let b = document.querySelectorAll('.bkey');

let caps = document.getElementById('29');

document.addEventListener('keydown', function (event) {
	for (let i = 0; i < b.length; i++) {
		if (event.code == b[i].getAttribute('data')) {

			b[i].classList.add('active')

			if (event.code != "ControlLeft" && event.code != "AltLeft" && event.code != "MetaLeft"
				&& event.code != "ShiftLeft" && event.code != "Enter" && event.code != "CapsLock" && event.code != "NumpadDecimal"
				&& event.code != "Tab" && event.code != "Backspace")
				input.value += b[i].textContent.slice(0, 0);
			input.focus();
		}

		if (event.code == "Tab") input.value += ' ';



		/* if (event.code == "ControlLeft") {
			document.onkeyup = function (event) {
				if (event.code == "AltLeft") {
					switch (b[i]) {
						case 1: i.key.toUpperCase();
					}
				}
			}
		} */

	}

})

window.addEventListener('keyup', function (event) {
	for (let i = 0; i < b.length; i++) {
		if (event.code == b[i].getAttribute('data')) {
			b[i].classList.remove('active')

		}


	}
})


b.forEach(function (el) {
	el.onclick = function () {
		b.forEach(function (el) {
			el.classList.remove('active')
		});

		this.classList.add('active')

		input.innerHTML += el.textContent;

		/* input.innerHTML += code.innerHTML */
	}
})

console.log(b.textContent)




