import Dictionary from "./components/Dictionary";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import LearningPath from "./components/LearningPath";
import Navbar from "./components/Navbar";
import Vidoes from "./components/Vidoes";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <LearningPath />
      <div className="h-[1px] w-screen bg-white bg-opacity-20 mt-10"></div>
      <Vidoes />
      <div className="h-[1px] w-screen bg-white bg-opacity-20 mt-10"></div>
      <Dictionary />
      <div className="h-[1px] w-screen bg-white bg-opacity-20 mt-10"></div>
      <Footer />
    </>
  );
}

export default App;
