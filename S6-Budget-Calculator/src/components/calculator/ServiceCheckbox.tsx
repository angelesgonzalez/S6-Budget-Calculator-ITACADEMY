// ¿Qué hace?: Checkbox individual para cada servicio (SEO, ADS, WEB)
// ¿Por qué?: Componente reutilizable para los 3 servicios
// ¿Cuándo se usa?: 3 veces en la calculadora (una por servicio)

// Responsabilidad: Renderizar un checkbox con precio y manejar su estado
// Props que recibe: service (objeto con name, price, checked), onChange
// Ejemplo de uso:

// "SEO Campaign - 300€" ☑️
// "Advertising - 400€" ☐
// "Website - 500€" ☑️

import { type Service } from "../../utils/types";

type Props = {
	service: Service;
	onChange: () => void;
};

export const ServiceCheckbox = ({ service, onChange }: Props) => {
	return (
		<div className="service-card">
			<label htmlFor={service.id}>{service.name}</label>
			<div>{service.description}</div>
			<span>{service.price}€</span>
			<input
				type="checkbox"
				id={service.id}
				name={service.name}
				checked={service.checked}
				onChange={onChange}
			/>
			<span>Add</span>
		</div>
	);
};
