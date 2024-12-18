import { RootLayout as Layout } from "@/layouts/RootLayout";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router";
import { food } from "@/assets";

type TFormInputs = {
  email: string;
  password: string;
};

export default function signup() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<TFormInputs>();

  function onSubmitHandler(data: TFormInputs) {
    console.log(data);
  }

  return (
    <>
      <Layout>
        <div className="section-container py-24 px-4 md:px-4">
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
                <h1 className="text-2xl font-bold">Signup</h1>
                <p>Enter your email and password to create an account</p>
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

              <div className="mb-4 flex flex-col">
                <label className="mb-2 flex justify-between" htmlFor="password">
                  Password{" "}
                  <span>
                    <a href="/forgot-password">Forgot your password?</a>
                  </span>
                </label>
                <input
                  className="border border-black p-2 rounded-md"
                  type="password"
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
                {errors.password && (
                  <p className="text-red-600">{errors.password.message}</p>
                )}
              </div>
              <button
                className="p-3 bg-black text-white rounded-md mb-4"
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Login"}
              </button>

              <NavLink className="text-center" to="/login">
                Already have an account?{" "}
                <span className="underline">Login</span>
              </NavLink>
            </form>
          </div>
        </div>
      </Layout>
    </>
  );
}
