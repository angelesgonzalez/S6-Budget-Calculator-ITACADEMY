export interface Service {
	id: string;
	name: string;
	selected: boolean;
	price: number;
	description: string;
}

export interface WebCustomizer {
	pages: number;
	languages: number;
}
