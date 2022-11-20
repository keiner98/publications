import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImgNotFoundDirective } from './img-not-found.directive';

@NgModule({
	declarations: [ImgNotFoundDirective],
	imports: [CommonModule],
	exports: [ImgNotFoundDirective],
})
export class DirectivesModule {}
