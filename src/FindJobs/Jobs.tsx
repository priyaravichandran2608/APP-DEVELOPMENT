import { jobList } from "../Data/JobsData";
import JobCard from "./JobCard";

import Sort from "./Sort";

const Jobs=()=>{
    return <div className="p-5">
        <div className="flex justify-between">
            <div className="text-2xl font-semibold">  Recommended Jobs</div>
            <div>
                <Sort/>
            </div>
        </div>
        <div className="flex mt-10 flex-wrap gap-5 justify-between">

        {
            jobList.map((job: any,index: any)=> <JobCard key={index} {...job} />)
        }
        </div>
    </div>
}
export default Jobs;