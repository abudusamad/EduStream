import { cn } from "@/lib/utils";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { IconType } from "react-icons";

import qs from "query-string";
import { useEffect, useState } from "react";

interface CategoryItemProps {
	label: string;
	value?: string;
	icon?: IconType;
}

export const CategoryItem = ({
	label,
	value,
	icon: Icon,
}: CategoryItemProps) => {
	const pathname = usePathname();
	const router = useRouter();
	const searchParams = useSearchParams()

	const [isLoading, setIsLoading] = useState(true);

	const currentCategoryId = searchParams.get("categoryId");
	const currentTitle = searchParams.get("title");

	const isSelected = currentCategoryId === value;

	const onClick = () => {
		const url = qs.stringifyUrl(
			{
				url: pathname,
				query: {
					categoryId: isSelected ? null : value,
					title: currentTitle,
				},
			},
			{ skipNull: true, skipEmptyString: true }
		);
		router.push(url);
	};

	useEffect(() => {
		setIsLoading(false);
	}, []);

	if (isLoading) {
		return <CategoryItem.Skeleton />;
	}

	return (
        <button
            onClick={onClick}
			className={cn(
				"py-2 px-3 text-sm border border-slate-200 rounded-full flex items-center",
				isSelected && "border-sky-700 bg-sky-200/20 text-sky-800"
			)}
			type="button"
		>
			{Icon && <Icon size={20} />}
			<div className="truncate pl-1">{label}</div>
		</button>
	);
};

CategoryItem.Skeleton =function Skeleton() {
	return (
		<div className="py-2 px-3 text-sm border border-slate-200 rounded-full flex items-center">
			<div className="w-5 h-5 rounded-full bg-slate-200 animate-pulse" />
			<div className="w-12 h-4 ml-1 rounded-full bg-slate-200 animate-pulse" />
		</div>
	);
}
