import { Divider } from "@mantine/core";
import SearchBar from "../FindTalent/SearchBar";
import Talents from "../FindTalent/Talents";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Headerafterlogin from "../Header/header_after_login";


const FindTalentPage=()=>
{
    return (
        <div className="min-h-[100vh] font-['poppins']" style={{backgroundColor:'#2d2d2d'}}>
            
           <Divider  size="xs"  mx="md"/>
           <SearchBar/>
           <Divider  size="xs"  mx="md"/>
           <Talents/>
           <Footer/>
              </div>)
}
export default FindTalentPage;