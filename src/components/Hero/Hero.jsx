import backgroundImage from '../../assets/bg.png';
import './Hero.css';

const Hero = () => {
    return (
      <main className="relative">
        <img src={backgroundImage} alt="" className="w-full absolute z-[-10]" />
        <div className="h-screen flex flex-col justify-center items-start">
          <span className="ml-32">
            <h1 className="text-8xl text-white font-black m-2">PRAGATI</h1>
            <h1 className="text-8xl text-white font-black m-2">IS HERE!!</h1>
            <h2 className="text-6xl text-white font-black m-2">
              April 21 | 22 | 23
            </h2>
          </span>
          <a href="" className="reg mt-4 ml-32">
            Register Now
          </a>
        </div>
      </main>
    );
}

export default Hero;