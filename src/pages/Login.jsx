import { useState } from 'react';
import InputField from '../components/InputField';
import { useNavigate } from 'react-router-dom';
export default function Login() {
   const [form, setForm] = useState({ email: '', password: '' });
  const navigate = useNavigate()

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

 const isFormFilled = form.email.trim() !== '' && form.password.trim() !== '';
  const handleSubmit = (e) => {
    e.preventDefault();
    
    navigate('/account');
  };
  return (
    <div className="p-6 md:h-full md:max-w-[400px] md:border  md:min-h-[90vh] flex justify-start h-screen w-full  flex-col">
      <h2 className="text-3xl font-semibold ">Signin to your<br />  PopX account</h2>
      <p className="text-gray-500 mt-1 font-normal mb-6 max-w-[200px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>

      <div className="flex flex-col gap-4">
        <InputField
        label="Email Address"
        type="email"
        name="email"
        value={form.email}
        onChange={handleChange}
        placeholder="Enter email address"
      />
      <InputField
        label="Password"
        type="password"
        name="password"
        value={form.password}
        onChange={handleChange}
        placeholder="Enter password"
      />

       <button
        type="submit"
        disabled={!isFormFilled}
        onClick={handleSubmit}
        className={`w-full font-semibold text-lg py-3 rounded mt-4 transition-colors duration-300 ${
          isFormFilled
            ? 'bg-[#6C25FF] text-white cursor-pointer'
            : 'bg-[#D4D4D4] text-white cursor-not-allowed'
        }`}
      >
        Login
      </button>
      </div>
    </div>
  );
}
