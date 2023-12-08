import { LayoutProps } from "@/app/types/global";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout(props: LayoutProps) {
	return (
		<div className="w-full min-h-screen">
			<Header />
			<div className="">{props.children}</div>
			<Footer />
		</div>
	);
}
