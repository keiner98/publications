import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Tabs } from 'src/app/Domain/Entities/tabs.interface';

@Component({
	selector: 'app-tabs',
	templateUrl: './tabs.component.html',
	styleUrls: ['./tabs.component.scss'],
})
export class TabsComponent implements OnInit {
	@Input() view: string = '1';
	@Input() tabs: Tabs[] = [];
	@Output() private active = new EventEmitter<string>();
	constructor() {}

	ngOnInit(): void {
		this.view = '1';
		this.active.emit('1');
	}
	selectionContent(value: string) {
		this.view = value;
		this.active.emit(value);
	}
}
