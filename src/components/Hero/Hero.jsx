import backgroundImage from '../../assets/bg.png';
import './Hero.css';
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <main className="relative overflow-hidden">
      <img src={backgroundImage} alt="" className="w-screen absolute z-[-10]" />
      <div className="h-screen w-screen flex flex-col justify-center items-start ml-32">
        <span className="">
          <h1 className="text-8xl text-white font-black m-5">PRAGATI</h1>
          <h1 className="text-8xl text-white font-black m-5">IS HERE!!</h1>
          <h2 className="text-5xl text-white opacity-75 font-black m-5 mt-10">
            APRIL 21 | 22 | 23
          </h2>
        </span>
        <Link to="/register" className="reg mt-5 ml-5">
          Register Now <i className="fas fa-arrow-right"></i>
        </Link>
      </div>
    </main>
  );
};

export default Hero;