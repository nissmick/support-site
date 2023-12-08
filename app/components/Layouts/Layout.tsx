import { LayoutProps } from "@/app/types/global";
import Header from "./Header";

export default function Layout(props: LayoutProps) {
	return (
		<div>
			<Header />
			<div className="w-screen min-h-screen">
                {props.children}
            </div>
		</div>
	);
}
