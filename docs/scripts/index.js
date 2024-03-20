const container = document.getElementById("pixelart");
const isize = document.getElementById("size");
const result = document.getElementById("result");

// Getting the value of the size input
let size = isize.value;
let color = "#323232";
draw = false;

function set_color(colors)
{
	color = colors;
}

function populate(size) {
	container.style.setProperty('--size', size);
	for (let i = 0; i < size * size; i++) {
		const div = document.createElement('div');
		div.classList.add('pixel');
		div.style.backgroundColor = "#323232";
		div.addEventListener('mouseover', function(){
			if(!draw) return;
			div.style.backgroundColor = color;
		})
		div.addEventListener('mousedown', function(){
			div.style.backgroundColor = color;
		})
		container.appendChild(div);
	}
}

function wall()
{
	pixels = pixelart.getElementsByTagName('*');
	for (let index = 0; index < pixels.length; index++) {
		const element = pixels[index];
		if (index >= 0 && index <= size)
			element.style.backgroundColor = "rgb(255, 0, 0)";
		else if (index >= size * size - size && index < size * size)
			element.style.backgroundColor = "rgb(255, 0, 0)";
		else if (index % size == 0 || index % size == size - 1)
			element.style.backgroundColor = "rgb(255, 0, 0)";
	}
}

function create_map()
{
	pixels = pixelart.getElementsByTagName('*');
	result.innerHTML = "";
	for (let index = 0; index < pixels.length; index++) {
		const element = pixels[index];
		if (index % size == 0 && index != 0)
			result.innerHTML += "<br />";
		if (element.style.backgroundColor == "rgb(50, 50, 50)")
			result.innerHTML += '0';
		else if (element.style.backgroundColor == "rgb(255, 0, 0)")
			result.innerHTML += '1';
		else if (element.style.backgroundColor == "rgb(0, 0, 255)")
			result.innerHTML += 'P';
		else if (element.style.backgroundColor == "rgb(0, 255, 0)")
			result.innerHTML += 'E';
		else if (element.style.backgroundColor == "rgb(255, 255, 0)")
			result.innerHTML += 'C';
		else
			result.innerHTML += '?';
	}
}

function get_map() {
	var map_value = document.getElementById("result");
	var string = "";
	create_map();
	for (let index = 0; index < (map_value.innerHTML).length; index++) {
		if ((map_value.innerHTML)[index] == '<')
		{
			string += '\n';
			index += 3;
		}
		else
			string += (map_value.innerHTML)[index];
	}
	navigator.clipboard.writeText(string);
}

window.addEventListener("mousedown", function(){
	draw = true;
})
window.addEventListener("mouseup", function(){
	draw = false;
})

window.addEventListener("dragstart",(event)=>{
	event.preventDefault();
})


function reset(){
	result.innerHTML = "";
	container.innerHTML = '';
	populate(size)
}

isize.addEventListener('keyup', function(){
	size = isize.value;
	reset();
})

populate(size);