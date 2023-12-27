import { LucideIcon } from "lucide-react";

import { IconBadge } from "@/components/icon-badge";
import { Skeleton } from "@/components/ui/skeleton";

interface InfoCardProps {
	numberOfItems: number;
	variant?: "default" | "success";
	label: string;
	icon: LucideIcon;
}

export const InfoCard = ({
	variant,
	icon: Icon,
	numberOfItems,
	label,
}: InfoCardProps) => {
	return (
		<div className="border rounded-md flex items-center gap-x-2 p-3">
			<IconBadge variant={variant} icon={Icon} />
			<div>
				<p className="font-medium">{label}</p>
				<p className="text-gray-500 text-sm">
					{numberOfItems} {numberOfItems === 1 ? "Course" : "Courses"}
				</p>
			</div>
		</div>
	);
};

InfoCard.Skeleton = function SkeletonInfoCard() {
	return (
		<div className="border rounded-md flex items-center gap-x-2 p-3">
			<Skeleton className="w-10 h-10" />
			<div className="flex-1">
				<Skeleton className="w-20 h-4" />
				<Skeleton className="w-10 h-3 mt-1" />
			</div>
		</div>
	);
};
