interface Publication {
	title: string;
	url: string;
}

export interface Publications {
	title: string;
	text: string;
	tags: string[];
	type: 'Normal' | 'slideshow';
	publications: Publication[];
}
