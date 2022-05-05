function redirect_iframe(btn_id) {
	let redirect_url = "./pages/" + btn_id + ".html";
	$("#content-frame")[0].src = redirect_url;
}
async function updateContentDiv(btn_id) {
	let pResult = await fetch("./pages/" + btn_id + ".html");
	let htmlText = await pResult.text();
	$("#content-div")[0].innerHTML = htmlText;
}