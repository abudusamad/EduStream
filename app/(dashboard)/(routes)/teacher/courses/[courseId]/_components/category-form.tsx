"use client";

import * as z from "zod";
import axios from "axios";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
import { Course } from "@prisma/client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

interface CategoryFormProps {
    initialData: Course;
    courseId: string;
    options: { label: string;  value: string }[];
}

const formSchema = z.object({
    categoryId: z.string().min(1,),
});


export const CategoryForm = ({
    initialData,
    courseId,
    options,
}: CategoryFormProps) => {
    
    const [isEditing, setIsEditing] = useState(false);
    const toggleEdit = () => setIsEditing((current) => !current);

    const router = useRouter();

    const  form = useForm

    
    return (
        <div>
            CategoryForm
        </div>
    )
}