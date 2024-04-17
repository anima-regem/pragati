import backgroundImage from '../../assets/bgedited.png';
import './Hero.css';
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <main className="relative overflow-hidden h-screen">
      <div className='absolute overflow-hidden h-screen w-screen z-[-10] '>
        <img src={backgroundImage} alt="" className="h-screen object-cover lg:h-auto lg:w-screen" />
      </div>
      <div className="h-screen w-screen flex flex-col justify-center items-start ml-2 lg:ml-32 sm:ml-0 md:ml-0">
        <span className="">
          <h1 className="text-lg text-white font-bold m-5 lg:text-3xl">
            libertad union presents
          </h1>
          <h1 className="text-3xl text-white font-black m-5 lg:text-8xl">
            PRAGATI'24
          </h1>
          <h2 className="text-3xl text-white opacity-75 font-bold m-5 mt-10 lg:text-5xl">
            APRIL 18 | 19 | 20
          </h2>
        </span>
        <Link to="/leaderboard" className="reg mt-5 ml-5 ">
          Leaderboard <i className="fas fa-arrow-right"></i>
        </Link>
      </div>
    </main>
  );
};

export default Hero;