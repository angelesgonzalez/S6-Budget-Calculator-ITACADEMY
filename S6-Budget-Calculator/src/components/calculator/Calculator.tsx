// ¿Qué hace?: Componente principal que orquesta toda la calculadora
// ¿Por qué?: Coordina todos los sub-componentes y maneja el estado principal
// ¿Cuándo se usa?: Es el "cerebro" de la página calculadora

// Responsabilidad: Manejar estados principales y coordinar sub-componentes
// Estados que maneja: services, pages, languages, isAnnual
// Contiene: ServiceCheckbox x3, WebCustomizer, PriceDisplay
import { useMemo } from "react";
import { ServiceCheckbox } from "./ServiceCheckbox";
import { services } from "../../data/services";
import { useState } from "react";
import { WebCustomizer } from "./WebCustomizer";
import { calculateTotal } from "../../utils/helpers";

export const Calculator = () => {
	const [selection, setSelection] = useState(services);
	const [webSelection, setWebSelection] = useState({ pages: 0, languages: 0 });
	const total = useMemo(
		() => calculateTotal(selection, webSelection),
		[selection, webSelection]
	);

	const handleCheckboxChange = (id: string) => {
		setSelection((prevSelection) =>
			prevSelection.map((service) =>
				service.id === id ? { ...service, checked: !service.checked } : service
			)
		);
	};

	const handleWebCustomization = (field: string, newValue: number) => {
		setWebSelection((prevSelection) => ({
			...prevSelection,
			[field]: newValue,
		}));
	};

	return (
		<>
			{selection.map((service) => {
				return (
					<ServiceCheckbox
						key={service.id}
						service={service}
						onChange={() => handleCheckboxChange(service.id)}>
						<WebCustomizer
							webSelection={webSelection}
							onWebCustomization={handleWebCustomization}
						/>
					</ServiceCheckbox>
				);
			})}

			<h2>Total: {total}</h2>
		</>
	);
};
