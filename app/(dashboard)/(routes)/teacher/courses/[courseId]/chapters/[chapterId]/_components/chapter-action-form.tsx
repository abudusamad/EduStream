"use client";

import { Button } from "@/components/ui/button";
import { Trash } from "lucide-react";
import { useState } from "react";

interface ChapterActionFormProps{
    disabled: boolean;
    courseId: string;
    chapterId: string;
    isPublished: boolean;
}


export const ChapterActionForm = ({
    disabled,
    courseId,
    chapterId,
    isPublished,
}: ChapterActionFormProps) => {
    const [isLoading, setIsLoading] = useState(false);
    return (
        <div className="flex items-center gap-x-2">
            <Button
                onClick={()=>{}}
                disabled={disabled || isLoading}
                variant="outline"
                size="sm"
            >
                {isPublished ? "Unpublish" : "Publish"}
            </Button>
            <Button size="sm" disabled={isLoading}>
                <Trash className="w-4 h-4 mr-2"/>
            </Button>
        </div>
    )
}