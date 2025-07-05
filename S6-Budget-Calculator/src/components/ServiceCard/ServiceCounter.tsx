import { IndividualService } from "./IndividualService";

export const ServiceCounter = () => {
	return (
		<>
			<IndividualService title="Num. Pages" id="pages" />
			<IndividualService title="Num. Languages" id="languages" />
		</>
	);
};
