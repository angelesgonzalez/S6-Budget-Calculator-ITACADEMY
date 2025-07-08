import { ServiceCard } from "../ServiceCard/ServiceCard";
import "./BudgetCalculator.css";
import { services } from "../../data/services";
import { useEffect, useState } from "react";

type Service = {
	id: string;
	title: string;
	description: string;
	price: number;
	quantity: number;
	languages?: number;
	selected: boolean;
};

//Converting services from an arrays of objects to an object
const initialSelection = services.reduce((accumulator, service) => {
	accumulator[service.id] = service;
	return accumulator;
}, {} as Record<string, Service>);

const calculateTotal = (stateObj: Record<string, Service>): number => {
	return Object.values(stateObj).reduce((total, service) => {
		if (!service.selected) return total;

		if (service.id === "web") {
			const pages = service.quantity;
			const languages = service.languages ?? 0;
			return total + service.price + (pages + languages) * 30;
		}

		return total + service.price;
	}, 0);
};

export const BudgetCalculator = () => {
	const [selection, setSelection] = useState<{ [key: string]: Service }>(
		initialSelection
	);

	const [total, setTotal] = useState(0);

	const handleCheckboxChange = (id: string) => {
		setSelection((prev) => ({
			...prev,
			[id]: {
				...prev[id],
				selected: !prev[id].selected,
			},
		}));
	};

	useEffect(() => {
		setTotal(calculateTotal(selection));
	}, [selection]);

	const handleWebServices = (id: string, key: string, newValue: number) => {
		setSelection((prev) => ({
			...prev,
			[id]: {
				...prev[id],
				[key]: newValue,
			},
		}));
	};

	useEffect(() => {
		console.log("🔍 Selection after change:", selection.web);
	}, [selection]);

	return (
		<>
			<form>
				{Object.values(selection).map((item) =>
					item.id === "web" ? (
						<ServiceCard
							id={item.id}
							key={item.id}
							name={item.title}
							title={item.title}
							description={item.description}
							price={item.price}
							selected={item.selected}
							onWebServiceChange={handleWebServices}
							onChange={() => handleCheckboxChange(item.id)}
							quantity={item.quantity}
							languages={item.languages}
						/>
					) : (
						<ServiceCard
							id={item.id}
							key={item.id}
							name={item.title}
							title={item.title}
							description={item.description}
							price={item.price}
							selected={item.selected}
							onWebServiceChange={handleWebServices}
							onChange={() => handleCheckboxChange(item.id)}
						/>
					)
				)}
			</form>

			<h3>Total Budget: {total} </h3>
		</>
	);
};
