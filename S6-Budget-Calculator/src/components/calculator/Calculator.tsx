// ¿Qué hace?: Componente principal que orquesta toda la calculadora
// ¿Por qué?: Coordina todos los sub-componentes y maneja el estado principal
// ¿Cuándo se usa?: Es el "cerebro" de la página calculadora

// Responsabilidad: Manejar estados principales y coordinar sub-componentes
// Estados que maneja: services, pages, languages, isAnnual
// Contiene: ServiceCheckbox x3, WebCustomizer, PriceDisplay

import { ServiceCheckbox } from "./ServiceCheckbox";
import { services } from "../../data/services";
import { useState } from "react";

export const Calculator = () => {
	const [selection, setSelection] = useState(services);

	const handleCheckboxChange = (id: string) => {
		setSelection((prevSelection) =>
			prevSelection.map((service) =>
				service.id === id ? { ...service, checked: !service.checked } : service
			)
		);
	};

	return (
		<>
			{selection.map((service) => {
				return (
					<ServiceCheckbox
						key={service.id}
						service={service}
						onChange={() => handleCheckboxChange(service.id)}
					/>
				);
			})}
		</>
	);
};
