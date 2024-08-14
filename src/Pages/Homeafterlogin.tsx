import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Headerafterlogin from "../Header/header_after_login";
import Companies from "../LandingPage/Companies";
import DreamJob from "../LandingPage/DreamJob";
import JobCategory from "../LandingPage/JobCategory";
import Subscribe from "../LandingPage/Subscribe";
import Testimonials from "../LandingPage/Testimonials";
import Working from "../LandingPage/Working";

const Homeafterlogin=()=>{
    return(
        <div className="min-h-[100vh] font-['poppins']" style={{backgroundColor:'#2d2d2d'}}>

            <Headerafterlogin/>
            <DreamJob/>
            <Companies/>
            <JobCategory/>
            <Working/>
            <Testimonials/>
            <Subscribe/>
            <Footer/>
        </div>
                
    )
}
export default Homeafterlogin;