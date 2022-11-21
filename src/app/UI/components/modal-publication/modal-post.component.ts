import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
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
	type = 'Normal';
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
			type: ['Normal', [Validators.required]],
			url: ['', [Validators.required]],
			publications: this.fb.array([]),
		});
	}
	add() {
		const formPublications = this.fb.group({
			title: ['', [Validators.required]],
			url: ['', [Validators.required]],
		});
		this.publications.push(formPublications);
	}
	remove(i: number) {
		this.publications.removeAt(i);
	}

	get publications() {
		return this.formPublication.controls['publications'] as FormArray;
	}

	valueType() {
		this.type = this.type === 'Normal' ? 'Slideshow' : 'Normal';
		if (this.type === 'Normal') {
			this.publications.clear();
			this.formPublication.controls['url'].enable();
			this.formPublication.controls['url'].setValidators([Validators.required]);
		} else {
			this.formPublication.controls['url'].disable();
		}
		this.formPublication.controls['url'].updateValueAndValidity();
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
				({ data }) => {
					this.dialogRef.close(data);
				},
				(err) => console.log(err)
			);
		}
	}
}
