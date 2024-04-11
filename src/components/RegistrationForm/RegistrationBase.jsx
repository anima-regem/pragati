
import { useState } from 'react';
import IndividualRegistrationForm from './IndividualRegistrationForm';
import GroupRegistrationForm from './GroupRegistrationForm';
import LiteracyRegistrationForm from './LiteracyRegistrationForm';

const RegistrationBase = () => {
    // const [selected, setSelected] = useState('individual');


    return (
        <>

            {
                /* 
                Registrations are now closed
                */
            }
            <div className="flex flex-col justify-center items-center h-screen p-8">
                <h1 className="text-3xl font-bold">Registrations are now closed</h1>
            </div>

            {/* <div className='flex flex-row justify-center items-center m-auto flex-wrap'>
                <button
                    className={`btn rounded-full w-32 ${selected === 'individual' ? 'bg-red-500' : 'bg-[#2D2D2D]'
                        } text-white m-2`}
                    onClick={() => setSelected('individual')}
                >
                    Individual
                </button>

                <button
                    className={`btn rounded-full w-32 ${selected === 'literacy' ? 'bg-red-500' : 'bg-[#2D2D2D]'
                        } text-white m-2`}
                    onClick={() => setSelected('literacy')}
                >
                    Literacy
                </button>

                <button
                    className={`btn rounded-full w-32 ${selected === 'group' ? 'bg-red-500' : 'bg-[#2D2D2D]'
                        } text-white m-2`}
                    onClick={() => setSelected('group')}
                >
                    Group
                </button>
            </div>

            <div className='registration__form__container'>
                {selected === 'individual' && <IndividualRegistrationForm />}
                {selected === 'literacy' && <LiteracyRegistrationForm />}
                {selected === 'group' && <GroupRegistrationForm />}

            </div> */}
        </>
    )
}

export default RegistrationBase;