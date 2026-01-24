import React from "react";
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
} from "lucide-react";
import Navbar from "../Components/Homecomponents/Navbar";
import Footer from "../Components/Homecomponents/Footer";

const About = () => {
  return (
    <div className="font-jakarta bg-white">
      <Navbar />
      <section className="bg-[#0f1216] py-24 text-center text-white">
        <h1 className="text-5xl font-black uppercase tracking-widest">
          About the Role
        </h1>
        <p className="text-[#448cff] font-black uppercase mt-4 tracking-widest text-sm">
          Shine & Span Professional Team
        </p>
      </section>

      <main className="max-w-7xl mx-auto px-6 py-20 space-y-24">
        {/* About & Mission */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-black uppercase text-slate-900">
              Professional Cleaner Opportunity
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed font-medium">
              As a Professional Cleaner on our team, you will provide thorough
              cleaning services for both domestic and or commercial properties
              across London. We set high standards – this is not an ordinary
              cleaning job. You’ll be expected to clean meticulously and leave
              each property with a “Wow” feeling for our clients.
            </p>
          </div>
          <div className="bg-slate-50 p-10 border border-gray-400 rounded-sm">
            <h3 className="text-xl font-black uppercase text-[#448cff] mb-6 flex items-center gap-3">
              <Heart /> Our Mission
            </h3>
            <p className="text-slate-600 font-medium leading-relaxed">
              Our mission is to deliver outstanding results and create that
              “Wow” factor for every client, every time. We foster a culture of
              excellence, integrity, and teamwork. We celebrate jobs done well.
            </p>
          </div>
        </div>

        {/* Benefits */}
        <div>
          <h2 className="text-3xl font-black uppercase text-center mb-12">
            Benefits of Joining
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <BenefitCard
              icon={<Wallet />}
              title="Top Pay"
              desc="Highly competitive pay rates. Get paid the same day you do cleaning."
            />
            <BenefitCard
              icon={<Dumbbell />}
              title="Gym Access"
              desc="Enjoy great perks including a free gym membership to stay healthy."
            />
            <BenefitCard
              icon={<Clock />}
              title="Flexible"
              desc="Control your schedule. Tell us the hours you want to work."
            />
            <BenefitCard
              icon={<Star />}
              title="Support"
              desc="Guidance, training, and a positive work culture where you are valued."
            />
          </div>
        </div>

        {/* Responsibilities & Requirements */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div className="space-y-8">
            <h3 className="text-2xl font-black uppercase border-b-4 border-[#448cff] inline-block">
              Key Responsibilities
            </h3>
            <ul className="space-y-4">
              <ListItem text="Clean homes / offices to an exceptional standard (dusting, vacuuming, mopping, etc.)." />
              <ListItem text="Deliver a “wow” factor with every clean." />
              <ListItem text="Maintain professionalism: arrive on time, well-groomed, and in appropriate attire." />
              <ListItem text="Work flexibly and adapt to each client’s needs." />
              <ListItem text="Ensure reliability and consistency in your work quality." />
            </ul>
          </div>
          <div className="space-y-8">
            <h3 className="text-2xl font-black uppercase border-b-4 border-[#448cff] inline-block">
              What We’re Looking For
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <ReqCard
                icon={<Smartphone />}
                title="Smartphone"
                desc="Must own for scheduling and communication."
              />
              <ReqCard
                icon={<Briefcase />}
                title="Self-Employed"
                desc="Must provide your own equipment and liability insurance."
              />
              <ReqCard
                icon={<User />}
                title="Personal Quality"
                desc="Energetic, physically fit, and polite manners."
              />
              <ReqCard
                icon={<ShieldCheck />}
                title="Appearance"
                desc="Clean, tidy, and well-dressed to reflect premium service."
              />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

const BenefitCard = ({ icon, title, desc }) => (
  <div className="p-8 border border-gray-400 rounded-sm text-center hover:border-[#448cff] transition-all">
    <div className="text-[#448cff] flex justify-center mb-4">{icon}</div>
    <h4 className="font-black uppercase mb-2">{title}</h4>
    <p className="text-slate-500 text-sm font-medium">{desc}</p>
  </div>
);

const ListItem = ({ text }) => (
  <li className="flex gap-4 items-start font-bold text-slate-700">
    <div className="w-5 h-5 bg-[#448cff] rounded-full flex items-center justify-center text-white shrink-0 mt-1">
      <Check size={12} strokeWidth={4} />
    </div>
    {text}
  </li>
);

const ReqCard = ({ icon, title, desc }) => (
  <div className="p-4 border border-gray-100 rounded-sm">
    <div className="text-[#448cff] mb-2">{icon}</div>
    <h4 className="font-black uppercase text-xs mb-1">{title}</h4>
    <p className="text-slate-500 text-xs font-medium leading-relaxed">{desc}</p>
  </div>
);

export default About;
