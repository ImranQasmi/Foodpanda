import React from 'react';
import './component/Userlogin.css'
import './component/Usersignup.css'
import './component/Restaurant.css'
import './component/Itemdisplay.css'
import Userlogin from './component/Userlogin';
import Navbar from './component/Navbar';
import Usersignup from './component/Usersignup';
import Restaurant from './component/Restaurant'
import FullWidthTabs from './component/Restuarantdashb'
import ComplexGrid from './component/Itemdisplay'
import OutlinedTextFields from './component/Search'
import Routercomponent from './component/Routercomponent'
import Home from './component/Home'
import 'bootstrap/dist/css/bootstrap.min.css'
import Switchcomponent from './component/Switchcomponent'
import Footer from './component/Footer'
import './component/footer.css'

function App() {
  return (
    <div>    
      <Routercomponent/>
      <Footer/>
    </div>
  );
}

export default App;
