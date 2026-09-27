"use client";

import Link from "next/link";
import { useContactFormSubmit } from "@/hooks/useContactFormSubmit";

export default function SignupForm() {
  const { handleSubmit, state, errorMessage, successMessage, isSubmitting } =
    useContactFormSubmit({
      formName: "Account Signup",
      personTag: "Account Signup",
      inquiryType: "Registration",
      successMessage:
        "Thanks for signing up! We'll follow up shortly to help you save properties and get market updates.",
      getExtraFields: () => ({
        message: "Free account signup request from signup page",
      }),
    });

  return (
    <>
      {state === "success" ? (
        <p
          className="mb-6 rounded-xs border border-green-200 bg-green-50 px-4 py-3 text-base text-green-800 dark:border-green-800 dark:bg-green-950 dark:text-green-100"
          role="status"
        >
          {successMessage}
        </p>
      ) : null}
      {state === "error" ? (
        <p
          className="mb-6 rounded-xs border border-red-200 bg-red-50 px-4 py-3 text-base text-red-800 dark:border-red-800 dark:bg-red-950 dark:text-red-100"
          role="alert"
        >
          {errorMessage}
        </p>
      ) : null}
      <form onSubmit={handleSubmit}>
        <div className="mb-8">
          <label
            htmlFor="signup-name"
            className="text-dark mb-3 block text-sm dark:text-white"
          >
            Full Name
          </label>
          <input
            id="signup-name"
            type="text"
            name="name"
            required
            placeholder="Enter your full name"
            className="border-stroke dark:text-body-color-dark dark:shadow-two text-body-color focus:border-primary dark:focus:border-primary w-full rounded-xs border bg-[#f8f8f8] px-6 py-3 text-base outline-hidden transition-all duration-300 dark:border-transparent dark:bg-[#2C303B] dark:focus:shadow-none"
          />
        </div>
        <div className="mb-8">
          <label
            htmlFor="signup-email"
            className="text-dark mb-3 block text-sm dark:text-white"
          >
            Email Address
          </label>
          <input
            id="signup-email"
            type="email"
            name="email"
            required
            placeholder="Enter your email address"
            className="border-stroke dark:text-body-color-dark dark:shadow-two text-body-color focus:border-primary dark:focus:border-primary w-full rounded-xs border bg-[#f8f8f8] px-6 py-3 text-base outline-hidden transition-all duration-300 dark:border-transparent dark:bg-[#2C303B] dark:focus:shadow-none"
          />
        </div>
        <div className="mb-8">
          <label
            htmlFor="signup-password"
            className="text-dark mb-3 block text-sm dark:text-white"
          >
            Your Password
          </label>
          <input
            id="signup-password"
            type="password"
            name="password"
            autoComplete="new-password"
            placeholder="Enter your Password"
            className="border-stroke dark:text-body-color-dark dark:shadow-two text-body-color focus:border-primary dark:focus:border-primary w-full rounded-xs border bg-[#f8f8f8] px-6 py-3 text-base outline-hidden transition-all duration-300 dark:border-transparent dark:bg-[#2C303B] dark:focus:shadow-none"
          />
        </div>
        <div className="mb-8 flex">
          <label
            htmlFor="checkboxLabel"
            className="text-body-color flex cursor-pointer text-sm font-medium select-none"
          >
            <div className="relative">
              <input
                type="checkbox"
                id="checkboxLabel"
                className="sr-only"
              />
              <div className="box border-body-color/20 mt-1 mr-4 flex h-5 w-5 items-center justify-center rounded-sm border dark:border-white/10">
                <span className="opacity-0">
                  <svg
                    width="11"
                    height="8"
                    viewBox="0 0 11 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.0915 0.951972L10.0867 0.946075L10.0813 0.940568C9.90076 0.753564 9.61034 0.753146 9.42927 0.939309L4.16201 6.22962L1.58507 3.63469C1.40401 3.44841 1.11351 3.44879 0.932892 3.63584C0.755703 3.81933 0.755703 4.10875 0.932892 4.29224L0.932878 4.29225L0.934851 4.29424L3.58046 6.95832C3.73676 7.11955 3.94983 7.2 4.1473 7.2C4.36196 7.2 4.55963 7.11773 4.71406 6.9584L10.0468 1.60234C10.2436 1.4199 10.2421 1.1339 10.0915 0.951972ZM4.2327 6.30081L4.2327 6.2998C4.23206 6.30015 4.23237 6.30049 4.23269 6.30082L4.2327 6.30081Z"
                      fill="#3056D3"
                      stroke="#3056D3"
                      strokeWidth="0.4"
                    />
                  </svg>
                </span>
              </div>
            </div>
            <span>
              By creating account means you agree to the
              <a href="#0" className="text-primary hover:underline">
                {" "}
                Terms and Conditions{" "}
              </a>
              , and our
              <a href="#0" className="text-primary hover:underline">
                {" "}
                Privacy Policy{" "}
              </a>
            </span>
          </label>
        </div>
        <div className="mb-6">
          <button
            type="submit"
            disabled={isSubmitting}
            className="shadow-submit dark:shadow-submit-dark bg-primary hover:bg-primary/90 flex w-full items-center justify-center rounded-xs px-9 py-4 text-base font-medium text-white duration-300 disabled:opacity-60"
          >
            {isSubmitting ? "Submitting..." : "Sign up"}
          </button>
        </div>
      </form>
      <p className="text-body-color text-center text-base font-medium">
        Already have an account?{" "}
        <Link href="/signin" className="text-primary hover:underline">
          Sign in
        </Link>
      </p>
    </>
  );
}
