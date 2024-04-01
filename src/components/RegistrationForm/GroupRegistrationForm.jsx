import { groupEvents } from "../../utils/constants";
import { useState } from 'react';
import axios from "axios";

const GroupRegistrationForm = () => {
    const [selectedGroupEvents, setSelectedGroupEvents] = useState([]);
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [mail, setMail] = useState('');
    const [department, setDepartment] = useState('');
    const [semester, setSemester] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState('');
    const [showError, setShowError] = useState(false);


    const handleIndividualCheck = (e) => {
        const event = e.target.value;
        if (e.target.checked) {
            setSelectedGroupEvents([...selectedGroupEvents, event]);

        } else {
            setSelectedGroupEvents(selectedGroupEvents.filter(item => item !== event));
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent the form from submitting traditionally
        setIsLoading(true);

        if (name === '' || phone === '' || mail === '' || department === '' || semester === '' || !mail.endsWith('@gecwyd.ac.in')) {
            setMessage("Please fill all the fields correctly.");
            setShowError(true);

            setIsLoading(false);

            return;
        }

        // Encode form data into URL parameters
        const queryParams = new URLSearchParams({
            name,
            phone,
            mail,
            department,
            semester,
            events: [...selectedGroupEvents].join(',')
        }).toString();

        const requestURL = `https://script.google.com/macros/s/AKfycbwSyzqogYuGSdz-2LxI-qKnT8VNTix98URC3Su0YCKrMnB3pK-pd6ciyKRUlCTS20_JyQ/exec?${queryParams}`;
        console.log(requestURL);

        await axios.get(requestURL)
            .then(response => {
                console.log(response.data.message.message); // Process response data as needed
                setMessage(response.data.message.message);
                setShowError(true);
            })
        // .catch(error => {
        //     console.error('Registration failed:', error);
        //     alert('Registration failed. Please try again.');
        // });

        setIsLoading(false);


    }


    return (
        <>
            <div className="flex flex-col pt-8 pr-8 pl-8 pb-0 w-full justify-center items-center">
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Leader Name (in CAPs)" className="input w-full max-w-xs bg-[#2D2D2D] mt-5 mb-5" />
                <input type="phone" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Phone" className="input w-full max-w-xs bg-[#2D2D2D] mb-5" />
                <input type="email" value={mail} onChange={(e) => setMail(e.target.value)} placeholder="College Mail" className="input w-full max-w-xs bg-[#2D2D2D] mb-5" />

                <select className="select select-bordered input w-full max-w-xs bg-[#2D2D2D] mb-5" onChange={(e) => setDepartment(e.target.value)}>
                    <option disabled selected>Department</option>
                    <option>ME</option>
                    <option>EEE</option>
                    <option>CEE</option>
                    <option>ECE 1</option>
                    <option>ECE 2</option>
                    <option>CSE</option>
                </select>


                <input type="number" placeholder="Semester" min={1} max={8} value={semester} onChange={(e) => setSemester(e.target.value)} className="input w-full max-w-xs bg-[#2D2D2D] mb-10" />
            </div>
            <div className="flex flex-col p-8 pt-0 w-full">
                {/* Input fields */}
                <div className="form-control">
                    <label className="label cursor-pointer flex flex-row flex-wrap">
                        {groupEvents.map((event, index) => (
                            <div key={`ld${index}`} className="flex flex-row justify-between items-center w-72">
                                {/* Similarly, generate a unique ID for each input */}
                                <label key={`ll${index}`} htmlFor={`literacy-${index}`} className="label-text p-2 cursor-pointer">{event}</label>

                                <input
                                    key={`li${index}`}
                                    id={`literacy-${index}`} // Ensure this results in a unique ID
                                    type="checkbox"
                                    value={event}
                                    checked={selectedGroupEvents.includes(event)}
                                    onChange={handleIndividualCheck}
                                    className="checkbox"
                                />
                                {/* Link the label to the input */}
                            </div>
                        ))}

                    </label>
                </div>
            </div>
            <div className="flex flex-col p-8 w-full justify-center items-center" onClick={handleSubmit}>
                <button className="reg w-32 flex justify-center items-center">
                    Submit
                </button>

            </div>


            {
                isLoading &&

                <div className="fixed top-0 left-0 z-50 w-screen h-screen bg-black bg-opacity-50 flex justify-center items-center">
                    <span className="loading loading-infinity loading-lg"></span>

                </div>
            }

            {
                showError &&

                <div className="fixed top-0 left-0 z-50 w-screen h-screen bg-black bg-opacity-50 flex justify-center items-center">
                    <div className="modal-box bg-[#2D2D2D] p-8">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={() => setShowError(false)}>✕</button>
                        <h3 className="font-bold text-lg">Registration Status</h3>
                        <p className="py-4">{message}</p>
                    </div>
                </div>

            }

        </>
    );
}

export default GroupRegistrationForm;