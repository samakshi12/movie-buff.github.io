import { Outlet} from 'react-router-dom';
import Navs from "./Navs";
import AppTitle from "./AppTitle";
const MainLayout =()=>{
  return<div>
  
    <Navs/>
    <Outlet/>
    <AppTitle/>
    
    
  </div>
}
export default MainLayout;