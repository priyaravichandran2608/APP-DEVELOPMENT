import { Button, Divider } from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import Profile from "../TalentProfile/Profile";
import { profile } from "../Data/TalentData";
import RecommendedTalent from "../TalentProfile/RecommendedTalent";
import Headerafterlogin from "../Header/header_after_login";
import Footer from "../Footer/Footer";
import JobDesc from "../JobDesc/JobDesc";
import RecommendedJobs from "../JobDesc/RecommendedJob";

const JobDescPage=()=>
    {
        return (
            <div className="min-h-[100vh] font-['poppins']" style={{backgroundColor:'#2d2d2d'}}>
               <Divider  size="xs"  mx="md"/>
               <Link className="my-4 inline-block" to={"/find-jobs"}>
          <Button  leftSection={<IconArrowLeft size={20}/>} color="bright-sun.4" variant="light">Back</Button>
        </Link> 
                <div className="flex gap-5 justify-around">
                <JobDesc/>
                <RecommendedJobs/>
                </div>
                <Footer/>
                  </div>
                  )
    }
    export default JobDescPage;