import "./App.css";
import "./index.css";
import hero from "../src/images/hero.png";
import {Header} from '../../bookme/src/components/Header';
import { Navbar } from "../../bookme/src/components/Navbar";
import { Hero } from "../../bookme/src/components/Hero";
import {Profile} from '../../bookme/src/components/Profile';
import {Submission} from '../../bookme/src/components/Submission';
import { Main } from "../../bookme/src/components/Main";
// import { Footer } from "./components/Footer";
import EditProfile from "./components/EditProfile";
import {ManageCards} from '../../bookme/src/components/ManageCards';
import OrderSummary from "./components/OrderSummary";

// import { LoginRegister } from "../../bookme/src/components/LoginRegister";
// import LoginReg from "./pages/loginReg";

function App() {
  return (
    <>
{/*     
        <Header /> */}
        {/* <Hero /> */}
        <Navbar/>
        {/* <div className="bg-black"><Profile/></div> */}
        <OrderSummary/>
        {/* <Footer/> */}
      
         {/*
        <div className="flex justify-center items-center w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 gap-0 bg-black">          
          <Main />
        </div > 
        <Footer /> 
        <LoginReg/>
   */}
    </>
  );
}
export default App;
