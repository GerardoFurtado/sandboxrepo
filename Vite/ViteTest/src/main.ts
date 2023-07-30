import "./style.css";
import { select, selectAll } from "d3-selection";

const aspectRatio: number = 0.3;

const svgContainer = select("#chartContainer"),
	svgContainerNode: Element = svgContainer.node()! as Element,
	svgContainerWidth: number = svgContainerNode.getBoundingClientRect().width;

const svg = svgContainer
	.append("svg")
	.attr(
		"viewBox",
		`0 0 ${svgContainerWidth} ${svgContainerWidth * aspectRatio}`
	);
