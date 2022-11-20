import { Directive, ElementRef, HostListener, Input } from '@angular/core';
;
@Directive({
	selector: '[imgNotFound]',
})
export class ImgNotFoundDirective {
	@Input() imgErrorCustom!: string;

	constructor(private elementRef: ElementRef) {}

	@HostListener('error', ['$event'])
	loadImage() {
		const element = this.elementRef.nativeElement;
		element.src = this.imgErrorCustom || '../../assets/images/default-image.svg';
	}
}
