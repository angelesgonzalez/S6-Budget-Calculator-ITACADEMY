import "./IndividualService.css";

type Props = {
	title: string;
	id: string;
	quantity?: number;
	languages?: number;
	onWebServiceChange: (id: string, key: string, newValue: number) => void;
};

export const IndividualService = ({
	title,
	id,
	quantity,
	languages,
	onWebServiceChange,
}: Props) => {
	const quantityCopy = quantity ?? 1;
	const languagesCopy = languages ?? 1;

	const currentValue = id === "quantity" ? quantityCopy : languagesCopy;

	// const handleClick = (operation: "add" | "sub") => {

	// };

	const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const newValue = Math.max(0, parseInt(event.target.value));
		if (id === "quantity") {
			onWebServiceChange("web", "quantity", newValue);
		} else {
			onWebServiceChange("web", "languages", newValue);
		}
	};

	console.log("Current Value", currentValue);

	return (
		<>
			<article className="service-counter">
				<label htmlFor={id}>{title}</label>
				<div className="counter-input-wrapper">
					<button className="counter-btn" onClick={() => {}}>
						−
					</button>
					<input
						id={id}
						type="number"
						name={id}
						min="0"
						required
						className="counter-input"
						value={currentValue}
						onChange={handleOnChange}
					/>
					<button className="counter-btn" onClick={() => {}}>
						+
					</button>
				</div>
			</article>
		</>
	);
};
