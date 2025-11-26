"use client";

import { AuthContext } from "@/contexts/authContext";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { use } from "react";
import { useForm } from "react-hook-form";

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { registerUser, userProfile } = use(AuthContext);
  const router = useRouter();

  const handleRegister = (data) => {
    console.log(data);

    registerUser(data.email, data.password)
      .then((result) => {
        console.log(result);

        // update user profile
        const userProfileData = {
          displayName: data.name,
          photoURL: data.url,
        };

        userProfile(userProfileData)
          .then(() => {
            console.log("user profile done");
            router.push("/");
          })
          .catch((error) => console.log(error));
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div>
      <div className="bg-white container mx-auto my-10 border-base-300 rounded-box w-xs border p-4">
        <form onSubmit={handleSubmit(handleRegister)}>
          <fieldset className="fieldset rounded-box p-4">
            <h2 className="text-3xl font-bold text-[#03373D]">Welcome Back</h2>
            <p className="text-lg">Register with ZapShift</p>

            {/* Name */}
            <label className="label">Name</label>
            <input
              type="name"
              {...register("name", { required: true })}
              className="input"
              placeholder="Your Name"
            />
            {errors.name?.type === "required" && (
              <p className="text-red-500">Name is required</p>
            )}

            {/* Photo */}
            {/* <input type="file" className="file-input" /> */}
            <label className="label">Photo</label>
            <input
              type="url"
              {...register("url", { required: true })}
              className="file-input"
              placeholder="Your Photo URL"
            />
            {errors.name?.type === "required" && (
              <p className="text-red-500">Photo is required</p>
            )}

            {/* Email */}
            <label className="label">Email</label>
            <input
              type="email"
              {...register("email", { required: true })}
              className="input"
              placeholder="Email"
            />
            {errors.email?.type === "required" && (
              <p className="text-red-500">Email is required</p>
            )}

            {/* Password */}
            <label className="label">Password</label>
            <input
              type="password"
              {...register("password", { required: true })}
              className="input"
              placeholder="Password"
            />
            {errors.password?.type === "required" && (
              <p className="text-red-500">Password is required</p>
            )}
            {errors.password?.type === "minLength" && (
              <p className="text-red-500">
                Password must be 6 characters or longer
              </p>
            )}

            <button className="btn btn-neutral mt-4">Login</button>

            <p className="text-sm">
              Already have an account?{" "}
              <Link href="/Auth/login">
                <span className="text-[#CAEB66]">Login</span>
              </Link>
            </p>
          </fieldset>
        </form>
      </div>
    </div>
  );
}
