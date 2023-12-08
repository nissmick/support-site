import Image from "next/image";
import Layout from "./components/Layouts/Layout";

export default function Home() {
	return (
		<Layout>
			<div className="w-full h-[500px] flex justify-around items-center">
				<Image src="/cover.png" alt="Cover" height="400" width="400" class="hidden md:block" />
				<div class="pr-0 md:pr-5">
					<h2 className="text-5xl font-bold">Nissmick</h2>
                    <h3>Next generaton Chat Application</h3>
				</div>
			</div>
		</Layout>
	);
}
