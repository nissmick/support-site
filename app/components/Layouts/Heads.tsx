import { NextSeo } from "next-seo";
import { MetaDataLike } from "../../types/props";

export default function Heads(metadata: MetaDataLike) {
	return (
		<>
			<meta name="generator" content="Astro v0.00" />
		</>
	);
}
