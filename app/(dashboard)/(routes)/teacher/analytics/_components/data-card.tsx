"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { formatPrice } from "@/lib/format";
import { useEffect, useState } from "react";

interface DataCardProps {
	value: number;
	label: string;
	shouldFormat?: boolean;
}

export const DataCard = ({ value, label, shouldFormat }: DataCardProps) => {
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		setIsLoading(false);
	}, []);

	if (isLoading) {
		return <DataCard.Skeleton />;
	}

	return (
		<Card>
			<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
				<CardTitle className="text-sm font-medium">{label}</CardTitle>
			</CardHeader>
			<CardContent>
				<div className="text-2xl font-bold">
					{shouldFormat ? formatPrice(value) : value}
				</div>
			</CardContent>
		</Card>
	);
};

DataCard.Skeleton = function SkeletonDataCard() {
	return (
		<Card>
			<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
				<CardTitle className="text-sm font-medium">
					<div className="w-20 h-4 bg-gray-200 rounded-md animate-pulse"></div>
				</CardTitle>
			</CardHeader>
			<CardContent>
				<div className="text-2xl font-bold">
					<div className="w-40 h-8 bg-gray-200 rounded-md animate-pulse"></div>
				</div>
			</CardContent>
		</Card>
	);
};
