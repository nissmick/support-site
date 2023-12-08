import { Inter } from "next/font/google";
import "./globals.css";
import { MetaDataLike } from "./types/props";
import Heads from "./components/Layouts/Heads";

const inter = Inter({ subsets: ["latin"] });

const siteName = "Nissmicl Offical Site";
const description = "Next generation Chat app";
const url = "https://nissmick.net";

export const metadata: MetaDataLike = {
	title: {
		default: siteName,
		template: `%s - ${siteName}`
	},
	description,
	openGraph: {
		title: siteName,
		description,
		url,
		siteName,
		locale: "ja_JP",
		type: "website"
	},
	twitter: {
		card: "summary_large_image",
		title: siteName,
		description,
		site: "@amex2189",
		creator: "@amex2189" // TODO
	},
	verification: {
		google: "wip"
	},
	alternates: {
		canonical: url
	}
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="ja">
			<head>
				<Heads {...metadata} />
			</head>
			<body className={inter.className}>
				<div
					id="__nuxt"
					style={{
						display: "container"
					}}>
					{children}
				</div>
			</body>
		</html>
	);
}
