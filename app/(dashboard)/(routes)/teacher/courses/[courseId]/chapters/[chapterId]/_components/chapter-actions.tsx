"use client";

import { ConfirmModal } from "@/components/modals/confirm-modal";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { Trash } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import { set } from "zod";

interface ChapterActionsFormProps {
	disabled: boolean;
	courseId: string;
	chapterId: string;
	isPublished: boolean;
}

export const ChapterActionsForm = ({
	disabled,
	courseId,
	chapterId,
	isPublished,
}: ChapterActionsFormProps) => {
	const router = useRouter();
	const [isLoading, setIsLoading] = useState(false);

	const onClick = async () => {
		try {
			setIsLoading(true);
			if (isPublished) {
				await axios.patch(
					`/api/courses/${courseId}/chapters/${chapterId}/unpublish`
				);
				toast.success("Chapter unpublished");
			} else {
				await axios.patch(
					`/api/courses/${courseId}/chapters/${chapterId}/publish`
				);
				toast.success("Chapter published");
			}
		} catch {
			toast.error("Something went wrong");
		} finally {
			setIsLoading(false);
		}
    };
    
    const onDelete = async () => {
        try {
            setIsLoading(true);
            await axios.delete(`/api/courses/${courseId}/chapters/${chapterId}`);
            toast.success("Chapter deleted");
            router.refresh();
            router.push(`/teacher/courses/${courseId}`);
        } catch {
            toast.error("Something went wrong");
        }
        finally {
            setIsLoading(false);
        }
    }
    return (
        <div className="flex items-center gap-x-2">
            <Button
                onClick={onClick}
                disabled={disabled || isLoading}
                variant="outline"
                size="sm"
            
            >
                {isPublished ? "Unpublish" : "Publish"} 
            </Button>
            <ConfirmModal onConfirm={onDelete}>
                <Button size="sm" disabled={isLoading}>
                    <Trash className="w-4 h-4 "/>
                </Button>
            </ConfirmModal>
    
        </div>
    )
};
