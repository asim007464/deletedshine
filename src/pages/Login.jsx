import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Lock, User } from "lucide-react";

const Login = () => {
  return (
    <div className="flex h-screen bg-white font-jakarta">
      {/* Visual Side */}
      <div className="hidden lg:flex w-1/2 bg-[#0f1216] relative items-center justify-center p-20">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80')",
          }}
        ></div>
        <div className="relative z-10 text-white max-w-md">
          <h2 className="text-4xl font-black uppercase mb-6 tracking-tight">
            Worker Portal
          </h2>
          <p className="text-gray-400 text-lg font-medium">
            Log in to your account to check application status or view available
            cleaning assignments in your area.
          </p>
        </div>
      </div>

      {/* Form Side */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center px-12 md:px-24">
        <Link
          to="/"
          className="mb-12 inline-flex items-center text-gray-400 font-bold hover:text-[#448cff] transition-all"
        >
          <ArrowLeft className="mr-2" size={18} /> Back to Home
        </Link>
        <h1 className="text-3xl font-black uppercase tracking-tight mb-8">
          Sign In
        </h1>
        <form className="space-y-6">
          <div className="space-y-2">
            <label className="text-xs font-black uppercase text-slate-400">
              Username
            </label>
            <input
              type="text"
              className="w-full p-4 border border-gray-400 rounded-sm outline-none focus:border-[#448cff]"
              placeholder="Enter username"
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-black uppercase text-slate-400">
              Password
            </label>
            <input
              type="password"
              className="w-full p-4 border border-gray-400 rounded-sm outline-none focus:border-[#448cff]"
              placeholder="••••••••"
            />
          </div>
          <button className="w-full bg-[#448cff] text-white py-4 rounded-sm font-black uppercase tracking-widest hover:bg-blue-600 transition-all shadow-lg shadow-blue-100">
            Access Portal
          </button>
        </form>
        <p className="mt-10 text-center text-sm text-slate-400 font-medium">
          New here?{" "}
          <Link to="/apply" className="text-[#448cff] font-black underline">
            Submit an application
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
