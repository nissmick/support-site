import { LayoutProps } from "@/app/types/global";
import Header from "./Header";

export default function Layout(props: LayoutProps) {
	return (
		<div>
			<Header />
			{props.children}
		</div>
	);
}
