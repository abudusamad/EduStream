"use client";

import { Chapter } from "@prisma/client";
import { useEffect, useState } from "react";
import { set } from "zod";

import {
    DropResult,
    Droppable,
    Draggable,
    DragDropContext,

} from "@hello-pangea/dnd"

interface ChapterListProps{
    items: Chapter[];
    onReorder: (updateData: { id: string; position: number }[]) => void;
    onEdit:(id: string) => void;
}

export const ChapterListForm = ({ items, onReorder, onEdit }: ChapterListProps) => {
    const [isMounted, setIsMounted] = useState(false);
    const [chapters, setChapters] = useState(items);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    useEffect(() => {
        setChapters(items);
    }, [items]);
    
    const onDragEnd = (result: DropResult) => {
        if (!result.destination) return;
        const items = Array.from(chapters);
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);
        const startIndex = Math.min(result.source.index, result.destination.index);
        const endIndex = Math.max(result.source.index, result.destination.index);

        const updatedChapters = items.slice(startIndex, endIndex + 1);

        setChapters(items);

        const bulkUpdateData = updatedChapters.map((chapter) => ({
            id: chapter.id,
            position: items.findIndex((item) => item.id === chapter.id) 
        }));
        onReorder(bulkUpdateData);
    }

    if (!isMounted) return null;
    
    return (
        <DragDropContext onDragEnd={onDragEnd}>

        </DragDropContext>
    )

}