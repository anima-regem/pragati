import { groupEvents } from "../../utils/constants";
import { useState } from 'react';

const GroupRegistrationForm = () => {
    const [selectedGroupEvents, setSelectedGroupEvents] = useState([]);

    const handleIndividualCheck = (e) => {
        const event = e.target.value;
        if (e.target.checked) {
            setSelectedGroupEvents([...selectedGroupEvents, event]);

        } else {
            setSelectedGroupEvents(selectedGroupEvents.filter(item => item !== event));
        }
    }

    const handleSubmit = () => {
        console.log(selectedGroupEvents);
    }
    
    return (
        <>
            <div className="flex flex-col pt-8 pr-8 pl-8 pb-0 w-full justify-center items-center">
                <input type="text" placeholder="Enter Name (in CAPs)" className="input w-full max-w-xs bg-[#2D2D2D] mt-5 mb-5" />
                <input type="phone" placeholder="Phone" className="input w-full max-w-xs bg-[#2D2D2D] mb-5" />
                <input type="email" placeholder="College Mail" className="input w-full max-w-xs bg-[#2D2D2D] mb-5" />
                <input type="text" placeholder="Department" className="input w-full max-w-xs bg-[#2D2D2D] mb-5" />
                <input type="number" placeholder="Semester" min={1} max={8} defaultValue={1} className="input w-full max-w-xs bg-[#2D2D2D] mb-10" />
            </div>
            <div className="flex flex-col p-8 pt-0 w-full">
                {/* Input fields */}
                <div className="form-control">
                    <label className="label cursor-pointer flex flex-col">
                        {groupEvents.map((event, index) => (
                            <div key={index} className="flex flex-row justify-between items-center w-72">
                                <span className="label-text p-2">{event}</span>
                                <input
                                    type="checkbox"
                                    value={event}
                                    checked={selectedGroupEvents.includes(event)}
                                    onChange={handleIndividualCheck}
                                    className="checkbox"
                                />
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
        </>
    );
}

export default GroupRegistrationForm;