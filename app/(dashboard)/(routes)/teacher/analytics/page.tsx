import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

const AnalyticPage = async () => {

    const { userId } = auth();
    if (!userId) {
        return redirect("/");
    }
    return (<div className="p-6">
        Analytics Page
    </div> );
}
 
export default AnalyticPage;