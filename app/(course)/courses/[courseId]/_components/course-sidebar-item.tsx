"use client";

import { CheckCircle, Lock, PlayCircle } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

import { cn } from "@/lib/utils";

interface CourseSidebarItemProps {
	label: string;
	id: string;
	isCompleted: boolean;
	courseId: string;
	isLocked: boolean;
}

export const CourseSidebarItem = ({
	label,
	id,
	isCompleted,
	courseId,
	isLocked,
}: CourseSidebarItemProps) => {
	const pathname = usePathname();
	const router = useRouter();

	const Icon = isLocked ? Lock : isCompleted ? CheckCircle : PlayCircle;
	const isActive = pathname?.includes(id);

	const onClick = () => {
		router.push(`/courses/${courseId}/chapters/${id}`);
	};

	return (
		<button
			onClick={onClick}
			type="button"
			className={cn(
				"flex items-center gap-x-2 text-slate-500 text-sm font-[500] pl-6 transition-all hover:text-slate-600 hover:bg-slate-300/20",
				isActive &&
					"text-slate-700 bg-slate-200/20 hover:bg-slate-200/20 hover:text-slate-700 dark:hover:bg-slate-700 dark:hover:text-slate-200 dark:bg-slate-700 dark:text-slate-200",
				isCompleted && "text-sky-700 hover:text-sky-700 bg-sky-200/20 dark:bg-sky-700 dark:text-sky-200",
				isCompleted && isActive && "bg-sky-200/20 dark:bg-sky-700 dark:text-sky-200"
			)}
		>
			<div className="flex items-center gap-x-2 py-4">
				<Icon
					size={22}
					className={cn(
						"text-slate-500",
						isActive && "text-slate-700 dark:text-slate-200",
						isCompleted && "text-sky-700 dark:text-sky-200"
					)}
				/>
				{label}
			</div>
			<div
				className={cn(
					"ml-auto opacity-0 border-2 border-slate-700 h-full transition-all dark:border-slate-200",
					isActive && "opacity-100",
					isCompleted && "border-sky-700"
				)}
			/>
		</button>
	);
};
