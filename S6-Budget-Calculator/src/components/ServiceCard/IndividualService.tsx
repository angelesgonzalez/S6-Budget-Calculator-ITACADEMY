import "./IndividualService.css";

type Props = {
	title: string;
	id: string;
};

export const IndividualService = ({ title, id }: Props) => {
	return (
		<>
			<article className="service-counter">
				<label htmlFor={id}>{title}</label>
				<div className="counter-input-wrapper">
					<button className="counter-btn">−</button>
					<input
						id={id}
						type="number"
						name={id}
						min="1"
						required
						className="counter-input"
						readOnly
						value={1} // optional: make it controlled later
					/>
					<button className="counter-btn">+</button>
				</div>
			</article>
		</>
	);
};
