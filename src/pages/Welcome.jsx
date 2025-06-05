import { Link } from 'react-router-dom';

export default function Welcome() {
  return (
    <div className="flex flex-col   justify-end h-screen md:h-full md:max-w-[400px] md:border  md:min-h-[90vh] w-full px-6 pb-10">
      <h1 className="text-3xl font-semibold">Welcome to PopX</h1>
      <p className="text-gray-500 font-normal max-w-[300px] text-lg mt-1 mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <Link to="/register">
        <button className="w-full bg-[#6C25FF] text-white py-3 font-medium text-lg rounded-md mb-3">Create Account</button>
      </Link>
      <Link to="/login">
        <button className="w-full bg-[#bca6e9] text-black font-medium text-lg py-3 rounded-md">Already Registered? Login</button>
      </Link>
    </div>
  );
}
