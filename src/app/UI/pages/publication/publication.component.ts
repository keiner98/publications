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
		{ label: 'All Publications', value: '1' },
		{ label: 'Normal', value: '2' },
		{ label: 'Slideshow', value: '3' },
	];
	viewSelect = '1';
	publicationsNormal: Publications[] = [];
	publicationsSlideshow: Publications[] = [];
	publications: Publications[] = [];

	constructor(public dialog: MatDialog, private publicationsService: PublicationsService) {}

	ngOnInit(): void {
		this.getPublications();
	}

	tabSelect(event: any) {
		this.viewSelect = event;
	}

	getPublications() {
		this.publicationsService.getPublications().subscribe(({ data }) => {
			this.publications = data;
			this.publicationsNormal = [];
			this.publicationsSlideshow = [];
			data.forEach((publication) => {
				if (publication.type === 'Normal') {
					this.publicationsNormal.push(publication);
				} else {
					this.publicationsSlideshow.push(publication);
				}
			});
		});
	}

	openModal(e: any) {
		const dialogRef = this.dialog.open(ModalPublicationComponent, {
			height: '650px',
			width: '700px',
			disableClose: false,
		});
		dialogRef.afterClosed().subscribe((data: Publications) => {
			if (data) {
				this.publications = [data, ...this.publications];
				if (data?.type === 'Normal') {
					this.publicationsNormal = [data, ...this.publicationsNormal];
				} else {
					this.publicationsSlideshow = [data, ...this.publicationsSlideshow];
				}
			}
		});
	}
}
