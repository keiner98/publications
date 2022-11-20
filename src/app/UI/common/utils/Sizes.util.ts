import { Injectable } from "@angular/core";

@Injectable({
	providedIn: "root",
})
export class SizesUtil {
	private regexUnits: RegExp = /(\d*\.?\d+)\s?(px|em|rem|ex|%|in|cn|mm|pt|pc+)/;
	private regexOnlyNumbers: RegExp = /^[0-9]*$/;

	constructor() {}

	public getSize(size: string | number, defaultSize: number): string {
		if (!size) {
			return `${defaultSize}px`;
		}

		if (typeof size === "number" || this.regexOnlyNumbers.test(size)) {
			return `${size}px`;
		}

		if (size.includes("calc") || size.includes("content")) {
			return size;
		}

		if (this.regexUnits.test(size)) {
			return size;
		}

		return `${defaultSize}px`;
	}
}
