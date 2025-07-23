import MainMenuJobs from "../components/MainMenuJobs";
import getJobs from "../components/getjobs";

export default async function main_menu() {
    const jobs = await getJobs()

    return (
        <div>
            <MainMenuJobs jobs={jobs} className="overflow-y-scroll" />
        </div>
    );
}