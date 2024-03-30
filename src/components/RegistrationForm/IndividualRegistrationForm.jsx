import { individualEvents, literacyEvents } from "../../utils/constants";
import { useState } from 'react';

const IndividualRegistrationForm = () => {
    const [selectedIndividualEvents, setSelectedIndividualEvents] = useState([]);
    const [selectedLiteracyEvents, setSelectedLiteracyEvents] = useState([]);

    const handleIndividualCheck = (e) => {
        const event = e.target.value;
        if (e.target.checked) {
            if (selectedIndividualEvents.length < 5) {
                setSelectedIndividualEvents([...selectedIndividualEvents, event]);
            } else {
                e.preventDefault();
                document.getElementById('show_error').showModal();
            }
        } else {
            setSelectedIndividualEvents(selectedIndividualEvents.filter(item => item !== event));
        }
    }

    const handleLiteracyCheck = (e) => {
        const event = e.target.value;
        if (e.target.checked) {
            setSelectedLiteracyEvents([...selectedLiteracyEvents, event]);
        } else {
            setSelectedLiteracyEvents(selectedLiteracyEvents.filter(item => item !== event));
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(
            {
                "individual": selectedIndividualEvents,
                "literacy": selectedLiteracyEvents
            }
        )
    }

    return (
        <>
            <div className="flex flex-col pt-8 pr-8 pl-8 pb-0 w-full justify-center items-center">
                <input type="text" placeholder="Name (in CAPs)" className="input w-full max-w-xs bg-[#2D2D2D] mt-5 mb-5" />
                <input type="phone" placeholder="Phone" className="input w-full max-w-xs bg-[#2D2D2D] mb-5" />
                <input type="email" placeholder="College Mail" className="input w-full max-w-xs bg-[#2D2D2D] mb-5" />
                <input type="text" placeholder="Department" className="input w-full max-w-xs bg-[#2D2D2D] mb-5" />
                <input type="number" placeholder="Semester" min={1} max={8} defaultValue={1} className="input w-full max-w-xs bg-[#2D2D2D] mb-10" />
            </div>
            <div className="flex flex-col p-8 pt-0 w-full">
                {/* Input fields */}
                <div className="form-control">
                    <label className="label cursor-pointer flex flex-row flex-wrap">
                        {individualEvents.map((event, index) => (
                            <div key={index} className="flex flex-row justify-between items-center w-72">
                                <span className="label-text p-2">{event}</span>
                                <input
                                    type="checkbox"
                                    value={event}
                                    checked={selectedIndividualEvents.includes(event)}
                                    onChange={handleIndividualCheck}
                                    className="checkbox"
                                />
                            </div>
                        ))}
                        {literacyEvents.map((event, index) => (
                            <div key={index} className="flex flex-row justify-between items-center w-72">
                                <span className="label-text p-2">{event}</span>
                                <input
                                    type="checkbox"
                                    value={event}
                                    checked={selectedLiteracyEvents.includes(event)}
                                    onChange={handleLiteracyCheck}
                                    className="checkbox"
                                />
                            </div>
                        ))}
                    </label>
                </div>

                <div className="flex flex-col p-8 w-full justify-center items-center">
                    <button className="reg w-32 flex justify-center items-center" onClick={handleSubmit}>
                        Submit
                    </button>

                </div>
            </div>
            <dialog id="show_error" className="modal ">
                <div className="modal-box bg-[#2D2D2D]">
                    <form method="dialog ">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <h3 className="font-bold text-lg">Limit Reached</h3>
                    <p className="py-4">You can only select a maximum of 5 individual events.<br />
                        Please deselect an event to select a new one.<br /><br />
                        You have selected the following events:<br />
                        {selectedIndividualEvents.map((event, index) => (
                            <>
                                <span key={index} className="pl-4 pr-4 pt-2 pb-2 badge badge-outline h-auto m-1 ml-0">{event}</span>
                                <br />
                            </>
                        ))}
                    </p>
                </div>
            </dialog>
        </>
    );
}

export default IndividualRegistrationForm;