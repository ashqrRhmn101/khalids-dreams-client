import Link from "next/link";

export default function register() {
  return (
    <div className="container mx-auto flex justify-center my-9">
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
        <legend className="fieldset-legend">Register</legend>

        {/* Name */}
        <label className="label">Name</label>
        <input type="name" className="input" placeholder="Your Name" />

        {/* Email */}
        <label className="label">Email</label>
        <input type="email" className="input" placeholder="Email" />

        {/* Password */}
        <label className="label">Password</label>
        <input type="password" className="input" placeholder="Password" />

        <button className="btn btn-neutral mt-4">Register</button>

        <p className="text-sm">
            Already have an account?{" "}
            <Link href="/Auth/login">
              <span className="text-[#CAEB66]">Login</span>
            </Link>
          </p>
      </fieldset>
    </div>
  );
}
