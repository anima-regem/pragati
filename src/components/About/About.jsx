import lady from '../../assets/lady.png';
import './About.css';

const About = () => {
    return (

        <main className='relative overflow-hidden  '>
            {/* <div className='h-screen w-screen absolute z-[-5] inset-0 bg-[#EC5919] opacity-10'></div> */}
            {/* <img src={lady} alt="" className='h-screen absolute z-[-10] right-0' /> */}
            <div className='h-screen w-screen flex flex-col justify-start items-start m-32 mt-20 backdrop-blur-lg'>

                <span className='w-1/2'>
                    <span className='w-max'>
                        <h1 className='text-6xl w-min text-white font-bold m-5'>ABOUT</h1>
                        
                    </span>

                    <p className='text-md text-white opacity-75 font-light m-5'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

                    </p>
                </span>

            </div>
        </main>
    );
}

export default About;