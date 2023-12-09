import { LayoutProps } from "@/app/types/global";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout(props: LayoutProps) {
	return (
		<div className="w-full min-h-screen">
			<Header />
			<div className="min-h-[90vh]">{props.children}</div>
			<Footer />
		</div>
	);
}
