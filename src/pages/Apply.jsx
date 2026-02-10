import React, { useState, useEffect } from "react";
import {
  Check,
  Clock,
  ShieldCheck,
  User,
  Mail,
  MapPin,
  Sparkles,
  Info,
  Briefcase,
  Smartphone,
  ChevronRight,
  CheckCircle2,
} from "lucide-react";
import Navbar from "../Components/Homecomponents/Navbar";
import Footer from "../Components/Homecomponents/Footer";

const Apply = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [activeSection, setActiveSection] = useState("section-1");

  useEffect(() => {
    window.scrollTo(0, 0);

    if (!isSubmitted) {
      const observerOptions = {
        root: null,
        rootMargin: "-20% 0px -70% 0px",
        threshold: 0,
      };

      const observerCallback = (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      };

      const observer = new IntersectionObserver(
        observerCallback,
        observerOptions,
      );
      const sections = document.querySelectorAll("section[id]");
      sections.forEach((section) => observer.observe(section));

      return () => sections.forEach((section) => observer.unobserve(section));
    }
  }, [isSubmitted]);

  // --- FORM STATE (Fixed: Added otherExperienceTypes) ---
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
    otherExperienceTypes: [], // Added this array for the checkboxes
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

  // --- Fixed: toggleOtherType logic ---
  const toggleOtherType = (type) => {
    const current = formData.otherExperienceTypes;
    const updated = current.includes(type)
      ? current.filter((t) => t !== type)
      : [...current, type];
    updateField("otherExperienceTypes", updated);
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

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    window.scrollTo(0, 0);
  };

  return (
    <div className="font-jakarta bg-[#fcfdfe]">
      <Navbar />

      <section className="relative py-20 bg-white border-b border-gray-100 font-jakarta text-center">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-8">
            <span className="inline-block px-5 py-2 rounded-full border border-blue-500/20 bg-blue-50 text-[#448cff] text-[11px] font-black uppercase tracking-[0.3em]">
              {isSubmitted ? "Application Complete" : "Recruitment Portal"}
            </span>
          </div>
          <h1 className="text-4xl md:text-7xl font-black text-[#1e293b] uppercase tracking-tight leading-tight">
            {isSubmitted ? (
              <>
                Thank <span className="text-[#448cff]">You!</span>
              </>
            ) : (
              <>
                Job <span className="text-[#448cff]">application</span>
              </>
            )}
          </h1>
          {!isSubmitted && (
            <p className="mt-8 text-slate-500 text-lg md:text-xl font-medium max-w-2xl mx-auto leading-relaxed opacity-90">
              Join London's most progressive cleaning team. We value excellence,
              reliability, and hard work.
            </p>
          )}
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-6 py-20 min-h-[50vh]">
        {isSubmitted ? (
          <div className="max-w-3xl mx-auto animate-in zoom-in-95 duration-700">
            <div className="bg-white border border-gray-400 rounded-sm p-12 text-center shadow-xl shadow-blue-100/20">
              <div className="w-24 h-24 bg-blue-50 text-[#448cff] rounded-full flex items-center justify-center mx-auto mb-8 border border-blue-100">
                <CheckCircle2 size={48} strokeWidth={3} />
              </div>
              <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tighter mb-4">
                Application Submitted Successfully
              </h2>
              <p className="text-slate-500 text-lg font-medium leading-relaxed mb-10">
                Thanks for submitting your details. We have received your
                application and our recruitment team will review it.
              </p>
              <button
                onClick={() => (window.location.href = "/")}
                className="bg-[#0f1216] text-white px-10 py-4 rounded-sm font-black uppercase tracking-widest text-sm hover:bg-[#448cff] transition-all"
              >
                Back to Home
              </button>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="hidden lg:block lg:col-span-4 space-y-8 sticky top-32 h-fit">
              <div className="bg-white border border-gray-300 p-8 rounded-sm shadow-sm">
                <h3 className="text-sm font-black uppercase tracking-widest text-slate-900 mb-6 border-b border-gray-100 pb-4">
                  Application Progress
                </h3>
                <nav className="space-y-6">
                  <StepLink
                    number="01"
                    label="Personal Details"
                    active={activeSection === "section-1"}
                  />
                  <StepLink
                    number="02"
                    label="Experience & Skills"
                    active={activeSection === "section-2"}
                  />
                  <StepLink
                    number="03"
                    label="Weekly Availability"
                    active={activeSection === "section-3"}
                  />
                  <StepLink
                    number="04"
                    label="Eligibility Check"
                    active={activeSection === "section-4"}
                  />
                  <StepLink
                    number="05"
                    label="Standards"
                    active={activeSection === "section-5"}
                  />
                </nav>
              </div>
            </div>

            <div className="lg:col-span-8">
              <form className="space-y-24 pb-32" onSubmit={handleSubmit}>
                {/* SECTION 1 */}
                <section id="section-1" className="space-y-10 scroll-mt-32">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-50 text-[#448cff] rounded-sm flex items-center justify-center font-black text-xl border border-blue-100">
                      01
                    </div>
                    <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tighter">
                      Personal Details
                    </h2>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <InputGroup
                      label="First Name *"
                      value={formData.firstName}
                      onChange={(v) => updateField("firstName", v)}
                      placeholder="John"
                    />
                    <InputGroup
                      label="Middle Name"
                      value={formData.middleName}
                      onChange={(v) => updateField("middleName", v)}
                      placeholder="Optional"
                    />
                    <InputGroup
                      label="Surname *"
                      value={formData.surname}
                      onChange={(v) => updateField("surname", v)}
                      placeholder="Doe"
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest">
                        Your Gender (Optional)
                      </label>
                      <div className="relative">
                        <select
                          className="w-full p-4 border border-gray-400 rounded-sm outline-none focus:border-[#448cff] bg-white font-bold text-slate-400 appearance-none cursor-pointer"
                          value={formData.gender}
                          onChange={(e) =>
                            updateField("gender", e.target.value)
                          }
                        >
                          <option value="">Select Gender</option>
                          <option value="Male">Male</option>
                          <option value="Female">Female</option>
                          <option value="Other">Other</option>
                        </select>
                        <ChevronRight
                          size={16}
                          className="absolute right-4 top-1/2 -translate-y-1/2 rotate-90 text-slate-400 pointer-events-none"
                        />
                      </div>
                    </div>
                    <InputGroup
                      label="Mobile Number *"
                      value={formData.phone}
                      onChange={(v) => updateField("phone", v)}
                      placeholder="07xxx xxxxxx"
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <InputGroup
                      label="Email Address *"
                      value={formData.email}
                      onChange={(v) => updateField("email", v)}
                      type="email"
                      placeholder="john@example.com"
                    />
                    <InputGroup
                      label="Post Code *"
                      value={formData.postcode}
                      onChange={(v) => updateField("postcode", v)}
                      placeholder="e.g. SW1A 1AA"
                    />
                  </div>
                </section>

                {/* SECTION 2 */}
                <section id="section-2" className="space-y-10 scroll-mt-32">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-50 text-[#448cff] rounded-sm flex items-center justify-center font-black text-xl border border-blue-100">
                      02
                    </div>
                    <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tighter">
                      Experience & Skills
                    </h2>
                  </div>
                  <div className="space-y-8">
                    <div className="space-y-3">
                      <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest">
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
                            className={`p-4 border-2 rounded-sm font-black uppercase text-[11px] tracking-widest transition-all ${formData.experienceLevel === lvl ? "border-[#448cff] bg-blue-50 text-[#448cff]" : "border-gray-400 text-slate-400 hover:border-gray-400"}`}
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
                                  size={14}
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

                      {/* --- CORRECTED: "Other" Dropdown Box --- */}
                      {formData.experienceTypes.includes("Other") && (
                        <div className="mt-4 p-6 bg-slate-50 border border-gray-400 rounded-sm animate-in fade-in slide-in-from-top-2 duration-300">
                          <label className="text-[10px] font-black uppercase text-[#448cff] tracking-widest mb-4 block">
                            Select specialized services you can perform:
                          </label>
                          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                            {[
                              "Carpet cleaning",
                              "Window cleaning",
                              "Oven cleaning",
                              "Upholstery cleaning",
                              "Office cleaning",
                              "Gutter cleaning",
                              "Pressure washing",
                              "Pavement cleaning",
                            ].map((subType) => (
                              <CheckboxItem
                                key={subType}
                                label={subType}
                                checked={formData.otherExperienceTypes.includes(
                                  subType,
                                )}
                                onChange={() => toggleOtherType(subType)}
                              />
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </section>

                <section id="section-3" className="space-y-10 scroll-mt-32">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-50 text-[#448cff] rounded-sm flex items-center justify-center font-black text-xl border border-blue-100">
                      03
                    </div>
                    <div>
                      <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tighter">
                        Availability
                      </h2>
                      <p className="text-slate-600">
                        Please update your availability in case of temporary
                        unavoidable reasons
                      </p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    {Object.keys(formData.availability).map((day) => (
                      <div
                        key={day}
                        className={`border rounded-sm transition-all duration-300 ${formData.availability[day].enabled ? "border-gray-400 bg-white shadow-md" : "border-gray-200 bg-slate-50 opacity-60"}`}
                      >
                        <div
                          className={`flex justify-between items-center p-5 ${formData.availability[day].enabled ? "bg-slate-50 border-b border-gray-400" : ""}`}
                        >
                          <span className="font-black uppercase text-sm tracking-widest">
                            {day}
                          </span>
                          <label className="flex items-center gap-3 cursor-pointer">
                            <input
                              type="checkbox"
                              className="w-5 h-5 accent-[#448cff] cursor-pointer"
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
                          <div className="p-8 grid grid-cols-1 md:grid-cols-3 gap-6 animate-in fade-in zoom-in-95 duration-300">
                            {[
                              { id: 1, label: "Morning" },
                              { id: 2, label: "Afternoon" },
                              { id: 3, label: "Evening" },
                            ].map((shift) => {
                              // --- NEW LOGIC: Filter times based on shift ---
                              const filteredTimes = timeOptions.filter((t) => {
                                const hour = parseInt(t.split(":")[0]);
                                if (shift.id === 1)
                                  return hour >= 7 && hour <= 12; // 07:00 to 12:00
                                if (shift.id === 2)
                                  return hour >= 12 && hour <= 17; // 12:00 to 17:00 (5pm)
                                if (shift.id === 3)
                                  return hour >= 17 && hour <= 20; // 17:00 to 20:00 (8pm)
                                return true;
                              });

                              return (
                                <div key={shift.id} className="space-y-2">
                                  <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest">
                                    {shift.label}
                                  </p>
                                  <div className="flex items-center border border-gray-400 rounded-sm divide-x divide-gray-400 overflow-hidden focus-within:border-[#448cff]">
                                    <select
                                      className="flex-1 p-2.5 text-xs font-bold outline-none appearance-none text-center bg-white cursor-pointer hover:bg-slate-50"
                                      value={
                                        formData.availability[day][
                                          `s${shift.id}_start`
                                        ]
                                      }
                                      onChange={(e) =>
                                        updateAvailability(
                                          day,
                                          `s${shift.id}_start`,
                                          e.target.value,
                                        )
                                      }
                                    >
                                      <option value="">00</option>
                                      {filteredTimes.map((t) => (
                                        <option key={t} value={t}>
                                          {t}
                                        </option>
                                      ))}
                                    </select>
                                    <select
                                      className="flex-1 p-2.5 text-xs font-bold outline-none appearance-none text-center bg-white cursor-pointer hover:bg-slate-50"
                                      value={
                                        formData.availability[day][
                                          `s${shift.id}_end`
                                        ]
                                      }
                                      onChange={(e) =>
                                        updateAvailability(
                                          day,
                                          `s${shift.id}_end`,
                                          e.target.value,
                                        )
                                      }
                                    >
                                      <option value="">00</option>
                                      {filteredTimes.map((t) => (
                                        <option key={t} value={t}>
                                          {t}
                                        </option>
                                      ))}
                                    </select>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </section>

                {/* SECTION 4 */}
                <section id="section-4" className="space-y-10 scroll-mt-32">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-50 text-[#448cff] rounded-sm flex items-center justify-center font-black text-xl border border-blue-100">
                      04
                    </div>
                    <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tighter">
                      Eligibility
                    </h2>
                  </div>
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
                </section>

                {/* SECTION 5 */}
                <section id="section-5" className="space-y-10 scroll-mt-32">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-50 text-[#448cff] rounded-sm flex items-center justify-center font-black text-xl border border-blue-100">
                      05
                    </div>
                    <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tighter">
                      Excellence Standards
                    </h2>
                  </div>
                  <div className="flex items-start gap-6 bg-slate-900 p-8 md:p-12 rounded-sm relative overflow-hidden group border border-gray-400">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#448cff]/20 rounded-full blur-3xl"></div>
                    <div className="relative z-10 shrink-0 mt-1">
                      <Sparkles size={28} className="text-[#448cff]" />
                    </div>
                    <div className="relative z-10 space-y-6">
                      <p className="text-[16px] text-slate-300 leading-relaxed font-medium italic">
                        "We won’t sugar-coat it: this role involves physical
                        work and attention to detail. If you take pride in doing
                        a job well, you’ll fit right in!"
                      </p>
                      <p className="text-[16px] text-white leading-relaxed font-black uppercase tracking-wide">
                        <span className="text-[#448cff]">Important:</span> You
                        will need to happily reclean areas of property free of
                        charge if the customer is not 100% satisfied.
                      </p>
                    </div>
                  </div>
                </section>

                <button
                  type="submit"
                  className="w-full bg-[#448cff] text-white py-6 rounded-sm font-black uppercase tracking-[0.3em] text-lg hover:bg-blue-700 shadow-2xl shadow-blue-500/20 active:scale-95 transition-all"
                >
                  Submit Application
                </button>
              </form>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

// --- SUB-COMPONENTS ---
const StepLink = ({ number, label, active }) => (
  <div className="flex items-center gap-4 transition-all duration-300 transform">
    <span
      className={`text-[10px] font-black tracking-widest transition-colors duration-300 ${active ? "text-[#448cff] scale-125" : "text-slate-300"}`}
    >
      {number}
    </span>
    <span
      className={`text-sm font-bold uppercase tracking-tight transition-all duration-300 ${active ? "text-slate-900 translate-x-2 border-l-2 border-[#448cff] pl-2" : "text-slate-400"}`}
    >
      {label}
    </span>
  </div>
);

const InputGroup = ({ label, placeholder, value, onChange, type = "text" }) => (
  <div className="space-y-2 w-full">
    <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest">
      {label}
    </label>
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full p-4 border border-gray-400 rounded-sm outline-none focus:border-[#448cff] transition-all font-bold text-slate-700 bg-white"
    />
  </div>
);

const CheckboxItem = ({ label, checked, onChange }) => (
  <label className="flex items-center gap-4 p-5 border border-gray-400 rounded-sm cursor-pointer hover:bg-blue-50 transition-all group bg-white">
    <div
      className={`w-6 h-6 border flex items-center justify-center transition-all ${checked ? "bg-[#448cff] border-[#448cff]" : "border-gray-400 bg-white"}`}
    >
      {checked && <Check size={16} className="text-white" strokeWidth={4} />}
    </div>
    <span
      className={`font-bold text-sm transition-colors ${checked ? "text-slate-900 font-black" : "text-slate-600"}`}
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
