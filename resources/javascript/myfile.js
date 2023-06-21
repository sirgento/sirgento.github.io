function setMaxContentHeight() {
	let currentSum = 56; //padding
	let vwh = visualViewport.height;
	for (x of $("body").children()) {
		if (x.tagName.toLowerCase() == "div" && !x.classList.contains("glass")) {
			currentSum += x.clientHeight;
			currentSum += 16; //padding
		}
	}
	$('body').find('.glass').get(0).style.maxHeight = (vwh - currentSum) + "px";
}