import Image from "next/image";
import { Card as TypeCard } from "../../page";

export default function Card(
	props: TypeCard & {
		type: number;
	}
) {
	const icon = (
		<div className="w-1/2 flex justify-center items-center">
			<Image src={props.icon} alt="Cover" height="300" width="300" />
		</div>
	);

	const description = (
		<div className="w-1/2 flex flex-col items-center">
			<h4 className="text-xl font-bold">{props.title}</h4>
			<h5
				dangerouslySetInnerHTML={{
					__html: props.description
				}}></h5>
		</div>
	);

	return (
		<div
			className={"w-full px-5 flex items-center justify-around " + (props.type === 0 ? "card-x" : "")}
        >
			{props.type === 0 ? (
				<>
					{icon}
					{description}
				</>
			) : (
				<>
					{description}

					{icon}
				</>
			)}
		</div>
	);
}
