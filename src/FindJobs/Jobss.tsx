import React, { useState, useEffect } from "react";
import axios from "axios";
import JobCard from "./JobCard";
import Sort from "./Sort";

const Jobss = () => {
  const [jobList, setJobList] = useState<any[]>([]);

  useEffect(() => {
    // Fetch the job list from the backend
    axios
      .get("http://localhost:8000/api/job-listings/")
      .then((response) => {
        setJobList(response.data);
      })
      .catch((error) => {
        console.error("Error fetching jobs:", error);
      });
  }, []);

  const updateJob = (id: number, updatedJob: any) => {
    axios
      .put(`http://localhost:8000/api/job-listings/${id}/`, updatedJob)
      .then((response) => {
        // Update the job in the state
        setJobList((prevJobs) =>
          prevJobs.map((job) => (job.id === id ? response.data : job))
        );
      })
      .catch((error) => {
        console.error("Error updating job:", error);
      });
  };

  return (
    <div className="p-5">
      <div className="flex justify-between">
        <div className="text-2xl font-semibold">Recommended Jobs</div>
        <div>
          <Sort />
        </div>
      </div>
      <div className="flex mt-10 flex-wrap gap-5 justify-between">
        {jobList.map((job) => (
          <JobCard key={job.id} {...job} updateJob={updateJob} />
        ))}
      </div>
    </div>
  );
};

export default Jobss;
