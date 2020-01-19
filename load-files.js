/**
* @param {String} url - address for the HTML to fetch
* @return {String} the resulting HTML string fragment
*/
async function fetchHtmlAsText(url) {
	return await (await fetch(url)).text();
}

async function loadFile(fileID, filePath) {
	console.log(`${fileID} loading...`);
	const contentDiv = document.getElementById(fileID);
	contentDiv.innerHTML = await fetchHtmlAsText(filePath).catch((err) => console.log(err));
}
