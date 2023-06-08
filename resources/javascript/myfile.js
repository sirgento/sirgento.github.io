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

async function updateContentDivMarkdown(btn_id, converter) {
    if (btn_id == null || btn_id === ""){
        return;
    }
    let pResult = await fetch("./pages/md/" + btn_id + ".md");
    let markdownText = await pResult.text();
    $("#content-div")[0].innerHTML = converter.makeHtml(markdownText);
}