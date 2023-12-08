import Image from "next/image";
import Layout from "./components/Layouts/Layout";

export default function Home() {
	return (
		<Layout>
			<div className="w-full h-[500px] flex flex-col justify-center items-center">
				<Image src="/cover.png" alt="Cover" height="400" width="400" />
			</div>
		</Layout>
	);
}
