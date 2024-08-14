import { Divider } from "@mantine/core";
import SearchBar from "../FindJobs/SearchBar";
import Jobs from "../FindJobs/Jobs";
import Footer from "../Footer/Footer";
import Headerafterlogin from "../Header/header_after_login";

const FindJobs=()=>{
  return (
  <div className="min-h-[100vh] font-['poppins']" style={{backgroundColor:'#2d2d2d'}}>
     <Divider  size="xs"  mx="md"/>
          <SearchBar/>
          <Divider  size="xs"  mx="md"/>
          <Jobs/>
          <Footer/>
        </div>)
}
export default FindJobs;