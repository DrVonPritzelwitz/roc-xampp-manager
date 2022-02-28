const mainContentContainer = document.querySelector('.mainContainer');

function navigateTo(destination){
	loadView(destination);
	attachViewModel(destination);
}

function loadView(pathName) {
	const request = new XMLHttpRequest();
	request.onload = function () {
		mainContentContainer.innerHTML = request.responseText;
	}
	request.open("GET", `./views/${pathName}.html`);
	request.send()
}

function attachViewModel(pathName){
	const newScript = document.createElement("script");
	newScript.src = `./views/${pathName}.js`;
	mainContentContainer.appendChild(newScript);
}


export {
	navigateTo
}