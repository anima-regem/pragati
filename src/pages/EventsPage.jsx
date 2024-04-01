import { individualEvents, literacyEvents, groupEvents } from "../utils/constants";

const EventsPage = () => {
    return (
        <div className="py-32">
            <h1 className="text-4xl font-bold text-center text-white">Individual Events</h1>
            <div className="w-screen h-full py-10 flex flex-row flex-wrap justify-center items-center">
                {
                    individualEvents.map((event, index) => (
                        <div key={`id-${index}`} className="card w-96 m-5 bg-[#380604] shadow-2xl ">
                            <div className="card-body">
                                <div className="card-actions justify-end">
                                </div>
                                <p>{event}</p>
                            </div>
                        </div>
                    )
                    )
                }
            </div>

            <h1 className="text-4xl font-bold text-center text-white">Offstage Events</h1>
            <div className="w-screen h-full py-10 flex flex-row flex-wrap justify-center items-center">
                {
                    literacyEvents.map((event, index) => (
                        <div key={`id-${index}`} className="card w-96 m-5 bg-[#380604] shadow-2xl ">
                            <div className="card-body">
                                <div className="card-actions justify-end">
                                </div>
                                <p>{event}</p>
                            </div>
                        </div>
                    )
                    )
                }
            </div>

            <h1 className="text-4xl font-bold text-center text-white">Group Events</h1>
            <div className="w-screen h-full py-10 flex flex-row flex-wrap justify-center items-center">
                {
                    groupEvents.map((event, index) => (
                        <div key={`id-${index}`} className="card w-96 m-5 bg-[#380604] shadow-2xl ">
                            <div className="card-body">
                                <div className="card-actions justify-end">
                                </div>
                                <p>{event}</p>
                            </div>
                        </div>
                    )
                    )
                }
            </div>
        </div>
    )
}

export default EventsPage;