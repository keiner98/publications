import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Publications } from 'src/app/Domain/Entities/publications.interface';
import { Tabs } from 'src/app/Domain/Entities/tabs.interface';
import { PublicationsService } from 'src/app/Infrastructure/services/publications.service';
import { ModalPublicationComponent } from '../../components/modal-publication/modal-post.component';

@Component({
	selector: 'app-publication',
	templateUrl: './publication.component.html',
	styleUrls: ['./publication.component.scss'],
})
export class PublicationComponent implements OnInit {
	tabs: Tabs[] = [
		{ label: 'Normal', value: '1' },
		{ label: 'Slideshow', value: '2' },
	];
	viewSelect = '1';
	publicationsNormal: Publications[] = [];
	publicationsSlideshow: Publications[] = [];
	constructor(public dialog: MatDialog, private publicationsService: PublicationsService) {}

	ngOnInit(): void {
		this.getPublications();
	}

	tabSelect(event: any) {
		this.viewSelect = event;
	}

	getPublications() {
		this.publicationsService.getPublications().subscribe((data) => {
			data.data.forEach((publication) => {
				if (publication.type === 'Normal') {
					this.publicationsNormal.push(publication);
				} else {
					this.publicationsSlideshow.push(publication);
				}
			});
		});
	}

	openModalNewPublication() {
		const dialogRef = this.dialog.open(ModalPublicationComponent, {
			height: '550px',
			width: '700px',
			disableClose: false,
		});
		dialogRef.afterClosed().subscribe((data: Publications) => {
			if (data?.type === 'Normal') {
				this.publicationsNormal = [data, ...this.publicationsNormal];
			} else {
				this.publicationsSlideshow = [data, ...this.publicationsSlideshow];
			}
		});
	}
}
