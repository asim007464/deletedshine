import React, { useEffect } from "react";
import { Gift, Share2, TrendingUp, CheckCircle2, Info } from "lucide-react";
import Navbar from "../Components/Homecomponents/Navbar";
import Footer from "../Components/Homecomponents/Footer";

const Referral = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // In a real app, this ID comes from the logged-in user's profile
  const cleanerId = "CLEANER786";
  const referralLink = `https://shinespan.netlify.app/apply?ref=${cleanerId}`;

  const copyLink = () => {
    navigator.clipboard.writeText(referralLink);
    alert("Referral link copied to clipboard!");
  };

  return (
    <div className="font-jakarta bg-white">
      <Navbar />

      {/* --- Header (Matches your Contact/About style) --- */}
      <section className="bg-white py-20 text-center border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-black text-[#1e293b] mb-4 uppercase tracking-tight leading-tight">
            Refer & <span className="text-[#448cff]">Earn £250</span>
          </h1>
          <p className="text-slate-500 text-lg md:text-xl font-medium max-w-2xl mx-auto leading-relaxed opacity-90">
            <i>Help</i> our professional team and get rewarded. Share your
            unique link with experienced cleaners <i>across</i> London.
          </p>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left Side: Process */}
          <div className="space-y-12">
            <h2 className="text-3xl font-black uppercase text-slate-900 border-l-4 border-[#448cff] pl-6">
              How it works
            </h2>
            <div className="space-y-8">
              <Step
                number="01"
                title="Share Your Link"
                desc="Send your unique referral link to professional cleaners you know."
              />
              <Step
                number="02"
                title="They Apply & Work"
                desc="Your friend applies and starts working with our elite London team."
              />
              <Step
                number="03"
                title="Earn Your Bonus"
                desc="After they complete 3 months of high-quality service, you receive £250."
              />
            </div>
          </div>

          {/* Right Side: Link Box */}
          <div className="bg-slate-50 md:p-10 p-4 border border-gray-300 rounded-sm shadow-xl shadow-blue-100/20 text-center">
            <Gift className="mx-auto text-[#448cff] mb-6" size={48} />
            <h3 className="text-xl font-black uppercase text-slate-900 mb-4">
              Your Unique Link
            </h3>
            <p className="text-sm text-slate-500 font-medium mb-8">
              Copy this link and send it via WhatsApp or SMS to your connection.
            </p>

            <div className="flex items-center gap-2 bg-white p-2 border border-gray-400 rounded-sm mb-6">
              <input
                type="text"
                readOnly
                value={referralLink}
                className="flex-1 bg-transparent px-3 font-bold text-xs text-slate-400 outline-none"
              />
              <button
                onClick={copyLink}
                className="bg-[#448cff] text-white px-6 py-2 rounded-sm font-black uppercase text-[10px] hover:bg-blue-700 transition-all"
              >
                Copy Link
              </button>
            </div>

            <div className="flex items-start gap-3 text-left bg-blue-50 p-4 border border-blue-100">
              <Info size={18} className="text-[#448cff] shrink-0 mt-0.5" />
              <p className="text-xs text-slate-600 font-medium leading-relaxed">
                Bonus is paid only if the referred cleaner maintains 100%
                customer satisfaction for a continuous period of 3 months.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

const Step = ({ number, title, desc }) => (
  <div className="flex gap-6">
    <span className="text-4xl font-black text-[#448cff]/20">{number}</span>
    <div>
      <h4 className="text-lg font-black uppercase text-slate-900 mb-1">
        {title}
      </h4>
      <p className="text-slate-500 font-medium text-[15px]">{desc}</p>
    </div>
  </div>
);

export default Referral;
