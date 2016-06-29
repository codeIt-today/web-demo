const log = console.log
const outputElement = document.getElementById('output')

const clearBtn = document.getElementById('clear')

console.log = function () {
	const len = arguments.length
	let buffer = ''

	for (let i = 0; i < len; i++) {
		let arg = arguments[i]
		let argType = typeof arg
		let className = argType
		let outputString = ''

		if (argType === 'undefined') {
			outputString = 'undefined'
		} else if (Array.isArray(arg)) {
			outputString = JSON.stringify(arg)
		} else if (argType === 'object') {
			outputString = JSON.stringify(arg, null, 2)
		} else {
			outputString = arg.toString()
		}

		if (arg === null) {
			className += ' null'
		}

		buffer += `<pre class="output-column ${className}">${outputString}</pre>`
	}

	outputElement.innerHTML += `<div class="output-line">${buffer}</div>`
	log.apply(this, arguments)
}

clearBtn.onclick = function () {
	outputElement.innerHTML = ''
}

window.console.log = console.log
