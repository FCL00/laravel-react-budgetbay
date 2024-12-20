import { RootLayout as Layout } from "@/layouts/RootLayout";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router";
import { food } from "@/assets";
import { useState, useEffect } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import FlashMessage from "@/components/FlashMessage";
type TFormInputs = {
  email: string;
  password: string;
};

interface FlashMessage {
  title?: string;
  description?: string;
}

export default function Login() {

  const [isFlashVisible, setFlashVisible] = useState(false);
  const [flashMessage, setFlashMessage] = useState<FlashMessage | null>(null);

  const {register, handleSubmit, formState: { errors, isSubmitting }} = useForm<TFormInputs>();

  function onSubmitHandler(data: TFormInputs) {
    console.log(data);
  }

  const [isVisible, setVisibility] = useState(false);

  function isToggle() {
    setVisibility((prev) => !prev);
  }

  useEffect(() => {
    // Check if there's a flash message in localStorage
    const storedFlashMessage = localStorage.getItem("flashMessage");
    if (storedFlashMessage) {
      setFlashMessage(JSON.parse(storedFlashMessage));
      setFlashVisible(true);

      // Remove the flash message from localStorage after showing it
      localStorage.removeItem("flashMessage");
    }
  }, []);


  return (
    <>
      <Layout>
        {isFlashVisible && (
                  <FlashMessage
                    title={flashMessage?.title}
                    description={flashMessage?.description}
                  />
                )}
        <div className="section-container py-16 px-4 md:px-4 mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 shadow-lg">
            <div
              className="rounded-md h-[500px] flex items-end"
              style={{
                backgroundImage: `url(${food})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
            <form
              className="flex flex-col justify-center p-4 rounded-r-md"
              onSubmit={handleSubmit(onSubmitHandler)}
            >
              <div className="mb-4">
                <h1 className="text-2xl font-bold">Login</h1>
                <p>Enter your email below to login to your account</p>
              </div>

              <div className="mb-4 flex flex-col">
                <label className="mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  className="border border-black p-2 rounded-md"
                  type="email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address",
                    },
                  })}
                />
                {errors.email && (
                  <p className="text-red-600">{errors.email.message}</p>
                )}
              </div>

              <div className="mb-4 flex flex-col relative">
                <label className="mb-2 flex justify-between" htmlFor="password">
                  Password
                  <span>
                    <a href="/forgot-password">Forgot your password?</a>
                  </span>
                </label>
                <input
                  className="border border-black p-2 rounded-md"
                  type={isVisible ? "text" : "password"}
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 8,
                      message: "Password must be at least 8 characters long",
                    },
                    maxLength: {
                      value: 20,
                      message: "Password cannot exceed 20 characters",
                    },
                    pattern: {
                      value:
                        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
                      message:
                        "Password must include at least one uppercase letter, one lowercase letter, one number, and one special character",
                    },
                  })}
                />
                <button
                  className="absolute pt-10 right-2 "
                  type="button"
                  onClick={isToggle}
                >
                  {isVisible ? <FaEyeSlash className="w-7 h-7" /> : <FaEye className="w-7 h-7" />}
                </button>
                {errors.password && (
                  <p className="text-red-600">{errors.password.message}</p>
                )}
              </div>
              <button
                className="p-3 bg-black text-white rounded-md mb-4 hover:bg-black/90"
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Login"}
              </button>

              <NavLink className="text-center" to="/signup">
                Don't have an account?{" "}
                <span className="underline">Sign Up</span>
              </NavLink>
            </form>
          </div>
        </div>
      </Layout>
    </>
  );
}

// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router";
// import FlashMessage from "@/components/FlashMessage"; // Assuming this is your FlashMessage component

// export default function Login() {
//   const [isFlashVisible, setFlashVisible] = useState(false);
//   const [flashMessage, setFlashMessage] = useState<FlashMessage | null>(null);
//   const navigate = useNavigate();

  // useEffect(() => {
  //   // Check if there's a flash message in localStorage
  //   const storedFlashMessage = localStorage.getItem("flashMessage");
  //   if (storedFlashMessage) {
  //     setFlashMessage(JSON.parse(storedFlashMessage));
  //     setFlashVisible(true);

  //     // Remove the flash message from localStorage after showing it
  //     localStorage.removeItem("flashMessage");
  //   }
  // }, []);

//   return (
//     <>
//       {isFlashVisible && flashMessage && (
//         <FlashMessage title={flashMessage.title} description={flashMessage.description} />
//       )}
//       {/* Your login form goes here */}
//     </>
//   );
// }


// npm install react-flash-message
// Create a Flash Message Component: Create a component to display the flash message:
// import React from 'react';
// import FlashMessage from 'react-flash-message';
// const Flash = ({ message }) => (
//   <FlashMessage duration={5000}>
//     <strong>{message}</strong>
//   </FlashMessage>
// );
// export default Flash;

// Use the Flash Message Component: Integrate the flash message component into your main component:
// import React, { useState } from 'react';
// import Flash from './Flash';
// const App = () => {
//   const [flashMessage, setFlashMessage] = useState('');

//   const showMessage = () => {
//     setFlashMessage('This is a flash message!');
//     setTimeout(() => setFlashMessage(''), 5000); // Clear message after 5 seconds
//   };
//   return (
//     <div>
//       <button onClick={showMessage}>Show Flash Message</button>
//       {flashMessage && <Flash message={flashMessage} />}
//     </div>
//   );
// };

// export default App;

