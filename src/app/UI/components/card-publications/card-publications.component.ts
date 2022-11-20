import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Publications } from '../../../Domain/Entities/publications.interface';

@Component({
	selector: 'app-card-publications',
	templateUrl: './card-publications.component.html',
	styleUrls: ['./card-publications.component.scss'],
})
export class CardPublicationsComponent implements OnInit {
	@Input() publication: Publications[] = [];
	@Output() openModal = new EventEmitter<boolean>();
	constructor() {}

	ngOnInit(): void {}
	openModalNewPublication() {
		this.openModal.emit(true);
	}
}
