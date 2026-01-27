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
} from "lucide-react";
import Navbar from "../Components/Homecomponents/Navbar";
import Footer from "../Components/Homecomponents/Footer";

const Apply = () => {
  // --- SCROLLSPY LOGIC: Tracks which section is in view ---
  const [activeSection, setActiveSection] = useState("section-1");

  useEffect(() => {
    window.scrollTo(0, 0);

    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -70% 0px", // Triggers when section is in the top/middle
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
  }, []);

  // --- FORM STATE ---
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
    otherCleaningType: "",
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
    <div className="font-jakarta bg-[#fcfdfe]">
      <Navbar />

      {/* --- HERO HEADER --- */}
      <section className="relative py-24 bg-[#0f1216] overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#448cff]/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-[#448cff] text-[11px] font-black uppercase tracking-[0.3em] mb-6">
            Recruitment Portal
          </span>
          <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tight leading-tight">
            Apply as a <span className="text-[#448cff]">Cleaner</span>
          </h1>
          <p className="text-gray-400 mt-6 text-lg md:text-xl font-medium max-w-2xl mx-auto leading-relaxed text-center">
            Join London's most progressive cleaning team. We value excellence,
            reliability, and hard work.
          </p>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* --- LEFT: SCROLLSPY SIDEBAR --- */}
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

          {/* --- RIGHT: FORM AREA --- */}
          <div className="lg:col-span-8">
            <form
              className="space-y-24 pb-32"
              onSubmit={(e) => e.preventDefault()}
            >
              {/* SECTION 1: PERSONAL */}
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
                        className="w-full p-4 border border-gray-400 rounded-sm outline-none focus:border-[#448cff] bg-white font-bold text-slate-700 appearance-none cursor-pointer"
                        value={formData.gender}
                        onChange={(e) => updateField("gender", e.target.value)}
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

              {/* SECTION 2: EXPERIENCE */}
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

                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest">
                      Cleaning Types *
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
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
                          className={`flex items-center gap-3 p-4 border border-gray-400 rounded-sm cursor-pointer transition-all ${formData.experienceTypes.includes(type) ? "border-[#448cff] bg-blue-50 shadow-sm" : "bg-white hover:bg-slate-50"}`}
                        >
                          <div
                            className={`w-5 h-5 border flex items-center justify-center transition-all ${formData.experienceTypes.includes(type) ? "bg-[#448cff] border-[#448cff]" : "border-gray-400"}`}
                          >
                            {formData.experienceTypes.includes(type) && (
                              <Check
                                size={14}
                                className="text-white"
                                strokeWidth={4}
                              />
                            )}
                          </div>
                          <span className="text-[13px] font-bold text-slate-700">
                            {type}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {formData.experienceTypes.includes("Other") && (
                    <div className="animate-in fade-in slide-in-from-top-2 duration-300">
                      <InputGroup
                        label="Specify Other Expertise"
                        value={formData.otherCleaningType}
                        onChange={(v) => updateField("otherCleaningType", v)}
                        placeholder="e.g. window cleaning..."
                      />
                    </div>
                  )}
                </div>
              </section>

              {/* SECTION 3: AVAILABILITY */}
              <section id="section-3" className="space-y-10 scroll-mt-32">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-50 text-[#448cff] rounded-sm flex items-center justify-center font-black text-xl border border-blue-100">
                    03
                  </div>
                  <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tighter">
                    Availability
                  </h2>
                </div>

                <div className="flex items-start gap-4 bg-blue-50/50 border-l-4 border-[#448cff] p-6 rounded-sm">
                  <Info size={20} className="text-[#448cff] shrink-0 mt-0.5" />
                  <p className="text-[14px] text-slate-600 leading-relaxed font-medium">
                    Please specify your available times for each day. Our
                    requirement is up to
                    <span className="text-slate-900 font-black mx-1">
                      6 hours per day
                    </span>
                    . To begin,{" "}
                    <span className="text-[#448cff] font-black underline decoration-2 underline-offset-4">
                      click the checkbox
                    </span>{" "}
                    next to the day.
                  </p>
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
                          <span className="text-[10px] font-black uppercase text-slate-400 tracking-wider">
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
                          ].map((shift) => (
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
                                  {timeOptions.map((t) => (
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
              </section>

              {/* SECTION 4: ELIGIBILITY */}
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

              {/* SECTION 5: STANDARDS */}
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
                      "We won’t sugar-coat it: this role involves physical work
                      and attention to detail. If you take pride in doing a job
                      well, you’ll fit right in!"
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
      </main>

      <Footer />
    </div>
  );
};

// --- MODULAR SUB-COMPONENTS ---

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
