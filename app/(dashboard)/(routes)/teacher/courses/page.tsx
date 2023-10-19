<<<<<<< HEAD
<<<<<<< HEAD
import { Button } from "@/components/ui/button";
import { Link } from "lucide-react";

const CoursesPage = () => {
    return (<div>
        <Link href="/teacher/courses/">
        <Button className="p-6">
            Courses
       </Button>
        </Link>
=======
const CoursesPage = () => {
    return (<div>
        This is a course page
>>>>>>> dd2e269 (Finished with the courses and the anlytics page)
    </div> );
}
=======
import { Button } from "@/components/ui/button";
import Link from "next/link";

const CoursesPage = () => {
	return (
		<div className="p-6">
			<Link href="/teacher/create">
				<Button variant="destructive">New Course</Button>
			</Link>
		</div>
	);
};
>>>>>>> 228026d (Adding forms and inputs to the page for creating results)
 
export default CoursesPage;
