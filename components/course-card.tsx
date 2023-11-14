import Image from "next/image";
import Link from "next/link";
import { IconBadge } from "./icon-badge";
import { BookOpen } from "lucide-react";

interface CourseCardProps {
	id: string;
	title: string;
	imageUrl: string;
	chapterLength: number;
	price: number;
	progress: number | null;
	category: string;
}

export const CourseCard = ({
	id,
	title,
	imageUrl,
	chapterLength,
	price,
	progress,
	category,
}: CourseCardProps) => {
	return (
		<Link href={`/courses/${id}`}>
			<div className="group hover:shadow-sm transition overflow-hidden border rounded-lg p-3 h-full">
				<div className="relative w-full aspect-video rounded-md overflow-hidden">
					<Image fill className="object-cover" alt="title" src={imageUrl} />
                </div>
                <div className="flex flex-col pt-2">
                    <div className="text-lg md:text-base font-medium group-hover:text-sky-700 transition line-clamp-2">
                        {title}
                    </div>
                    <p className="text-sm text-muted-foreground">
                        {category}
                    </p>
                    <div
                        className="my-3 flex items-center gap-x-2 text-sm md:text-xs "
                    >
                        <div className="flex items-center gap-x-1 text-slate-500">
                            <IconBadge size="sm" icon={BookOpen} />
                            <span>
                                {chapterLength} {chapterLength === 1 ? "Chapter" : "Chapters"}
                            </span>
                        </div>
                    </div>
                </div>
			</div>
		</Link>
	);
};
