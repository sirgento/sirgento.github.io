function redirect_iframe(btn_id) {
	let redirect_url = "./pages/" + btn_id + ".html";
	$("#content-frame")[0].src = redirect_url;
}