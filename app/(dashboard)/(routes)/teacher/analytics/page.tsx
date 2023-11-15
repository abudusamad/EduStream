import { getAnalytics } from "@/actions/get-analytics";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { DataCard } from "./_components/data-card";

const AnalyticPage = async () => {

    const { userId } = auth();
    if (!userId) {
        return redirect("/");
    }

    const { data,
        totalRevenue,
        totalSales
    } = await getAnalytics(userId)


    return (<div className="p-6">
        <div>
            <DataCard
                
                value={totalRevenue}
                label="Total Revenue"
                shouldFormat
            
            />
        </div>

    </div>);
}
 
export default AnalyticPage;