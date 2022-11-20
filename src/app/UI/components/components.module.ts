import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalPublicationComponent } from './modal-publication/modal-post.component';
import { NormalComponent } from './normal/normal.component';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { CommonsModule } from '../common/commons.module';
import { MatNativeDateModule } from '@angular/material/core';
import { MaterialModule } from '../material/material.module';
import {ChipsModule} from 'primeng/chips';
import { DropdownModule } from "primeng/dropdown";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
	declarations: [ModalPublicationComponent, NormalComponent, SlideshowComponent],
	imports: [
		CommonModule,
		CommonsModule,
    MaterialModule,
		MatNativeDateModule,
    ChipsModule,
    FormsModule,
    ReactiveFormsModule,
    DropdownModule
	],
	exports: [ModalPublicationComponent, NormalComponent, SlideshowComponent],
})
export class ComponentsModule {}
