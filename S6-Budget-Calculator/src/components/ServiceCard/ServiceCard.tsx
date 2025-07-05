import "./ServiceCard.css";
import { ServiceCounter } from "./ServiceCounter";

type Props = {
	title: string;
	description: string;
	price: number;
	name: string;
	selected: boolean;
	id: string;
	onChange: () => void;
};

export const ServiceCard = ({
	title,
	description,
	price,
	name,
	selected,
	id,
	onChange,
}: Props) =>


(

	
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
			</div>
			<div className="service-card__counter">
				{" "}
				{id === "web" && selected && <ServiceCounter />}
			</div>
		</article>
	</>
);
