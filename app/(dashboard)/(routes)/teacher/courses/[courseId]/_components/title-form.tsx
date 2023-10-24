"use client";
<<<<<<< HEAD
import { Button } from "@/components/ui/button";
=======

import * as z from "zod";
import axios from "axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Pencil } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

>>>>>>> 615bf4af3c9c9908287fdde42ccc75cacc4d50bb
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
<<<<<<< HEAD
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { Pencil } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import * as z from "zod";
=======
import { Button } from "@/components/ui/button";
>>>>>>> 615bf4af3c9c9908287fdde42ccc75cacc4d50bb

interface TitleFormProps {
	initialData: {
		title: string;
	};
	courseId: string;
}
<<<<<<< HEAD
=======

>>>>>>> 615bf4af3c9c9908287fdde42ccc75cacc4d50bb
const formSchema = z.object({
	title: z.string().min(1, {
		message: "Title is required",
	}),
});

export const TitleForm = ({ initialData, courseId }: TitleFormProps) => {
<<<<<<< HEAD
	const router = useRouter();
=======
	const [isEditing, setIsEditing] = useState(false);

	const toggleEdit = () => setIsEditing((current) => !current);

	const router = useRouter();

>>>>>>> 615bf4af3c9c9908287fdde42ccc75cacc4d50bb
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: initialData,
	});
<<<<<<< HEAD
	const [isEditing, setIsEditing] = useState(false);
	const { isSubmitting, isValid } = form.formState;
	const toggleEdit = () => setIsEditing((current) => !current);
=======

	const { isSubmitting, isValid } = form.formState;
>>>>>>> 615bf4af3c9c9908287fdde42ccc75cacc4d50bb

	const onSubmit = async (values: z.infer<typeof formSchema>) => {
		try {
			await axios.patch(`/api/courses/${courseId}`, values);
<<<<<<< HEAD
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
=======
			toast.success("Course updated");
			toggleEdit();
			router.refresh();
		} catch {
			toast.error("Something went wrong");
		}
	};

	return (
		<div className="mt-6 border bg-slate-100 rounded-md p-4">
			<div className="font-medium flex items-center justify-between">
				Course title
>>>>>>> 615bf4af3c9c9908287fdde42ccc75cacc4d50bb
				<Button onClick={toggleEdit} variant="ghost">
					{isEditing ? (
						<>Cancel</>
					) : (
						<>
<<<<<<< HEAD
							<Pencil className="h-4  w-4 mr-2" />
=======
							<Pencil className="h-4 w-4 mr-2" />
>>>>>>> 615bf4af3c9c9908287fdde42ccc75cacc4d50bb
							Edit title
						</>
					)}
				</Button>
			</div>
<<<<<<< HEAD
=======
			{!isEditing && <p className="text-sm mt-2">{initialData.title}</p>}
>>>>>>> 615bf4af3c9c9908287fdde42ccc75cacc4d50bb
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
<<<<<<< HEAD
											placeholder="e.g. '
                                                    Advanced web developmet'"
=======
											placeholder="e.g. 'Advanced web development'"
>>>>>>> 615bf4af3c9c9908287fdde42ccc75cacc4d50bb
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
<<<<<<< HEAD
						<div>
							<Button disabled={!isValid || isSubmitting} type="submit">
								save
=======
						<div className="flex items-center gap-x-2">
							<Button disabled={!isValid || isSubmitting} type="submit">
								Save
>>>>>>> 615bf4af3c9c9908287fdde42ccc75cacc4d50bb
							</Button>
						</div>
					</form>
				</Form>
			)}
		</div>
	);
};
