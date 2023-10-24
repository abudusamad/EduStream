"use client";
import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { Pencil } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import * as z from "zod";

interface TitleFormProps {
	initialData: {
		title: string;
	};
	courseId: string;
}
const formSchema = z.object({
	title: z.string().min(1, {
		message: "Title is required",
	}),
});

export const TitleForm = ({ initialData, courseId }: TitleFormProps) => {
	const router = useRouter();
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: initialData,
	});
	const [isEditing, setIsEditing] = useState(false);
	const { isSubmitting, isValid } = form.formState;
	const toggleEdit = () => setIsEditing((current) => !current);

	const onSubmit = async (values: z.infer<typeof formSchema>) => {
		try {
			await axios.patch(`/api/courses/${courseId}`, values);
			toast.success("Course Updated");
			toggleEdit();
			router.refresh();
		} catch {
			toast.error("something Went wrong");
		}
	};
	return (
		<div className="mt-6 border bg-slate-100 rounded-md p-4">
			<div className="font-medium flex items-center justify-between">
				Course Title
				<Button onClick={toggleEdit} variant="ghost">
					{isEditing ? (
						<>Cancel</>
					) : (
						<>
							<Pencil className="h-4  w-4 mr-2" />
							Edit title
						</>
					)}
				</Button>
			</div>
			{isEditing && (
				<Form {...form}>
					<form
						onSubmit={form.handleSubmit(onSubmit)}
						className="space-y-4 mt-4"
					>
						<FormField
							control={form.control}
							name="title"
							render={({ field }) => (
								<FormItem>
									<FormControl>
										<Input
											disabled={isSubmitting}
											placeholder="e.g. '
                                                    Advanced web developmet'"
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<div>
							<Button disabled={!isValid || isSubmitting} type="submit">
								save
							</Button>
						</div>
					</form>
				</Form>
			)}
		</div>
	);
};
