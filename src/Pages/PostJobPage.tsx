import { Button, Divider } from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import Profile from "../TalentProfile/Profile";
import { profile } from "../Data/TalentData";
import RecommendedTalent from "../TalentProfile/RecommendedTalent";
import PostJob from "../PostJob/PostJob";
import Headerafterlogin from "../Header/header_after_login";
import Footer from "../Footer/Footer";

const PostJobPage=()=>
    {
        return (
            <div className="min-h-[100vh] font-['poppins']" style={{backgroundColor:'#2d2d2d'}}>
               <Divider  size="xs"  mx="md"/> 
            <PostJob/>
            <Footer/>
                  </div>)
    }
    export default PostJobPage;