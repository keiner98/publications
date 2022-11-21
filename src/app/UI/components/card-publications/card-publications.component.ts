import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Publications } from '../../../Domain/Entities/publications.interface';
import { ViewPublicationComponent } from '../view-publication/view-publication.component';

@Component({
	selector: 'app-card-publications',
	templateUrl: './card-publications.component.html',
	styleUrls: ['./card-publications.component.scss'],
})
export class CardPublicationsComponent implements OnInit {
	@Input() publication: Publications[] = [];
	@Output() openModal = new EventEmitter<boolean>();
	constructor(public dialog: MatDialog) {}

	ngOnInit(): void {}
	openModalNewPublication() {
		this.openModal.emit(true);
	}
	viewPublication(publicationItem: Publications) {
    const dialogRef = this.dialog.open(ViewPublicationComponent, {
			height: '850px',
			width: '700px',
      data:publicationItem,
			disableClose: false,
		});
  }
}
