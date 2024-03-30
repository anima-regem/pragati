import './About.css';

const About = () => {
    return (
        <main className='relative overflow-hidden'>
            <div className='h-1/2 w-screen flex flex-col justify-start items-start p-5 lg:p-32 backdrop-blur-lg'>
                <span className='w-full'>
                    <span className='w-max'>
                        <h1 className='text-3xl w-min text-white font-bold m-5 underlined-text lg:text-6xl'>ABOUT</h1>
                    </span>
                    <p className='text-md text-white opacity-75 font-light m-5'>
                        A fully fledged 5 day fest with various competition and proshows, and also several workshops and events as pre events of pragati focused on arts and culture, pragati will become one of the biggest cultural fest in GECW. <br /> GECW celebrating 25<sup>th</sup> anniversary, we aim to organize pragati in the most marvelous and ambitious way, making it reach the epitome of its legacy and set a whole new standart for culture fest held in Kerala. <br /> With the numerous events packed with lof of alluring experience and a large crowd, our vision for pragati 24 is here to raise the bar to and achieve new heights in the light of 25<sup>th</sup> anniversary.
                    </p>
                </span>
            </div>
        </main>
    );
};

export default About;