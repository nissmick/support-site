import { Inter } from "next/font/google";
import "./globals.css";
import { MetaDataLike } from "./types/global";
import Heads from "./components/Layouts/Heads";
import { ThemeProvider } from "./components/Layouts/Theme";

const inter = Inter({ subsets: ["latin"] });

const siteName = "Nissmick Offical Site";
const description = "Next generation Chat app";
const url = "https://nissmick.com";

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
	},
	metadataBase: new URL(url)
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="ja">
			<head prefix="og: http://ogp.me/ns# website: http://ogp.me/ns/website#">
				<Heads {...metadata} />
			</head>
			<body className={inter.className}>
				<ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
					<div
						id="__nuxt"
						style={{
							display: "container"
						}}>
						{children}
					</div>
				</ThemeProvider>
			</body>
		</html>
	);
}
