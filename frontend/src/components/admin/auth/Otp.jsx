import { useState } from "react";

const Otp = () => {
  const [code, setCode] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic for confirming code
  };

  return (
    <div className="h-screen flex items-center justify-center text-gray-300 relative overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center blur-sm" style={{ backgroundImage: 'url("Images/admin/login-bg.jpg")' }}></div>
      <div className="relative bg-white bg-opacity-10 backdrop-blur-md px-4 sm:px-16 py-8 rounded-3xl shadow-2xl w-full max-w-lg m-2">
        <h2 className="text-2xl font-base mb-6 text-center">Forgot Password</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label className="block text-sm mb-2" htmlFor="code">
              Enter the 6-digit code sent to your email id
            </label>
            <input
              type="text"
              id="code"
              name="code"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              placeholder="******"
              className="bg-transparent border-b-2 border-gray-400 w-full py-2 px-3 focus:outline-none focus:shadow-none"
              autoComplete="off"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="w-full bg-shfOrange hover:bg-orange-600 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              CONFIRM
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Otp;
