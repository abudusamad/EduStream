"use client";

import * as z from "zod";
import axios from "axios";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
import { Course } from "@prisma/client";

interface CategoryFormProps {
    initialData: Course;
    courseId: string;
    options: { label: string;  value: string }[];
}

export const CategoryForm = ({
    initialData,
    courseId,
    options,
}:CategoryFormProps) => {
    return (
        <div>
            CategoryForm
        </div>
    )
}