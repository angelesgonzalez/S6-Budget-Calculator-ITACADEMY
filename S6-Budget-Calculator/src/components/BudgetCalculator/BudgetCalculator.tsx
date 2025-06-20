import { ServiceCard } from "../ServiceCard/ServiceCard";
import "./BudgetCalculator.css";
import { services } from "../../data/services";
import { useState } from "react";

export const BudgetCalculator = () => {
	const [isChecked, setChecked] = useState(
		new Array(services.length).fill(false)
	);

	const [totalBudget, setTotalBudget] = useState(0);

	const handleCheckboxChange = (index: number) => {
		const updated = [...isChecked];
		updated[index] = !updated[index];
		setChecked(updated);
		const servicePrice = services[index].price;

		if (updated[index]) {
			setTotalBudget((prev) => prev + servicePrice);
		} else {
			setTotalBudget((prev) => prev - servicePrice);
		}
	};

	return (
		<>
			<form>
				{services.map((item, index) => (
					<ServiceCard
						key={item.title}
						name={item.title}
						title={item.title}
						description={item.description}
						price={item.price}
						value={isChecked[index]}
						onChange={() => handleCheckboxChange(index)}
					/>
				))}
			</form>

			<h3>Total Budget: {totalBudget}</h3>
		</>
	);
};
