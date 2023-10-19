"use client";

import * as z from "zod";
import axios from "axios";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { useRouter } from "next/router"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormLabel,
    FormMessage
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
    title: z.string().min(1, {
        message: "Title is required",
    })
})

const CreatePage = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title:""
        }
    })
    const { isSubmitting, isValid } = form.formState
    
    const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values)
    }
    return (<div className="max-w-5xl mx-auto flex md:items-center md:justify-center h-full p-6">
        <div>
            <h1 className="text-2xl">
                Name your course
            </h1>
        </div>
    </div> );
}
 
export default CreatePage;