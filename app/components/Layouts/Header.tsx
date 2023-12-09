import ThemeToggle from "./ThemeToggle";
import Image from "next/image";
import HeaderTip from "./HeaderTip";

const pages = [
	{
		title: "Blog & News",
		path: "/articles"
	}
];

const sns = [
    {
        title: "Discord",
        path: "https://discord.gg/nissmick"
    },
    {
        title: "Youtube",
        path: "https://www.youtube.com/@nissmick"
    },
    {
        title: "GitHub",
        path: "https://github.com/nissmick"
    }
]

export default function Header() {
	return (
		<header className="fixed top-0 z-[43044] w-screen flex justify-between items-center h-auto pt-2 px-2">
			<a href="/" className="ml-3 flex justify-around items-center">
				<Image src="/favicon.ico" alt="Logo" height="40" width="40" />
				<h1 className="text-xl ml-2 font-bold hidden sm:inline-block">Nissmick</h1>
			</a>
			<div className="mr-5 flex items-center space-x-5">
				<HeaderTip title="Pages" tips={[...pages]} />
				<HeaderTip title="Links" tips={[...sns]} />
				<ThemeToggle />
			</div>
		</header>
	);
}
