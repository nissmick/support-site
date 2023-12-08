import Image from "next/image";
import Layout from "./components/Layouts/Layout";
import CardComponent from "./components/Card/Card";

export type Card = {
	title: string;
	description: string;
	icon: `/${string}`;
};

const CardData: Card[] = [
	{
		title: "Lots of jokes with a sense of humor!",
		description: "We will give you a happy time :)",
		icon: "/card/joke.png"
	},
	{
		title: "We will never discriminate against you.",
		description:
			"If you were a dog, I'd be ready to accept it. <br /> But only if you can solve the `Robot test` :(",
		icon: "/card/dog.png"
	}
];

export default function Home() {
	return (
		<Layout>
			<div className="w-full h-[500px] flex justify-around items-center">
				<Image src="/cover.png" alt="Cover" height="400" width="400" className="absolute z-1 md:static block" />
				<div className="md:pr-5 relative z-2 bg-white dark:bg-black p-5 rounded-lg md:bg-none">
					<h2 className="text-5xl font-bold">Nissmick</h2>
					<h3>Next generaton Chat Application</h3>
				</div>
			</div>
			{CardData.map((content, index) => {
				return (
					<div key={index}>
						<CardComponent {...content} type={index % 2} />
					</div>
				);
			})}
		</Layout>
	);
}
