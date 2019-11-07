
function add(){
	var text = document.getElementById('text').value
	var color = document.getElementById('color').value
	var list = document.getElementById('list')


	if (color ==="red" || color ==="yellow" || color ==="blue"){
		var node = document.createElement("li")
		node.innerText = text
		node.classList.add(color)
		list.appendChild(node)
	}
}
console.log("hello")
