import { Button, Divider } from "@mantine/core";
import Headerafterlogin from "../Header/header_after_login";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";
import { IconArrowLeft } from "@tabler/icons-react";
import ApplyJobComp from "../ApplyJob/ApplyJobComp";

const ApplyJobPage=()=>
    {
        return (
            <div className="min-h-[100vh] font-['poppins'] p-4" style={{backgroundColor:'#2d2d2d'}}>
  
               <Divider  size="xs"  mx="md"/> 
               <Link className="my-4 inline-block" to={"/find-jobs"}>
          <Button  leftSection={<IconArrowLeft size={20}/>} color="bright-sun.4" variant="light">Back</Button>
        </Link> 
        <ApplyJobComp/>
            <Footer/>
                  </div>)
    }
    export default ApplyJobPage;