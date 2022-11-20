import { Component, Input } from "@angular/core";
import { ButtonTypes, Variants } from "../types/types";

@Component({
	selector: "app-button",
	templateUrl: "./button.component.html",
	styleUrls: ["./button.component.scss"],
})
export class ButtonComponent {
	@Input() variant: Variants = "primary";
	@Input() outline: boolean = false;
	@Input() icon!: string;
	@Input() iconUrl!: string;
	@Input() type: ButtonTypes = "button";
	@Input() disabled: boolean = false;
	@Input() height: string = "35px";

	constructor() {}

	public classes(): string {
		const classes = ["button", `button-${this.variant}`];

		if (this.outline && this.variant !== "primary") {
			classes.push("button--outline");
		}

		if (this.disabled) {
			classes.push("button--disabled");
		}

		return classes.join(" ");
	}
}
