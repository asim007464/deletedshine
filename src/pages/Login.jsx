import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  ArrowLeft,
  Mail,
  Smartphone,
  Loader2,
  Lock,
  Eye,
  EyeOff,
} from "lucide-react";

const Login = () => {
  const navigate = useNavigate();

  // --- Logic State ---
  const [view, setView] = useState("login"); // login, otpChoice, infoInput, verifyCode
  const [method, setMethod] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  // --- Handlers ---
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    setView("otpChoice");
  };

  const handleMethodSelect = (selectedMethod) => {
    setMethod(selectedMethod);
    setView("infoInput");
  };

  const handleInfoSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // Professional fake loading state
    setTimeout(() => {
      setLoading(false);
      setView("verifyCode");
    }, 1500);
  };

  const handleVerifySubmit = (e) => {
    e.preventDefault();
    // Redirects to Home Page as requested
    navigate("/");
  };

  const handleBack = () => {
    if (view === "otpChoice") setView("login");
    else if (view === "infoInput") setView("otpChoice");
    else if (view === "verifyCode") setView("infoInput");
    else navigate("/");
  };

  return (
    <div className="flex h-screen w-full bg-white font-jakarta overflow-hidden">
      {/* --- LEFT SECTION: Branding & Visual --- */}
      <div className="hidden lg:flex w-1/2 bg-[#0f1216] relative items-center justify-center p-20">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80')",
          }}
        ></div>
      </div>

      {/* --- RIGHT SECTION: Form Area --- */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center px-12 md:px-24 overflow-y-auto">
        {/* Step-by-Step Back Button */}
        <button
          onClick={handleBack}
          className="mb-12 inline-flex items-center text-gray-400 font-bold hover:text-[#448cff] transition-all w-fit"
        >
          <ArrowLeft className="mr-2" size={18} /> Back
        </button>

        {/* VIEW 1: SIGN IN (EMAIL & PASSWORD) */}
        {view === "login" && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h1 className="text-3xl font-black uppercase tracking-tight mb-8">
              Sign In
            </h1>
            <form className="space-y-6" onSubmit={handleLoginSubmit}>
              <div className="space-y-2">
                <label className="text-xs font-black uppercase text-slate-400 tracking-widest">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  className="w-full p-4 border border-gray-400 rounded-sm outline-none focus:border-[#448cff] font-bold text-slate-700 bg-white"
                  placeholder="Enter your email"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-black uppercase text-slate-400 tracking-widest">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    required
                    className="w-full p-4 border border-gray-400 rounded-sm outline-none focus:border-[#448cff] font-bold text-slate-700 bg-white"
                    placeholder="••••••••"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-[#448cff]"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>

                {/* --- FORGOT PASSWORD LINK --- */}
                <div className="flex justify-end pt-1">
                  <button
                    type="button"
                    onClick={() => setView("otpChoice")}
                    className="text-[10px] font-black uppercase text-[#448cff] tracking-widest hover:underline"
                  >
                    Forgot password?
                  </button>
                </div>
              </div>

              <button className="w-full bg-[#448cff] text-white py-4 rounded-sm font-black uppercase tracking-widest hover:bg-blue-600 transition-all shadow-lg shadow-blue-100">
                Access Portal
              </button>
            </form>

            <div className="mt-10 text-center space-y-3">
              <p className="text-sm text-slate-400 font-medium">
                New here?{" "}
                <Link
                  to="/apply"
                  className="text-[#448cff] font-black underline"
                >
                  Apply Now
                </Link>
              </p>
              <p className="text-sm text-slate-400 font-medium">
                No account?{" "}
                <Link
                  to="/signup"
                  className="text-[#448cff] font-black underline"
                >
                  Sign Up
                </Link>
              </p>
            </div>
          </div>
        )}

        {/* VIEW 2: OTP METHOD CHOICE */}
        {view === "otpChoice" && (
          <div className="animate-in fade-in zoom-in-95 duration-500">
            <h1 className="text-3xl font-black uppercase tracking-tight mb-4">
              Verification
            </h1>
            <p className="text-slate-500 mb-8 font-medium">
              Where would you like to receive your security code?
            </p>
            <div className="space-y-4">
              <button
                onClick={() => handleMethodSelect("Email")}
                className="w-full flex items-center gap-4 p-6 border border-gray-400 rounded-sm hover:border-[#448cff] hover:bg-blue-50 transition-all group"
              >
                <div className="w-10 h-10 bg-slate-50 rounded-sm flex items-center justify-center text-slate-400 group-hover:text-[#448cff] group-hover:bg-white transition-all">
                  <Mail size={20} />
                </div>
                <span className="font-black uppercase text-sm text-slate-700">
                  Send to Email
                </span>
              </button>
              <button
                onClick={() => handleMethodSelect("Phone Number")}
                className="w-full flex items-center gap-4 p-6 border border-gray-400 rounded-sm hover:border-[#448cff] hover:bg-blue-50 transition-all group"
              >
                <div className="w-10 h-10 bg-slate-50 rounded-sm flex items-center justify-center text-slate-400 group-hover:text-[#448cff] group-hover:bg-white transition-all">
                  <Smartphone size={20} />
                </div>
                <span className="font-black uppercase text-sm text-slate-700">
                  Send to Mobile
                </span>
              </button>
            </div>
          </div>
        )}

        {/* VIEW 3: PROVIDE INFO */}
        {view === "infoInput" && (
          <div className="animate-in fade-in slide-in-from-right-4 duration-500">
            <h1 className="text-3xl font-black uppercase tracking-tight mb-8">
              Confirm {method}
            </h1>
            <form className="space-y-6" onSubmit={handleInfoSubmit}>
              <div className="space-y-2">
                <label className="text-xs font-black uppercase text-slate-400 tracking-widest">
                  Enter registered {method.toLowerCase()}
                </label>
                <input
                  type={method === "Email" ? "email" : "tel"}
                  required
                  className="w-full p-4 border border-gray-400 rounded-sm outline-none focus:border-[#448cff] font-bold text-slate-700 bg-white"
                  placeholder={
                    method === "Email" ? "name@example.com" : "07xxx xxxxxx"
                  }
                />
              </div>
              <button
                disabled={loading}
                className="w-full bg-[#448cff] text-white py-4 rounded-sm font-black uppercase tracking-widest hover:bg-blue-600 flex items-center justify-center min-h-[56px]"
              >
                {loading ? <Loader2 className="animate-spin" /> : "Send Code"}
              </button>
            </form>
          </div>
        )}

        {/* VIEW 4: VERIFY OTP CODE */}
        {view === "verifyCode" && (
          <div className="animate-in fade-in slide-in-from-right-4 duration-500">
            <h1 className="text-3xl font-black uppercase tracking-tight mb-2">
              Verify Identity
            </h1>
            <p className="text-slate-500 mb-8 font-medium">
              Enter the 6-digit code sent to your {method.toLowerCase()}.
            </p>
            <form className="space-y-6" onSubmit={handleVerifySubmit}>
              <input
                required
                maxLength="6"
                className="w-full p-4 border border-gray-400 rounded-sm outline-none focus:border-[#448cff] font-black text-3xl tracking-[0.8em] text-center text-[#448cff] bg-white placeholder:text-slate-100"
                placeholder="000000"
              />
              <button className="w-full bg-[#448cff] text-white py-4 rounded-sm font-black uppercase tracking-widest hover:bg-blue-600 transition-all">
                Verify & Finish
              </button>
            </form>
            <p className="mt-8 text-center text-xs text-slate-400 font-bold uppercase tracking-widest">
              Didn't receive a code?{" "}
              <span className="text-[#448cff] cursor-pointer">Resend</span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
