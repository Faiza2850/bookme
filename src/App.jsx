import "./App.css";
import "./index.css";
import hero from "../src/images/hero.png";
import { Navbar } from "../../bookme/src/components/Navbar";
import { Hero } from "../../bookme/src/components/Hero";
import {Profile} from '../../bookme/src/components/Profile';
import { Main } from "../../bookme/src/components/Main";
import { Footer } from "../../bookme/src/components/Footer";
import { LoginRegister } from "../../bookme/src/components/LoginRegister";
import LoginReg from "./pages/loginReg";

function App() {
  return (
    <>
    
        <Navbar />
        {/* <Hero /> */}
        <div className="bg-black"><Profile/></div>
        
        <Footer/>
      
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
