"use client";

import { Chapter, MuxData } from "@prisma/client";


interface ChapterVideoFormProps {
    initialData: Chapter & {muxData?: MuxData | null}
    courseId: string;
    chapterId: string;

}

export const ChapterVideoForm = ({
    initialData,
    courseId,
    chapterId,
}: ChapterVideoFormProps) => {
    return (
        <div>
            Chapter    Video Form
        </div>
    )

}