import { Component, Input } from "@angular/core";

@Component({
	selector: "mango-card",
	templateUrl: "./card.component.html",
	styleUrls: ["./card.component.scss"],
})
export class CardComponent {
	@Input() selected: boolean = false;
	@Input() activeSelect: boolean = false;
  @Input() activeHover: boolean = false;

	constructor() {}
}
