import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const ResetPassword = () => {
  const [formData, setFormData] = useState({
    newPassword: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic for resetting password
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <div className="h-screen flex items-center justify-center text-gray-300 relative overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center blur-sm" style={{ backgroundImage: 'url("Images/admin/login-bg.jpg")' }}></div>
      <div className="relative bg-white bg-opacity-10 backdrop-blur-md px-4 sm:px-16 py-8 rounded-3xl shadow-2xl w-full max-w-lg m-2">
        <h2 className="text-2xl font-base mb-6 text-center">Forgot Password</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4 relative">
            <label className="block text-sm mb-2" htmlFor="newPassword">
              Enter New Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              id="newPassword"
              name="newPassword"
              value={formData.newPassword}
              onChange={handleChange}
              placeholder="********"
              className="bg-transparent border-b-2 border-gray-400 w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-none"
            />
            <button type="button" onClick={togglePasswordVisibility} className="absolute right-0 top-0 mt-8 mr-3 focus:outline-none">
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
          <div className="mb-4 relative">
            <label className="block text-sm mb-2" htmlFor="confirmPassword">
              Confirm Password
            </label>
            <input
              type={showConfirmPassword ? "text" : "password"}
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="********"
              className="bg-transparent border-b-2 border-gray-400 w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-none"
            />
            <button type="button" onClick={toggleConfirmPasswordVisibility} className="absolute right-0 top-0 mt-8 mr-3 focus:outline-none">
              {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="w-full bg-shfOrange hover:bg-orange-600 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              SUBMIT
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ResetPassword;
