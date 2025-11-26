"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { setCookie } from "cookies-next";
import { useContext } from "react";
import { AuthContext } from "@/contexts/authContext";

export default function Login() {
  const { registerLogin } = useContext(AuthContext);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const userSignIn = (data) => {
    registerLogin(data.email, data.password)
      .then((result) => {
        console.log("Login Success:", result);

        // set cookie
        setCookie("authUser", result.user.uid, { path: "/" });

        router.push("/");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="bg-white container mx-auto my-10 border-base-300 rounded-box w-xs border p-4">
      <form onSubmit={handleSubmit(userSignIn)}>
        <fieldset className="fieldset rounded-box p-4">
          <h2 className="text-3xl font-bold text-[#03373D]">Welcome Back</h2>
          <p className="text-lg">Login with Khalids Dreams</p>

          {/* Email */}
          <label className="label">Email</label>
          <input
            type="email"
            {...register("email", { required: true })}
            className="input"
            placeholder="Email"
          />
          {errors.email && <p className="text-red-500">Email is required</p>}

          {/* Password */}
          <label className="label">Password</label>
          <input
            type="password"
            {...register("password", { required: true })}
            className="input"
            placeholder="Password"
          />
          {errors.password && (
            <p className="text-red-500">Password is required</p>
          )}

          <button className="btn btn-neutral mt-4">Login</button>

          <p className="text-sm">
            Don’t have any account?{" "}
            <Link href="/Auth/register">
              <span className="text-[#CAEB66]">Register</span>
            </Link>
          </p>
        </fieldset>
      </form>
    </div>
  );
}
