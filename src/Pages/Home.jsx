 
import About from "../Components/About";
import Service from "../Components/Service";
import MyWork from "../Components/MyWork";
import Testimonials from "../Components/Testimonials";
import Hero from "../Components/Hero";



const Home = () => {
    return (
      <div className="bg-gray-50 dark:bg-gray-900 min-h-screen">
   <Hero />
        <About />
        <Service />
        <MyWork />
        <Testimonials />
      </div>
    );
  };

export default Home;