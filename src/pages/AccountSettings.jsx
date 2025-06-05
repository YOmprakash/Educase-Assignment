import { FaCamera } from "react-icons/fa";

export default function Account() {
  return (
    <div className="w-full md:h-full md:max-w-[400px] md:border h-screen md:min-h-[90vh]">
      <div className="bg-white h-15 flex items-center">
        <h2 className="text-lg font-medium text-gray-700 pl-4">Account Settings</h2>
      </div>

      <div className="flex items-center mt-4 px-4 gap-4">
        <div className="relative w-20 h-20">
          <img
            src="https://randomuser.me/api/portraits/women/44.jpg"
            className="w-20 h-20 rounded-full"
            alt="Profile"
          />
          <div className="absolute bottom-0 right-0 bg-[#6C25FF] p-1.5 rounded-full">
            <FaCamera className="text-white text-sm" />
          </div>
        </div>

        <div>
          <h3 className="font-semibold text-[16px]">Marry Doe</h3>
          <p className="text-gray-600 text-sm font-medium">Marry@Gmail.Com</p>
        </div>
      </div>

      <p className="font-normal text-[16px] mt-4 px-4">
        Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut
        Labore Et Dolore Magna Aliquyam Erat, Sed Diam
      </p>
      <hr className="border border-dashed border-gray-300 mt-4" />
    </div>
  );
}
