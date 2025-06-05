import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import InputField from '../components/InputField'; 

export default function Register() {
  const [form, setForm] = useState({
    fullName: '',
    phone: '',
    email: '',
    password: '',
    company: '',
    isAgency: true,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleRadioChange = (val) => {
    setForm({ ...form, isAgency: val });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/account');
  };

  return (
    <form onSubmit={handleSubmit} className="w-full md:h-full md:max-w-[400px] md:border  md:min-h-[90vh] flex flex-col justify-start h-screen px-4 pt-10">
      <div className="overflow-y-auto flex-1 space-y-4 pb-4">
        <h2 className="text-3xl font-semibold">Create your <br /> PopX account</h2>

        <InputField
          label="Full Name"
          type="text"
          name="fullName"
          value={form.fullName}
          onChange={handleChange}
          placeholder="Enter full name"
        />
        <InputField
          label="Phone Number"
          type="tel"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          placeholder="Enter phone number"
        />
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
        <InputField
          label="Company Name"
          type="text"
          name="company"
          value={form.company}
          onChange={handleChange}
          placeholder="Enter company name"
        />

        <div>
          <p className="text-xs text-purple-600 mb-2">Are you an Agency?*</p>
          <div className="flex gap-4">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                checked={form.isAgency}
                onChange={() => handleRadioChange(true)}
              />
              Yes
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                checked={!form.isAgency}
                onChange={() => handleRadioChange(false)}
              />
              No
            </label>
          </div>
        </div>
      </div>

      <button type="submit" className="bg-[#6C25FF] mb-4 text-white py-3 rounded">
        Create Account
      </button>
    </form>
  );
}
