"use client";

import * as z from "zod";
import axios from "axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { set, useForm } from "react-hook-form";
import { Loader2, Pencil } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { Chapter, Course } from "@prisma/client";


import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";

interface ChapterFormProps {
    initialData: Course & { chapter: Chapter[] };
    courseId: string;
}

const formSchema = z.object({
    title: z.string().min(1),
})

export const ChapterForm = ({ initialData, courseId }: ChapterFormProps) => {
    const [isCreating, setIsCreating] = useState(false);
    const [isUpdating, setIsUpdating] = useState(false);

    const toggleCreating = () => setIsCreating((current) => !current);

    const router = useRouter();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: "",
        }
    });

    const { isSubmitting, isValid } = form.formState;
    
    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        try {
            await axios.post(`/api/courses/${courseId}/chapters`, values);
            toast.success("Chapter created");
            toggleCreating();
            router.refresh();
            
        } catch {
            toast.error("Something went wrong");

        }
    }

    const reReorder = async (updateData: { id: string; position:number}[]) => {
        try {
            setIsUpdating(true);
            await axios.put(`/api/courses/${courseId}/chapters/reorder`, { list: updateData });
            toast.success("Chapters reordered");
            router.refresh();
            
        } catch {
            toast.error("Something went wrong");
        }

        finally {
            setIsUpdating(false);
        }
    }
    const onEdit = (id:string) => {
        router.push(`/teacher/courses/${courseId}/chapters/${id}`);
    }
    return (
        <div>
            {isUpdating && (
                <div>
                    <Loader2 className="animate-spin h-6 w-6 text-sky-700"/>
                </div>
            )}
            <div className="font-medium flex items-center justify-between">
                Course chapters
                <Button onClick={toggleCreating} variant="ghost">
                    {isCreating ? (
                        <>
                            Cancel
                        </>
                    ) : (
                            <>
                                <Pencil className="h-4 w-4 mr-2"/>
                                Add a chapter
                            </>
                    )}
                </Button>
            </div>
        </div>
    )
}