const mainContentContainer = document.querySelector('.mainContainer');

function navigateTo(destination){
	loadView(destination);
}

function loadView(pathName) {
	const request = new XMLHttpRequest();
	request.onload = function () {
		mainContentContainer.innerHTML = request.responseText;
		const newScript = document.createElement("script");
		newScript.src = `./views/${pathName}.js`;
		mainContentContainer.appendChild(newScript);
	}
	request.open("GET", `./views/${pathName}.html`);
	request.send()
}

export {
	navigateTo
}