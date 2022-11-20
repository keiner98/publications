import { Injectable } from "@angular/core";

@Injectable({
	providedIn: "root",
})
export class UtilService {
	public changeViewReader = false;
	constructor() {}

	changeView(view: boolean) {
		this.changeViewReader = view;
	}
}
