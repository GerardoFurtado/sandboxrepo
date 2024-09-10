function inlineStyles(selector) {
	const listOfStyles = [
		"font-size",
		"font-family",
		"font-weight",
		"fill",
		"stroke",
		"stroke-dasharray",
		"stroke-width",
		"opacity",
		"text-anchor",
		"text-transform",
		"shape-rendering",
		"letter-spacing",
		"white-space",
	];

	document.querySelectorAll(`${selector} svg`).forEach(svg => {
		setSvgStyles(svg);
	});

	function setSvgStyles(node) {
		if (!node.style) return;

		let styles = getComputedStyle(node);

		for (let i = 0; i < listOfStyles.length; i++) {
			node.style[listOfStyles[i]] = styles[listOfStyles[i]];
		}

		for (let i = 0; i < node.childNodes.length; i++) {
			setSvgStyles(node.childNodes[i]);
		}
	}
}
