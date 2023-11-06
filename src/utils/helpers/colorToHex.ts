const convert = require('color-convert');

export const colorToHex = (color: any) => {
	let lineColor;

	// CONVERT COLOR TO HEX
	if (color.metaColor) {
		if (color.metaColor.format === 'hsv') {
			lineColor = `#${convert.hsv.hex(
				color.metaColor.originalInput.h,
				color.metaColor.originalInput.s * 100,
				color.metaColor.originalInput.v * 100,
			)}`;
		} else if (color.metaColor.format === 'rgb') {
			lineColor = `#${convert.rgb.hex(
				color.metaColor.originalInput.r,
				color.metaColor.originalInput.g,
				color.metaColor.originalInput.b,
			)}`;
		} else if (color.metaColor.format === 'hex') {
			lineColor = `#${color.metaColor.originalInput}`;
		}
	} else {
		lineColor = color as string;
	}

	return lineColor;
};
