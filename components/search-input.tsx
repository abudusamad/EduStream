"use client";
import { Search } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import qs from "query-string";
import { useCallback, useEffect, useState } from "react";

import { Input } from "@/components/ui/input";
import { useDebounce } from "@/hooks/use-debounce";

export const SearchInput = () => {
	const [value, setValue] = useState("");

	const searchParams = useSearchParams();
	const router = useRouter();
	const pathname = usePathname();

	const debouncedValue = useDebounce(value, 500);

	const currentCategoryId = searchParams.get("categoryId");

	useEffect(() => {
		const url = qs.stringifyUrl(
			{
				url: pathname,
				query: {
					categoryId: currentCategoryId,
					title: debouncedValue,
				},
			},
			{ skipEmptyString: true, skipNull: true }
		);

		router.push(url);
	}, [debouncedValue, currentCategoryId, router, pathname]);

	const onChange = useCallback(
		(e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value),
		[]
	);
	return (
		<div className="relative">
			<Search className="h-4 w-4 absolute top-3 left-3 text-slate-600" />
			<Input
				value={value}
				onChange={onChange}
				className="w-full md:w-[300px] pl-9 rounded-full bg-slate-100 focus-visible:ring-slate-200"
				placeholder="Search for a course"
			/>
		</div>
	);
};
