import React, { useState } from "react";
import { Check, Clock, ShieldCheck, User, Mail, MapPin } from "lucide-react";
import Navbar from "../Components/Homecomponents/Navbar";
import Footer from "../Components/Homecomponents/Footer";

const Apply = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    surname: "",
    gender: "",
    phone: "",
    email: "",
    postcode: "",
    experience: "",
    types: [],
    availability: {
      Monday: {
        enabled: false,
        s1_start: "",
        s1_end: "",
        s2_start: "",
        s2_end: "",
        s3_start: "",
        s3_end: "",
      },
      Tuesday: {
        enabled: false,
        s1_start: "",
        s1_end: "",
        s2_start: "",
        s2_end: "",
        s3_start: "",
        s3_end: "",
      },
      Wednesday: {
        enabled: false,
        s1_start: "",
        s1_end: "",
        s2_start: "",
        s2_end: "",
        s3_start: "",
        s3_end: "",
      },
      Thursday: {
        enabled: false,
        s1_start: "",
        s1_end: "",
        s2_start: "",
        s2_end: "",
        s3_start: "",
        s3_end: "",
      },
      Friday: {
        enabled: false,
        s1_start: "",
        s1_end: "",
        s2_start: "",
        s2_end: "",
        s3_start: "",
        s3_end: "",
      },
      Saturday: {
        enabled: false,
        s1_start: "",
        s1_end: "",
        s2_start: "",
        s2_end: "",
        s3_start: "",
        s3_end: "",
      },
      Sunday: {
        enabled: false,
        s1_start: "",
        s1_end: "",
        s2_start: "",
        s2_end: "",
        s3_start: "",
        s3_end: "",
      },
    },
    eligibility: {
      workRights: false,
      bankAccount: false,
      selfEmployed: false,
      cleanRecord: false,
    },
  });

  const timeOptions = [
    "07:00",
    "08:00",
    "09:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
    "18:00",
    "19:00",
    "20:00",
  ];

  return (
    <div className="font-jakarta">
      <Navbar />
      <div className="bg-[#0f1216] py-20 text-center text-white">
        <h1 className="text-4xl font-black uppercase tracking-widest">
          Apply as a Cleaner
        </h1>
        <p className="text-gray-400 mt-2">
          Join London's most progressive team
        </p>
      </div>

      <main className="max-w-5xl mx-auto px-4 py-20">
        <form className="space-y-16">
          {/* Section 1: Personal */}
          <div className="space-y-6">
            <h2 className="text-xl font-black uppercase border-b-2 border-slate-100 pb-4">
              Personal Details
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <InputGroup label="First Name *" placeholder="John" />
              <InputGroup label="Middle Name" placeholder="Optional" />
              <InputGroup label="Surname *" placeholder="Doe" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <InputGroup label="Mobile *" placeholder="07xxx xxxxxx" />
              <InputGroup
                label="Email *"
                placeholder="john@example.com"
                type="email"
              />
              <InputGroup label="Post Code *" placeholder="SW1A 1AA" />
            </div>
          </div>

          {/* Section 2: Availability */}
          <div className="space-y-6">
            <h2 className="text-xl font-black uppercase border-b-2 border-slate-100 pb-4">
              Weekly Availability (7am - 8pm)
            </h2>
            <div className="space-y-4">
              {Object.keys(formData.availability).map((day) => (
                <div
                  key={day}
                  className="border border-gray-400 p-4 rounded-sm"
                >
                  <div className="flex justify-between items-center mb-4">
                    <span className="font-black uppercase text-sm">{day}</span>
                    <input
                      type="checkbox"
                      className="w-5 h-5 accent-[#448cff]"
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {[1, 2, 3].map((s) => (
                      <div
                        key={s}
                        className="flex gap-2 items-center bg-slate-50 p-2 border border-gray-400"
                      >
                        <select className="flex-1 bg-transparent font-bold text-xs outline-none appearance-none text-center">
                          <option value="">00</option>
                          {timeOptions.map((t) => (
                            <option key={t} value={t}>
                              {t}
                            </option>
                          ))}
                        </select>
                        <span className="text-gray-400">-</span>
                        <select className="flex-1 bg-transparent font-bold text-xs outline-none appearance-none text-center">
                          <option value="">00</option>
                          {timeOptions.map((t) => (
                            <option key={t} value={t}>
                              {t}
                            </option>
                          ))}
                        </select>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 3: Eligibility */}
          <div className="space-y-6">
            <h2 className="text-xl font-black uppercase border-b-2 border-slate-100 pb-4">
              Eligibility
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <CheckboxItem label="Right to work in UK" />
              <CheckboxItem label="UK Bank Account" />
              <CheckboxItem label="Self-Employed Status" />
              <CheckboxItem label="Clean Criminal Record" />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-[#448cff] text-white py-6 rounded-sm font-black uppercase tracking-[0.3em] text-lg hover:bg-blue-700 transition-all"
          >
            Submit Application
          </button>
        </form>
      </main>
      <Footer />
    </div>
  );
};

const InputGroup = ({ label, placeholder, type = "text" }) => (
  <div className="space-y-2">
    <label className="text-xs font-black uppercase text-slate-400 tracking-widest">
      {label}
    </label>
    <input
      type={type}
      placeholder={placeholder}
      className="w-full p-4 border border-gray-400 rounded-sm outline-none focus:border-[#448cff] transition-all font-bold text-slate-700"
    />
  </div>
);

const CheckboxItem = ({ label }) => (
  <label className="flex items-center gap-4 p-5 border border-gray-400 rounded-sm cursor-pointer hover:bg-blue-50 transition-all">
    <input type="checkbox" className="w-6 h-6 accent-[#448cff]" />
    <span className="font-bold text-slate-700 text-sm">{label}</span>
  </label>
);

export default Apply;
