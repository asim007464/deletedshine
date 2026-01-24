import React, { useState } from "react";
import {
  Check,
  Clock,
  ShieldCheck,
  User,
  Mail,
  MapPin,
  Briefcase,
} from "lucide-react";
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
    experienceLevel: "",
    experienceTypes: [],
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

  const updateField = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const toggleExpType = (type) => {
    const current = formData.experienceTypes;
    const updated = current.includes(type)
      ? current.filter((t) => t !== type)
      : [...current, type];
    updateField("experienceTypes", updated);
  };

  const updateAvailability = (day, field, value) => {
    setFormData((prev) => ({
      ...prev,
      availability: {
        ...prev.availability,
        [day]: { ...prev.availability[day], [field]: value },
      },
    }));
  };

  const updateEligibility = (field) => {
    setFormData((prev) => ({
      ...prev,
      eligibility: { ...prev.eligibility, [field]: !prev.eligibility[field] },
    }));
  };

  return (
    <div className="font-jakarta">
      <Navbar />
      <div className="bg-[#0f1216] py-20 text-center text-white">
        <h1 className="text-4xl font-black uppercase tracking-widest">
          Apply as a Cleaner
        </h1>
        <p className="text-gray-400 mt-2">
          Join London's most progressive cleaning team
        </p>
      </div>

      <main className="max-w-5xl mx-auto px-4 py-20">
        <form className="space-y-20" onSubmit={(e) => e.preventDefault()}>
          {/* Section 1: Personal Details */}
          <div className="space-y-8">
            <h2 className="text-xl font-black uppercase border-b-2 border-slate-100 pb-4">
              01. Personal Details
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <InputGroup
                label="First Name *"
                value={formData.firstName}
                onChange={(v) => updateField("firstName", v)}
              />
              <InputGroup
                label="Middle Name"
                value={formData.middleName}
                onChange={(v) => updateField("middleName", v)}
              />
              <InputGroup
                label="Surname *"
                value={formData.surname}
                onChange={(v) => updateField("surname", v)}
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-black uppercase text-slate-400 tracking-widest">
                  Your Gender (Optional)
                </label>
                <select
                  className="w-full p-4 border border-gray-400 rounded-sm outline-none focus:border-[#448cff] bg-white font-bold text-slate-700 appearance-none cursor-pointer"
                  value={formData.gender}
                  onChange={(e) => updateField("gender", e.target.value)}
                >
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <InputGroup
                label="Mobile Number *"
                value={formData.phone}
                onChange={(v) => updateField("phone", v)}
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <InputGroup
                label="Email Address *"
                value={formData.email}
                onChange={(v) => updateField("email", v)}
                type="email"
              />
              <InputGroup
                label="Post Code *"
                value={formData.postcode}
                onChange={(v) => updateField("postcode", v)}
              />
            </div>
          </div>

          {/* Section 2: Experience */}
          <div className="space-y-8">
            <h2 className="text-xl font-black uppercase border-b-2 border-slate-100 pb-4">
              02. Experience
            </h2>
            <div className="space-y-6">
              <label className="text-xs font-black uppercase text-slate-400 tracking-widest">
                Experience Level *
              </label>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  "Less than 6 months",
                  "More than 6 months",
                  "More than 2 years",
                ].map((lvl) => (
                  <button
                    key={lvl}
                    type="button"
                    onClick={() => updateField("experienceLevel", lvl)}
                    className={`p-4 border-2 rounded-sm font-black uppercase text-xs tracking-widest transition-all ${formData.experienceLevel === lvl ? "border-[#448cff] bg-blue-50 text-[#448cff]" : "border-gray-400 text-slate-400"}`}
                  >
                    {lvl}
                  </button>
                ))}
              </div>
            </div>
            <div className="space-y-6">
              <label className="text-xs font-black uppercase text-slate-400 tracking-widest">
                Cleaning Types *
              </label>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                {[
                  "Residential",
                  "End of Tenancy",
                  "Airbnb",
                  "Commercial",
                  "Other",
                ].map((type) => (
                  <div
                    key={type}
                    onClick={() => toggleExpType(type)}
                    className={`flex items-center gap-3 p-3 border rounded-sm cursor-pointer transition-all ${formData.experienceTypes.includes(type) ? "border-[#448cff] bg-blue-50" : "border-gray-300"}`}
                  >
                    <div
                      className={`w-4 h-4 border flex items-center justify-center ${formData.experienceTypes.includes(type) ? "bg-[#448cff] border-[#448cff]" : "border-gray-400"}`}
                    >
                      {formData.experienceTypes.includes(type) && (
                        <Check
                          size={12}
                          className="text-white"
                          strokeWidth={4}
                        />
                      )}
                    </div>
                    <span className="text-xs font-bold text-slate-600">
                      {type}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Section 3: Availability */}
          <div className="space-y-8">
            <h2 className="text-xl font-black uppercase border-b-2 border-slate-100 pb-4">
              03. Weekly Availability (7am - 8pm)
            </h2>
            <p className="text-sm text-slate-500 italic">
              State availability for each day. Requirements are up to 6 hours
              per day.
            </p>
            <div className="space-y-4">
              {Object.keys(formData.availability).map((day) => (
                <div
                  key={day}
                  className={`border rounded-sm p-6 transition-all ${formData.availability[day].enabled ? "border-gray-400 bg-white shadow-md" : "border-gray-200 bg-slate-50 opacity-60"}`}
                >
                  <div className="flex justify-between items-center mb-6">
                    <span className="font-black uppercase text-sm">{day}</span>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        className="w-5 h-5 accent-[#448cff]"
                        checked={formData.availability[day].enabled}
                        onChange={() =>
                          updateAvailability(
                            day,
                            "enabled",
                            !formData.availability[day].enabled,
                          )
                        }
                      />
                      <span className="text-[10px] font-black uppercase text-slate-400">
                        Available
                      </span>
                    </label>
                  </div>

                  {formData.availability[day].enabled && (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-in fade-in zoom-in-95">
                      {[1, 2, 3].map((num) => (
                        <div key={num} className="space-y-2">
                          <p className="text-[10px] font-black uppercase text-slate-400">
                            Shift {num}
                          </p>
                          <div className="flex items-center border border-gray-400 rounded-sm divide-x divide-gray-400 overflow-hidden">
                            <select
                              className="flex-1 p-2 text-xs font-bold outline-none appearance-none text-center bg-white"
                              value={
                                formData.availability[day][`s${num}_start`]
                              }
                              onChange={(e) =>
                                updateAvailability(
                                  day,
                                  `s${num}_start`,
                                  e.target.value,
                                )
                              }
                            >
                              <option value="">00</option>
                              {timeOptions.map((t) => (
                                <option key={t} value={t}>
                                  {t}
                                </option>
                              ))}
                            </select>
                            <select
                              className="flex-1 p-2 text-xs font-bold outline-none appearance-none text-center bg-white"
                              value={formData.availability[day][`s${num}_end`]}
                              onChange={(e) =>
                                updateAvailability(
                                  day,
                                  `s${num}_end`,
                                  e.target.value,
                                )
                              }
                            >
                              <option value="">00</option>
                              {timeOptions.map((t) => (
                                <option key={t} value={t}>
                                  {t}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Section 4: Eligibility */}
          <div className="space-y-8">
            <h2 className="text-xl font-black uppercase border-b-2 border-slate-100 pb-4">
              04. Eligibility
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <CheckboxItem
                label="I have the right to work in the UK"
                checked={formData.eligibility.workRights}
                onChange={() => updateEligibility("workRights")}
              />
              <CheckboxItem
                label="I have a UK bank account"
                checked={formData.eligibility.bankAccount}
                onChange={() => updateEligibility("bankAccount")}
              />
              <CheckboxItem
                label="I understand I will be self-employed"
                checked={formData.eligibility.selfEmployed}
                onChange={() => updateEligibility("selfEmployed")}
              />
              <CheckboxItem
                label="I do not have a criminal record/police convictions"
                checked={formData.eligibility.cleanRecord}
                onChange={() => updateEligibility("cleanRecord")}
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-[#448cff] text-white py-6 rounded-sm font-black uppercase tracking-[0.3em] text-lg hover:bg-blue-700 transition-all shadow-2xl shadow-blue-100"
          >
            Submit Application
          </button>
        </form>
      </main>
      <Footer />
    </div>
  );
};

// Reusable Components
const InputGroup = ({ label, placeholder, value, onChange, type = "text" }) => (
  <div className="space-y-2">
    <label className="text-xs font-black uppercase text-slate-400 tracking-widest">
      {label}
    </label>
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full p-4 border border-gray-400 rounded-sm outline-none focus:border-[#448cff] transition-all font-bold text-slate-700"
    />
  </div>
);

const CheckboxItem = ({ label, checked, onChange }) => (
  <label className="flex items-center gap-4 p-5 border border-gray-400 rounded-sm cursor-pointer hover:bg-blue-50 transition-all group">
    <div
      className={`w-6 h-6 border flex items-center justify-center transition-all ${checked ? "bg-[#448cff] border-[#448cff]" : "border-gray-400 bg-white"}`}
    >
      {checked && <Check size={16} className="text-white" strokeWidth={4} />}
    </div>
    <span
      className={`font-bold text-sm transition-colors ${checked ? "text-[#448cff]" : "text-slate-700"}`}
    >
      {label}
    </span>
    <input
      type="checkbox"
      className="hidden"
      checked={checked}
      onChange={onChange}
    />
  </label>
);

export default Apply;
