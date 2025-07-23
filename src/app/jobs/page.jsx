import MainMenuJobs from "../components/MainMenuJobs";
// import getJobs from "../components/getjobs";
import Jobs from "@/data/dummy.json"

export default async function main_menu() {
    const jobs = Jobs

    return (
        <div>
            <MainMenuJobs jobs={jobs} className="overflow-y-scroll" />
        </div>
    );
}