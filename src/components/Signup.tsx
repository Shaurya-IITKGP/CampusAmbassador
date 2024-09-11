import React from "react";

const SignupForm = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white flex items-center justify-center">
      {/* Wrapper that takes up approx. 65% of the right side */}
      <div className="w-full lg:w-8/12 flex justify-end">
        <div className="bg-gray-900 p-8 rounded-lg shadow-lg w-full lg:w-9/12 xl:w-7/12">
          <h2 className="text-2xl font-bold mb-4 text-center">Signup</h2>

          <div className="space-y-4">
            <button className="w-full bg-gray-700 p-2 rounded-lg flex items-center justify-center hover:bg-gray-600">
              <img
                src="google-logo.png"
                alt="Google"
                className="w-6 h-6 mr-2"
              />{" "}
              Signup with Google
            </button>
          </div>

          <div className="text-center text-gray-500 mt-4">Or</div>

          <form className="mt-4">
            <div className="space-y-4">
              <div className="flex space-x-4">
                {/* First Name */}
                <div className="w-1/2">
                  <label htmlFor="first-name" className="block text-sm">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="first-name"
                    className="w-full p-2 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    placeholder="First Name"
                  />
                </div>

                {/* Last Name */}
                <div className="w-1/2">
                  <label htmlFor="last-name" className="block text-sm">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="last-name"
                    className="w-full p-2 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    placeholder="Last Name"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="gender" className="block text-sm">
                  Gender
                </label>
                <div className="flex items-center space-x-4 mt-2">
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="male"
                      name="gender"
                      value="Male"
                      className="h-4 w-4 text-yellow-500 focus:ring-yellow-500 bg-gray-800 border-gray-600"
                    />
                    <label htmlFor="male" className="ml-2 text-sm">
                      Male
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="female"
                      name="gender"
                      value="Female"
                      className="h-4 w-4 text-yellow-500 focus:ring-yellow-500 bg-gray-800 border-gray-600"
                    />
                    <label htmlFor="female" className="ml-2 text-sm">
                      Female
                    </label>
                  </div>
                </div>
              </div>
              <div>
                <label htmlFor="Phone-Number" className="block text-sm">
                  Phone Number
                </label>
                <input
                  type="Phone-Number"
                  id="Phone-Number"
                  className="w-full p-2 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  placeholder="Phone Number"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-2 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  placeholder="Email"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm">
                  Email ID
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-2 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  placeholder="Email"
                />
              </div>
              <div>
                <label htmlFor="password" className="block text-sm">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="w-full p-2 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  placeholder="Password"
                />
              </div>
            </div>

            <button className="w-full mt-6 bg-yellow-500 p-2 rounded-lg text-black font-semibold hover:bg-yellow-400">
              Sign Up
            </button>
          </form>

          <p className="text-center text-gray-500 mt-4 text-sm">
            By creating an account, you agree to the{" "}
            <a href="#" className="text-yellow-500">
              Terms of Service
            </a>
            .
          </p>

          <p className="text-center text-gray-500 mt-2">
            Already have an account?{" "}
            <a href="#" className="text-yellow-500">
              Login
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
