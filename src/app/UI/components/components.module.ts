import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalPublicationComponent } from './modal-publication/modal-post.component';
import { CommonsModule } from '../common/commons.module';
import { MatNativeDateModule } from '@angular/material/core';
import { MaterialModule } from '../material/material.module';
import {ChipsModule} from 'primeng/chips';
import { DropdownModule } from "primeng/dropdown";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardPublicationsComponent } from './card-publications/card-publications.component';
import { ChipModule } from 'primeng/chip';
import { DirectivesModule } from 'src/app/Infrastructure/directive/directives.module';
import { ViewPublicationComponent } from './view-publication/view-publication.component';
import {GalleriaModule} from 'primeng/galleria';

@NgModule({
	declarations: [ModalPublicationComponent, CardPublicationsComponent, ViewPublicationComponent],
	imports: [
		CommonModule,
		CommonsModule,
    MaterialModule,
		MatNativeDateModule,
    ChipsModule,
    ChipModule,
    FormsModule,
    DirectivesModule,
    ReactiveFormsModule,
    DropdownModule,
    GalleriaModule
	],
	exports: [ModalPublicationComponent,CardPublicationsComponent],
})
export class ComponentsModule {}
