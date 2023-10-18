import { Button } from "@/components/ui/button";
import { Link } from "lucide-react";

const CoursesPage = () => {
    return (<div>
        <Link href="/teacher/courses/">
        <Button className="p-6">
            Courses
       </Button>
        </Link>
    </div> );
}
 
export default CoursesPage;