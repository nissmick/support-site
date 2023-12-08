import ThemeToggle from "./ThemeToggle";

export default function Header() {
	return (
		<header className="fixed top-0 w-screen flex justify-between items-center h-auto">
            <h1 className="text-xl ml-3">Nissmick</h1>
			<ThemeToggle />
		</header>
	);
}
