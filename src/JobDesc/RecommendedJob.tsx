import { jobList } from "../Data/JobsData";
import JobCard from "../FindJobs/JobCard";

const RecommendedJobs=()=>
{
    return<div>
         <div>
        <div className="text-xl">Recommended Jobs</div>
        <div className="flex flex-col flex-wrap gap-5 justify-around">
            {jobList.map((job,index)=> index<6 && <JobCard key={index} {...job} />)}
        </div>

    </div>
</div>
}
export default RecommendedJobs;