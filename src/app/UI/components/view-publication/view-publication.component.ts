import { Component, OnInit,Inject } from '@angular/core';
import { Publications } from '../../../Domain/Entities/publications.interface';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
	selector: 'app-view-publication',
	templateUrl: './view-publication.component.html',
	styleUrls: ['./view-publication.component.scss'],
})
export class ViewPublicationComponent implements OnInit {

	constructor(public dialogRef: MatDialogRef<ViewPublicationComponent>, @Inject(MAT_DIALOG_DATA) public publication: Publications = {} as Publications) {}

	ngOnInit(): void {}
}
