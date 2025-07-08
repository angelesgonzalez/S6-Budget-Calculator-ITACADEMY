import "./ServiceCard.css";
// import { ServiceCounter } from "./ServiceCounter";
import { IndividualService } from "./IndividualService";

type Props = {
	title: string;
	description: string;
	price: number;
	name: string;
	selected: boolean;
	id: string;
	quantity?: number;
	languages?: number;
	onWebServiceChange: (id: string, key: string, newValue: number) => void;
	onChange: () => void;
};

export const ServiceCard = ({
	title,
	description,
	price,
	name,
	selected,
	id,
	quantity,
	languages,
	onWebServiceChange,
	onChange,
}: Props) => (
	<>
		<article className="service-card">
			<div className="service-card__info">
				<h3 className="service-card__title">{title}</h3>
				<p className="service-card__description">{description}</p>
			</div>

			<div className="service-card__right">
				<h2 className="service-card__price">
					{price}
					<span className="service-card__currency">€</span>
				</h2>

				<div className="service-card__checkbox">
					<input
						type="checkbox"
						id={name}
						name={name}
						onChange={onChange}
						checked={selected}
					/>
					<label htmlFor={name}>Add</label>
				</div>

				{/* Mostrar el contador solo si está seleccionado y es el servicio "web" */}
				{id === "web" && selected && (
					<div className="service-card__counter">
						{/* <ServiceCounter
							onWebServiceChange={onWebServiceChange}
							quantity={quantity || 1}
							languages={languages || 1}
						/> */}

						<IndividualService
							title="# Pages"
							id="quantity"
							quantity={quantity}
							onWebServiceChange={onWebServiceChange}
						/>

						<IndividualService
							title="# Languages"
							id="languages"
							languages={languages}
							onWebServiceChange={onWebServiceChange}
						/>
					</div>
				)}
			</div>
		</article>
	</>
);
