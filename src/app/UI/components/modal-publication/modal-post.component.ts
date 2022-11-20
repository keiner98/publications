import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { PublicationsService } from 'src/app/Infrastructure/services/publications.service';
import { Publications } from '../../../Domain/Entities/publications.interface';

@Component({
	selector: 'app-modal-publication',
	templateUrl: './modal-publication.component.html',
	styleUrls: ['./modal-publication.component.scss'],
})
export class ModalPublicationComponent implements OnInit {
	types = ['Normal', 'Slideshow'];
	formPublication!: FormGroup;
	type = 'Slideshow';
	constructor(
		public dialogRef: MatDialogRef<ModalPublicationComponent>,
		private fb: FormBuilder,
		private publicationsService: PublicationsService
	) {}

	ngOnInit(): void {
		this.formPublication = this.fb.group({
			title: ['', [Validators.required]],
			text: ['', [Validators.required]],
			tags: [''],
			type: ['', [Validators.required]],
			url: [''],

		});
	}



	valueType() {
		this.type = this.type === 'Normal' ? 'Slideshow' : 'Normal';
	}
	save() {
		if (this.formPublication.valid) {
			const publication: Publications = this.formPublication.value;
			if (this.formPublication.value.type === 'Normal') {
				publication.publications = [
					{ title: publication.title, url: this.formPublication.value.url },
				];
			}
			this.publicationsService.createPublication(publication).subscribe(
				(data) => {
					this.dialogRef.close(data.data);
				},
				(err) => console.log(err)
			);
		}
	}
}
