
import { useState } from 'react';
import IndividualRegistrationForm from './IndividualRegistrationForm';
import GroupRegistrationForm from './GroupRegistrationForm';

const RegistrationBase = () => {
    const [selected, setSelected] = useState('individual');


    return (
        <>
            <div className='flex flex-row justify-center items-center m-auto'>
                <button
                    className={`btn rounded-full w-32 ${selected === 'individual' ? 'bg-red-500' : 'bg-[#2D2D2D]'
                        } text-white m-2`}
                    onClick={() => setSelected('individual')}
                >
                    Individual
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
                {selected === 'group' && <GroupRegistrationForm />}

            </div>
        </>
    )
}

export default RegistrationBase;