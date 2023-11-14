import Image from "next/image";
import Link from "next/link";

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
			<div className="">
				<div className="">
					<Image fill className="object-cover" alt="title" src={imageUrl} />
				</div>
			</div>
		</Link>
	);
};
