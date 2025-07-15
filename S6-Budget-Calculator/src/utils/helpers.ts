// ¿Qué hace?: Funciones auxiliares puras
// ¿Por qué?: Reutilización de lógica común
// ¿Cuándo se usa?: En toda la aplicación
// Funciones: formatPrice(), formatDate(), calculateWebPrice();
//  ( Nombre de pàgines + el nombre d'idiomes ) * 30€.

import { type WebCustomizerSelection } from "./types";
import { type Service } from "./types";

export const calculateTotal = (
	selection: Service[],
	webSelection: WebCustomizerSelection
): number => {
	let total = 0;

	const services = selection.filter((service) => service.checked === true);

	total = services.reduce((acc, service) => {
		if (service.id === "web") {
			return (
				acc +
				service.price +
				calculateWebPrice(webSelection.pages, webSelection.languages)
			);
		}
		return acc + service.price;
	}, 0);

	return total;
};

export const calculateWebPrice = (pages: number, languages: number) => {
	return (pages + languages) * 30;
};
