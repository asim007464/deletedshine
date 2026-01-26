import React, { useEffect } from "react";
import {
  Check,
  Clock,
  Wallet,
  Dumbbell,
  Star,
  Smartphone,
  Briefcase,
  User,
  Heart,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";
import Navbar from "../Components/Homecomponents/Navbar";
import Footer from "../Components/Homecomponents/Footer";

const About = () => {
  // Reset scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="font-jakarta bg-[#fcfdfe]">
      <Navbar />

      {/* --- HERO HEADER --- */}
      <section className="bg-[#0f1216] py-14 text-center text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#448cff]/10 rounded-full blur-3xl"></div>
        <h1 className="text-5xl font-black uppercase tracking-widest relative z-10">
          About the Role
        </h1>
        <p className="text-[#448cff] font-black uppercase mt-4 tracking-widest text-xl relative z-10">
          Shine & Span Professional Team
        </p>
      </section>

      <main className="max-w-7xl mx-auto px-6 py-20 space-y-32">
        {/* --- SECTION 1: ABOUT & MISSION (SPLIT LAYOUT) --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-black uppercase text-slate-900 border-l-4 border-[#448cff] pl-6">
              Professional Cleaner Opportunity
            </h2>
            <p className="text-lg text-slate-600 font-medium leading-relaxed">
              As a Professional Cleaner on our team, you will provide thorough
              cleaning services for both domestic and or commercial properties
              across London. We set high standards – this is not an ordinary
              cleaning job. You’ll be expected to clean meticulously and leave
              each property with a “Wow” feeling for our clients. If a client is
              unhappy with cleaning you will have to freely reclean the areas of
              the property highlighted by the customer.
            </p>
          </div>
          <div className="bg-white p-10 border border-gray-100 rounded-sm shadow-sm">
            <h3 className="text-xl font-black uppercase text-[#448cff] mb-6 flex items-center gap-3">
              <Heart /> Our Mission
            </h3>
            <p className="text-slate-600 font-medium leading-relaxed italic">
              "Our mission is to deliver outstanding results and create that
              “Wow” factor for every client, every time. We foster a culture of
              excellence, integrity, and teamwork. We celebrate jobs done well."
            </p>
          </div>
        </div>

        {/* --- SECTION 2: BENEFITS (4-COLUMN INTERACTIVE) --- */}
        <div className="space-y-16">
          <div className="text-center">
            <h2 className="text-3xl font-black uppercase text-slate-900">
              Benefits of Joining
            </h2>
            <div className="w-16 h-1 bg-[#448cff] mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <InfoCard
              icon={<Wallet size={24} />}
              title="Top Pay"
              desc="Highly competitive pay rates. Get paid the same day you do cleaning."
            />
            <InfoCard
              icon={<Dumbbell size={24} />}
              title="Gym Access"
              desc="Enjoy great perks including a free gym membership to stay healthy."
            />
            <InfoCard
              icon={<Clock size={24} />}
              title="Flexible Scheduling"
              desc="Control your schedule. Tell us the hours you want to work."
            />
            <InfoCard
              icon={<Star size={24} />}
              title="Team Support"
              desc="Guidance, training, and a positive work culture where you are valued."
            />
          </div>
        </div>

        {/* --- SECTION 3: RESPONSIBILITIES & WHAT WE'RE LOOKING FOR --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          {/* Left: Key Responsibilities (Takes 5 columns) */}
          <div className="lg:col-span-5 space-y-10">
            <h3 className="text-2xl font-black uppercase text-slate-900  border-gray-100 pb-4 tracking-tight">
              Key Responsibilities
            </h3>
            <ul className="space-y-8">
              <ListItem text="Clean homes / offices to an exceptional standard (dusting, vacuuming, mopping, etc.)." />
              <ListItem text="Deliver a “wow” factor with every clean." />
              <ListItem text="Maintain professionalism: arrive on time, well-groomed, and in appropriate attire." />
              <ListItem text="Work flexibly and adapt to each client’s needs." />
              <ListItem text="Ensure reliability and consistency in your work quality." />
              <ListItem text="If a client is unhappy with cleaning, you will have to freely reclean the areas of the property highlighted by the customer." />
            </ul>
          </div>

          {/* Right: What We're Looking For (Takes 7 columns with 2x2 cards) */}
          <div className="lg:col-span-7 space-y-10">
            <h3 className="text-2xl font-black uppercase text-slate-900  border-gray-100 pb-4 tracking-tight">
              What We’re Looking For
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <InfoCard
                icon={<Smartphone size={22} />}
                title="Smartphone"
                desc="Must own for scheduling and communication."
                small={true}
              />
              <InfoCard
                icon={<Briefcase size={22} />}
                title="Self-Employed"
                desc="Must provide your own equipment and liability insurance."
                small={true}
              />
              <InfoCard
                icon={<User size={22} />}
                title="Personal Quality"
                desc="Energetic, physically fit, and polite manners."
                small={true}
              />
              <InfoCard
                icon={<ShieldCheck size={22} />}
                title="Appearance"
                desc="Clean, tidy, and well-dressed to reflect premium service."
                small={true}
              />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

// --- REUSABLE SUB-COMPONENTS ---

/**
 * InfoCard: Used for both Benefits and Requirements
 * Features: hover-lift, blue-glow shadow, icon color flip
 */
const InfoCard = ({ icon, title, desc, highlight, small }) => (
  <div
    className={`bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-xl hover:shadow-blue-100/50 hover:-translate-y-1 transition-all duration-300 group ${small ? "p-6" : "p-8"}`}
  >
    {/* Icon box with rounded-2xl to match your image */}
    <div
      className={`${small ? "w-12 h-12 mb-6" : "w-14 h-14 mb-8"} rounded-2xl flex items-center justify-center transition-colors duration-300 ${
        highlight
          ? "bg-[#448cff] text-white shadow-lg shadow-blue-100"
          : "bg-blue-50 text-[#448cff] group-hover:bg-[#448cff] group-hover:text-white"
      }`}
    >
      {icon}
    </div>
    <h4
      className={`font-black uppercase text-slate-900 tracking-tight mb-3 ${small ? "text-sm" : "text-lg"}`}
    >
      {title}
    </h4>
    <p
      className={`text-slate-500 font-medium leading-relaxed ${small ? "text-xs" : "text-[15px]"}`}
    >
      {desc}
    </p>
  </div>
);

/**
 * ListItem: Checkmark in a circular border
 */
const ListItem = ({ text }) => (
  <li className="flex gap-5 items-start group">
    <div className="flex-shrink-0 mt-1">
      <div className="w-6 h-6 rounded-full border-2 border-[#448cff]/30 flex items-center justify-center group-hover:border-[#448cff] transition-colors">
        <Check size={14} className="text-[#448cff]" strokeWidth={4} />
      </div>
    </div>
    <span className="text-[15px] font-bold text-slate-700 leading-snug">
      {text}
    </span>
  </li>
);

export default About;
