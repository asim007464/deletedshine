import React from "react";
import {
  Clock,
  Wallet,
  Dumbbell,
  Star,
  ShieldCheck,
  CheckCircle2,
  User,
  Smartphone,
  Briefcase,
  Check,
  Heart,
} from "lucide-react";
import Navbar from "../Components/Homecomponents/Navbar";
import Footer from "../Components/Homecomponents/Footer";

const About = () => {
  return (
    <div className="font-jakarta bg-white">
      <Navbar />

      {/* Header */}
      <section className="bg-[#0f1216] py-24 text-center">
        <h1 className="text-5xl font-black text-white uppercase tracking-widest">
          About the Employer
        </h1>
        <p className="text-[#448cff] mt-4 font-black uppercase tracking-widest text-sm">
          Join London's Premium Cleaning Team
        </p>
      </section>

      {/* 1. About the Role & Mission */}
      <section className="py-24 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-3xl font-black uppercase text-slate-900 mb-6">
            About the Role
          </h2>
          <p className="text-slate-600 text-lg font-medium leading-relaxed mb-6">
            As a Professional Cleaner on our team, you will provide thorough
            cleaning services for both domestic and commercial properties across
            London. We set high standards – this is not an ordinary cleaning
            job.
          </p>
          <p className="text-slate-600 text-lg font-medium leading-relaxed">
            Our mission is to leave each property with a{" "}
            <span className="text-[#448cff] font-black">“Wow”</span> feeling. We
            foster a culture of excellence, integrity, and teamwork.
          </p>
        </div>
        <div className="bg-slate-50 p-10 border border-gray-400 rounded-sm">
          <h3 className="text-xl font-black uppercase text-[#448cff] mb-6 flex items-center gap-3">
            <Heart size={24} /> Our Culture
          </h3>
          <ul className="space-y-4 text-slate-700 font-bold">
            <li className="flex gap-3">
              <CheckCircle2 className="text-[#448cff] shrink-0" /> Celebrate
              jobs done well
            </li>
            <li className="flex gap-3">
              <CheckCircle2 className="text-[#448cff] shrink-0" /> Continuous
              improvement & training
            </li>
            <li className="flex gap-3">
              <CheckCircle2 className="text-[#448cff] shrink-0" /> Supportive
              community (Never alone)
            </li>
          </ul>
        </div>
      </section>

      {/* 2. Benefits Section (The Grid) */}
      <section className="py-24 bg-slate-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-black uppercase text-center mb-16">
            Benefits of Joining Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <InfoCard
              icon={<Wallet />}
              title="Top Pay"
              desc="Competitive rates. Get paid the same day you clean."
            />
            <InfoCard
              icon={<Dumbbell />}
              title="Gym Membership"
              desc="Free gym access to keep you physically fit."
            />
            <InfoCard
              icon={<Clock />}
              title="Flexible"
              desc="Control your schedule. daytime hours to suit you."
            />
            <InfoCard
              icon={<Star />}
              title="Bonuses"
              desc="Rewards for outstanding service and reliability."
            />
          </div>
        </div>
      </section>

      {/* 3. Responsibilities & Requirements */}
      <section className="py-24 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div>
          <h2 className="text-3xl font-black uppercase text-slate-900 mb-8 border-b-4 border-[#448cff] inline-block">
            Key Responsibilities
          </h2>
          <div className="space-y-6">
            <p className="font-bold text-slate-500 italic">
              "This role involves physical work and attention to detail. If you
              take pride in a job well done, you’ll fit right in!"
            </p>
            <ListOption text="Clean meticulously (dusting, vacuuming, sanitizing, etc)." />
            <ListOption text="Deliver a “wow” factor with every single clean." />
            <ListOption text="Maintain professionalism: Arrive on time and well-groomed." />
            <ListOption text="Work flexibly and adapt to client’s special instructions." />
          </div>
        </div>
        <div>
          <h2 className="text-3xl font-black uppercase text-slate-900 mb-8 border-b-4 border-[#448cff] inline-block">
            Requirements
          </h2>
          <div className="space-y-4">
            <RequirementCard
              icon={<Smartphone />}
              title="Smartphone"
              desc="Must own for scheduling and communication."
            />
            <RequirementCard
              icon={<Briefcase />}
              title="Self-Employed"
              desc="Must have or be prepared to get liability insurance."
            />
            <RequirementCard
              icon={<User />}
              title="Polite Manners"
              desc="Excellent communication skills with clients."
            />
            <RequirementCard
              icon={<ShieldCheck />}
              title="Appearance"
              desc="Present yourself clean, tidy, and well-dressed."
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

// Sub-components for Clean Design
const InfoCard = ({ icon, title, desc }) => (
  <div className="p-8 border border-gray-400 rounded-sm bg-white hover:border-[#448cff] transition-all">
    <div className="text-[#448cff] mb-6">{icon}</div>
    <h3 className="text-lg font-black uppercase mb-3">{title}</h3>
    <p className="text-slate-500 text-sm font-medium leading-relaxed">{desc}</p>
  </div>
);

const ListOption = ({ text }) => (
  <div className="flex gap-4 items-start">
    <div className="w-5 h-5 bg-[#448cff] rounded-full flex items-center justify-center text-white shrink-0 mt-1">
      <Check size={12} strokeWidth={4} />
    </div>
    <p className="text-slate-700 font-bold">{text}</p>
  </div>
);

const RequirementCard = ({ icon, title, desc }) => (
  <div className="flex gap-4 p-4 border-b border-gray-100 last:border-0">
    <div className="text-[#448cff] shrink-0 mt-1">{icon}</div>
    <div>
      <h4 className="font-black uppercase text-sm">{title}</h4>
      <p className="text-slate-500 text-sm font-medium">{desc}</p>
    </div>
  </div>
);

export default About;
