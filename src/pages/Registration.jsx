import '../assets/stylesheets/Registration.css';
import RegistrationBase from '../components/RegistrationForm/RegistrationBase';

const Registration = () => {
  return (
    <div className=" h-full bg-black registration__page d-flex pt-28">
      <div className="registration__form d-flex flex-column justify-content-center align-items-center pt-20">
        <RegistrationBase />
      </div>
    </div>
  );
};

export default Registration;