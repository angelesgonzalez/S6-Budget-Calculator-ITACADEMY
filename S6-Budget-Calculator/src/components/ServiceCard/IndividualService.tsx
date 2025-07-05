type Props = {
	title: string;
	id: string;
};

export const IndividualService = ({ title, id }: Props) => {
	return (
		<>
			<article>
				<button> - </button>
				<label htmlFor="numberOfPages">{title}</label>
				<input id={id} type="number" name="numberOfPages" min="1" required />
				<button> + </button>
			</article>
		</>
	);
};
