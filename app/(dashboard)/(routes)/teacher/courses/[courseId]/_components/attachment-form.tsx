"use client";

import * as z from "zod";
import axios from "axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Pencil } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { Attachment, Course } from "@prisma/client"

import { Button } from "@/components/ui/button";

interface AttachmentFormProps {
    initialData: Course & {
        attachment: Attachment[];
    }
    courseId: string;
};

const formSchema = z.object({
    url: z.string().min(1),
});

export const AttachmentForm = ({ initialData, courseId }: AttachmentFormProps) => {
    const [isEditing, setIsEditing] = useState(false);
    const [deletingId, setDeletingId] = useState<string | null>(null);
    const toggleEdit = () => setIsEditing((current) => !current);

    const router = useRouter();

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        try {
            await axios.patch(`/api/coruses/${courseId}/attachments`, values);
            toast.success("Coruse Attachtmnet updated");
            router.refresh();
            
        } catch {
            toast.error("Something went wrong");
        }
    }
    const onDelete = async (id: string) => {
        try {
            setDeletingId(id);
            await axios.delete(`/api/courses/${courseId}/attachments/${id}`);
            toast.success("Attachment deleted");
            router.refresh();
        }
        catch {
            toast.error("Something went wrong");
        }
        finally {
            setDeletingId(null);
        }

    }
    return (
        <div className="mt-6 border bg-slate-100 rounded-md p-4">
            <div className="font-medium flex items-center justify-between">
                Course Attachment
                <Button
                    onClick={toggleEdit}
                >
                    {
                        isEditing && (
                            <>
                                Cancel
                            </>
                        )
                    }

                </Button>

            </div>

        </div>
    )
}