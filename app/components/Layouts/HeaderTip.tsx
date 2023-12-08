import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";

export default function HeaderTop(props: {
	title: string;
	tips: {
		title: string;
		path: `/${string}`;
	}[];
}) {
	return (
		<div className="">
			<DropdownMenu>
				<DropdownMenuTrigger className="border-none outline-none">{props.title}</DropdownMenuTrigger>
				<DropdownMenuContent>
					<DropdownMenuLabel>{props.title}</DropdownMenuLabel>
					<DropdownMenuSeparator />
					{props.tips.map((c, i) => {
						return (
							<a href={c.path} key={i}>
								<DropdownMenuItem>{c.title}</DropdownMenuItem>
							</a>
						);
					})}
				</DropdownMenuContent>
			</DropdownMenu>
		</div>
	);
}
