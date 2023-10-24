
import { Button } from "@/components/ui/button";
import Link from "next/link";

const CoursesPage = () => {
<<<<<<< HEAD
    return (<div className="p-6">
        <Link href="/teacher/create">
        <Button size="sm">
            New Course
       </Button>
        </Link>
    </div> );
}
=======
	return (
		<div className="p-6">
			<Link href="/teacher/create">
				<Button variant="default">New Course</Button>
			</Link>
		</div>
	);
};

>>>>>>> 615bf4af3c9c9908287fdde42ccc75cacc4d50bb
 
export default CoursesPage;
