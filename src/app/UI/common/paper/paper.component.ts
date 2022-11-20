import { Component, Input } from "@angular/core";
import { ElevationNumber, ElevationString, Round } from "../types/types";
import { SizesUtil } from "../utils/Sizes.util";

@Component({
	selector: "app-paper",
	templateUrl: "./paper.component.html",
	styleUrls: ["./paper.component.scss"],
})
export class PaperComponent {
	@Input() width!: number | string;
	@Input() height!: number | string;
	@Input() elevation: ElevationNumber | ElevationString = 0;
	@Input() color: string = "#fff";
	@Input() round: Round = 1;
	@Input() outline: string = "none";
	@Input() activeSelect: boolean = false;
	@Input() selected: boolean = false;
	@Input() outlineWidth: number | string = 1;
	@Input() circle: boolean = false;
	@Input() center: boolean = false;
	@Input() padding: string = "0";
  @Input() activeHover: boolean = false;

	constructor(private sizeUtil: SizesUtil) {}

	styles() {
		return {
			width: this.sizeUtil.getSize(this.width, 200),
			height: this.sizeUtil.getSize(this.height, 200),
			padding: this.padding,
			border: `${this.outlineWidth}px ${this.outline} rgba(0,0,0,0.12)`,
			"background-color": this.color,
		};
	}

	classes() {
		let classes: string[] = [];

		classes.push(`elevation-${this.elevation}`, `round-${this.round}`);

		if (this.selected) {
			classes.push("select-item");
		}

		if (this.activeSelect) {
			classes.push("active-select");
		}

		if (this.circle) {
			classes.push("round-circle");
		}

		if (this.center) {
			classes.push("center");
		}

    if (this.activeHover) {
      classes.push("hover");
    }

		return classes.join(" ");
	}
}
