const container = document.getElementById("pixelart");
const isize = document.getElementById("size");
const result = document.getElementById("result");

// Getting the value of the size input
let size = isize.value;
let color = "#000000";
draw = false;

function set_color(colors)
{
	color = colors;
}

function populate(size) {
	container.style.setProperty('--size', size)
	for (let i = 0; i < size * size; i++) {
		const div = document.createElement('div')
		div.classList.add('pixel')
		div.addEventListener('mouseover', function(){
			if(!draw) return
			div.style.backgroundColor = color
		})
		div.addEventListener('mousdown', function(){
			div.style.backgroundColor = color
		})
		container.appendChild(div)
	}
}

function create_map()
{
	pixels = pixelart.getElementsByTagName('*');
	result.innerHTML = "";
	for (let index = 0; index < pixels.length; index++) {
		const element = pixels[index];
		if (index % size == 0)
			result.innerHTML += "<br />";
		if (element.style.backgroundColor == "rgb(0, 0, 0)")
			result.innerHTML += '0';
		else if (element.style.backgroundColor == "rgb(255, 0, 0)")
			result.innerHTML += '1';
		else if (element.style.backgroundColor == "rgb(30, 0, 255)")
			result.innerHTML += 'P';
		else if (element.style.backgroundColor == "rgb(72, 255, 0)")
			result.innerHTML += 'E';
		else if (element.style.backgroundColor == "rgb(255, 242, 0)")
			result.innerHTML += 'C';
		else
			result.innerHTML += '?';
	}
}

window.addEventListener("mousedown", function(){
	draw = true
})
window.addEventListener("mouseup", function(){
	draw = false
})

function reset(){
	container.innerHTML = ''
	populate(size)
}

isize.addEventListener('keyup', function(){
	size = isize.value
	reset()
})

populate(size)