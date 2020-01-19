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

loadFile('Navigation', 'buildhtml/navigation-bar.html');
loadFile('Masthead', 'buildhtml/masthead.html');
loadFile('IconsGrid', 'buildhtml/iconsgrid.html');
loadFile('ImageShowcases', 'buildhtml/image-showcase.html');
loadFile('Testimonials', 'buildhtml/testimonials.html');
loadFile('CallToAction', 'buildhtml/call-to-action.html');
loadFile('Footer', 'buildhtml/footer.html');
