const Contact = () => {
    return (
        <div className="overflow-hidden">

            <div className='w-screen bg-[#de461c] flex flex-col justify-start items-start p-5 lg:py-10 lg:px-32  backdrop-blur-lg'>
                <span className='w-full'>
                    <span className='w-max'>
                        <h1 className='text-3xl w-max text-white font-bold m-5 underlined-text lg:text-6xl'>CONTACT US</h1>
                    </span>

                    <div className="w-full flex flex-row flex-wrap items-center justify-between">

                        <p className='text-md text-white opacity-75 font-light m-5 w-full lg:w-1/4'>
                            For any queries, feel free to contact us at
                            <br />
                            Email : <a href='mailto:' className="text-black">xyz@gmail.com</a>
                            <br />
                            or
                            <br />
                            Contact Mr XYZ
                            <br />
                            Phone : <a href='tel:' className="text-black">1234567890</a>
                            <br />
                            Whatsapp : <a href='https://wa.me/1234567890' className="text-black">1234567890</a>

                        </p>


                        <div className="w-max p-5">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3905.02637854609!2d75.96754247512726!3d11.83342638838702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba5db955198afb1%3A0x6b304f91fab809b6!2sGovernment%20Engineering%20College%2C%20Wayanad!5e0!3m2!1sen!2sin!4v1711930283047!5m2!1sen!2sin" height={300} className=" aspect-square" allowfullscreen="" loading="lazy" ></iframe>                    </div>
                    </div>

                </span>
            </div>
        </div>


    )
}

export default Contact;