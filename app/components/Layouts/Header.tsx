import ThemeToggle from "./ThemeToggle";
import Image from "next/image";

export default function Header() {
	return (
		<header className="fixed top-0 w-screen flex justify-between items-center h-auto pt-2 px-2">
			<div className="ml-3 flex justify-around items-center">
				<Image src="/favicon.ico" alt="Logo" height="40" width="40" />
				<h1 className="text-xl ml-2 font-bold">Nissmick</h1>
			</div>
			<div className="mr-5">
                <ThemeToggle />
            </div>
		</header>
	);
}
