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
        <div
          className="min-h-screen bg-cover bg-center relative"
          style={{ backgroundImage: `url(${hero})` }}
        >
          <Hero />
        </div>
        <LoginRegister />
        <div className="flex justify-center items-center w-full px-[110px] gap-0 bg-[#011b73]">
          
          <Main />
        </div>
        <Footer />
      </div>

      {/*  */}
    </>
  );
}
export default App;
