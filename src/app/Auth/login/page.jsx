import Link from "next/link";

export default function login() {
  return (
    <div className="container mx-auto flex justify-center my-9">
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
        <legend className="fieldset-legend">Login</legend>

        <label className="label">Email</label>
        <input type="email" className="input" placeholder="Email" />

        <label className="label">Password</label>
        <input type="password" className="input" placeholder="Password" />

        <button className="btn btn-neutral mt-4">Login</button>

        <p className="text-sm">
          GDon’t have any account?{" "}
          <Link href="/Auth/register">
            <span className="text-[#CAEB66]">Register</span>
          </Link>
        </p>
      </fieldset>
    </div>
  );
}
