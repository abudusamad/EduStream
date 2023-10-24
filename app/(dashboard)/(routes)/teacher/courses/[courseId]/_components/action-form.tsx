"use client";

import { Button } from "@/components/ui/button";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

interface CourseActionFormProps {
	disabled: boolean;
	courseId: string;
	isPublished: boolean;
}

const CourseActionForm = ({
	disabled,
	courseId,
	isPublished,
}: CourseActionFormProps) => {
	const router = useRouter();
	const [isLoading, setIsLoading] = useState(false);

	const onClick = async () => {
		try {
			setIsLoading(true);
			if (isPublished) {
				await axios.patch(`/api/courses/${courseId}/unpublish`);
				toast.success("Course unpublished");
			} else {
				await axios.patch(`/api/courses/${courseId}/publish`);
				toast.success("Course is published");
			}
			router.refresh();
		} catch {
			toast.error("something went wrong");
		} finally {
			setIsLoading(false);
		}
	};

	const onDelete = async () => {
		try {
			setIsLoading(true);
			await axios.delete(`/api/courses/${courseId}`);
			toast.success("Course Deleted");
			router.refresh();
			router.push(`/teacher/courses`);
		} catch {
			toast.error("Something went wrong");
		} finally {
			setIsLoading(false);
		}
	};
	return (
		<div className="flex items-center gap-x-2">
			<Button
				onClick={onClick}
				disabled={disabled || isLoading}
				variant="outline"
				size="sm"
			>
				{isLoading ? "Unpublish" : "Publish"}
			</Button>
		</div>
	);
};

export default CourseActionForm;
