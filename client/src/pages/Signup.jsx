import { Link } from "react-router-dom";
import { Button, Label, TextInput } from "flowbite-react";
export const Signup = () => {
  return (
    <div className="min-h-screen mt-50">
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center">
        {/* Left */}
        <div className="flex-1">
          <Link
            to="/"
            className="self-center font-bold dark:text-white text-4xl"
          >
            <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
              Hema
            </span>{" "}
            Blog
          </Link>
          <p className="text-sm mt-5">
            Sign up here, with email & password or with Google
          </p>
        </div>
        {/* Right */}
        <div className="flex-1">
          <form className="flex flex-col gap-4 ">
            <div>
              <Label value="Your Username" />
              <TextInput type="text" placeholder="username" id="username" />
            </div>
            <div>
              <Label value="Your Email" />
              <TextInput
                type="email"
                placeholder="name@company.com"
                id="email"
              />
            </div>
            <div>
              <Label value="Your Password" />
              <TextInput type="password" placeholder="Password" id="password" />
            </div>
            <Button gradientDuoTone="purpleToPink" type="submit">
              Sign Up
            </Button>
          </form>
          <div className="flex gap-2 text-sm mt-5">
            <span>Have an account?</span>
            <Link to="/sign-in" className="text-blue-500" />
          </div>
        </div>
      </div>
    </div>
  );
};
