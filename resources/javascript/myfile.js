function redirect_iframe(btn_id) {
	let redirect_url = "./pages/" + btn_id + ".html";
	$("#content-frame")[0].src = redirect_url;
}
function setMaxContentHeight() {
	let currentSum = 16; //padding
	let vwh = visualViewport.height;
	for (x of $("body").children()) {
		if (x.tagName.toLowerCase() == "div" && !x.classList.contains("glass")) {
			currentSum += x.clientHeight;
			currentSum += 16; //padding
		}
	}
	$('body').find('.glass').get(0).style.maxHeight = (vwh - currentSum) + "px";
}
async function updateContentDiv(btn_id) {
	let pResult = await fetch("./pages/" + btn_id + ".html");
	let htmlText = await pResult.text();
	$("#content-div")[0].innerHTML = htmlText;
}

async function fetch_json_cardapio(resourcepath) {
	
    let url = window.location.href + resourcepath;
    let list = await fetch(url);
    let items = await list.text();

    let objets = JSON.parse(items);

	return objets;
}

function jogar_cardapio_tela(componente, cardapio) {
	for (x of cardapio) {
		let prev_data = componente.innerHTML;
		let new_data = `<div><div><span>${x.name}</span><span>${x.price}</span></div><div><span>${x.desc}</span></div></div>`;
		componente.innerHTML = prev_data + new_data;
	}
}