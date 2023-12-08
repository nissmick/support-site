import type { Metadata } from "next";

export type MetaDataLike =
	| MetaData
	| {
			title: string;
			description: string;
			[key: string]: Object;
	  };

export interface LayoutProps {
	children: React.ReactNode;
}
