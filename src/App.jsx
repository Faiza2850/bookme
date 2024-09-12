import "./App.css";
import "./index.css";
import hero from "../src/images/hero.png";
import { Navbar } from "../../bookme/src/components/Navbar";
import { Hero } from "../../bookme/src/components/Hero";
import { Main } from "../../bookme/src/components/Main";
import { Footer } from "../../bookme/src/components/Footer";
import { LoginRegister } from "../../bookme/src/components/LoginRegister";

function App() {
  return (
    <>
    <div>
        <Navbar />
       <Hero />
        </div>
        <div className="flex justify-center items-center w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 gap-0 bg-black">          
          <Main />
        </div > 
        <Footer />
  
    </>
  );
}
export default App;
