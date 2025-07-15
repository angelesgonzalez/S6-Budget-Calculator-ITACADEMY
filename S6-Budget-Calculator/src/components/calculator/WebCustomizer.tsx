
import { type WebCustomizerSelection } from "../../utils/types";

type Props = {
	webSelection: WebCustomizerSelection;
	onWebCustomization: (
		field: keyof WebCustomizerSelection,
		value: number
	) => void;
};

export const WebCustomizer = ({ webSelection, onWebCustomization }: Props) => {
	const handleIncrement = (field: keyof WebCustomizerSelection) => {
		const newValue = webSelection[field] + 1;
		onWebCustomization(field, newValue);
	};
	const handleDecrement = (field: keyof WebCustomizerSelection): void => {
		const newValue = Math.max(1, webSelection[field] - 1);
		onWebCustomization(field, newValue);
	};
	const handleInputChange = (
		field: keyof WebCustomizerSelection,
		value: string
	): void => {
		const numValue = Math.max(1, parseInt(value) || 1);
		onWebCustomization(field, numValue);
	};

	return (
		<>
			<article id="pages-counter">
				<h3>$ # Pages</h3>
				<button
					onClick={() => {
						handleDecrement("pages");
					}}>
					-
				</button>
				<input
					type="number"
					name="pages"
					value={webSelection.pages}
					onChange={(e) => handleInputChange("pages", e.target.value)}
				/>
				<button
					onClick={() => {
						handleIncrement("pages");
					}}>
					+
				</button>
			</article>

			<article id="languages-counter">
				<h3>$ # Languages</h3>
				<button
					onClick={() => {
						handleDecrement("languages");
					}}>
					-
				</button>
				<input
					type="number"
					name="languages"
					value={webSelection.languages}
					onChange={(e) => handleInputChange("languages", e.target.value)}
				/>
				<button
					onClick={() => {
						handleIncrement("languages");
					}}>
					+
				</button>
			</article>
		</>
	);
};
