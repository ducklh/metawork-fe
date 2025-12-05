"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import { useState } from "react";
import { Building2, CheckCircle2, Send } from "lucide-react";

const geoOptions = [
  "Vietnam",
  "Thailand",
  "Indonesia",
  "Turkey",
  "Brazil",
  "Mexico",
  "South Africa",
  "EU (selected)",
  "Global",
];

const goalOptions = [
  { value: "brand-protection", label: "Brand Protection" },
  { value: "user-growth", label: "User Growth" },
  { value: "both", label: "Both" },
];

export default function PartnerWithUsPage() {
  const [formData, setFormData] = useState({
    companyName: "",
    website: "",
    contactPerson: "",
    email: "",
    telegramSkype: "",
    geoInterest: "",
    monthlyTarget: "",
    goal: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleGoalChange = (value: string) => {
    setFormData((prev) => ({ ...prev, goal: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log("Form submitted:", formData);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-white min-h-screen">
        <section className="bg-gradient-to-b from-white to-zinc-50">
          <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:py-32">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="mx-auto max-w-2xl text-center"
            >
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100">
                <CheckCircle2 className="h-8 w-8 text-emerald-600" />
              </div>
              <h1 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl">
                Thank You for Your Interest!
              </h1>
              <p className="mt-4 text-lg text-zinc-600">
                We&apos;ve received your partnership inquiry. Our team will contact you within 24 hours.
              </p>
              <Button
                asChild
                size="lg"
                className="mt-8 bg-[#DC2626] text-white hover:bg-[#B91C1C] transition-colors shadow-md hover:shadow-lg px-8"
              >
                <a href="/">Return to Home</a>
              </Button>
            </motion.div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-white to-zinc-50">
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:py-32">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-4xl text-center"
          >
            <div className="mx-auto inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#DC2626] to-black">
              <Building2 className="h-8 w-8 text-white" />
            </div>
            <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Partner With K-NETWORK
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg text-zinc-600 sm:text-xl">
              Tell us about your brand and goals — our team will contact you within 24 hours.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form Section */}
      <section>
        <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
          <Card className="border-0 bg-gradient-to-br from-white to-zinc-50 shadow-lg ring-1 ring-zinc-100">
            <CardContent className="p-8 sm:p-12">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Company Name */}
                <div>
                  <label htmlFor="companyName" className="block text-sm font-semibold text-zinc-900 mb-2">
                    Company Name <span className="text-red-500">*</span>
                  </label>
                  <Input
                    id="companyName"
                    name="companyName"
                    type="text"
                    required
                    value={formData.companyName}
                    onChange={handleChange}
                    placeholder="Enter your company name"
                    className="w-full"
                  />
                </div>

                {/* Website */}
                <div>
                  <label htmlFor="website" className="block text-sm font-semibold text-zinc-900 mb-2">
                    Website <span className="text-red-500">*</span>
                  </label>
                  <Input
                    id="website"
                    name="website"
                    type="url"
                    required
                    value={formData.website}
                    onChange={handleChange}
                    placeholder="https://yourwebsite.com"
                    className="w-full"
                  />
                </div>

                {/* Contact Person */}
                <div>
                  <label htmlFor="contactPerson" className="block text-sm font-semibold text-zinc-900 mb-2">
                    Contact Person <span className="text-red-500">*</span>
                  </label>
                  <Input
                    id="contactPerson"
                    name="contactPerson"
                    type="text"
                    required
                    value={formData.contactPerson}
                    onChange={handleChange}
                    placeholder="Full name"
                    className="w-full"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-zinc-900 mb-2">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@company.com"
                    className="w-full"
                  />
                </div>

                {/* Telegram/Skype */}
                <div>
                  <label htmlFor="telegramSkype" className="block text-sm font-semibold text-zinc-900 mb-2">
                    Telegram / Skype
                  </label>
                  <Input
                    id="telegramSkype"
                    name="telegramSkype"
                    type="text"
                    value={formData.telegramSkype}
                    onChange={handleChange}
                    placeholder="@username or skype_id"
                    className="w-full"
                  />
                </div>

                {/* GEO of Interest */}
                <div>
                  <label htmlFor="geoInterest" className="block text-sm font-semibold text-zinc-900 mb-2">
                    GEO of Interest <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="geoInterest"
                    name="geoInterest"
                    required
                    value={formData.geoInterest}
                    onChange={handleChange}
                    className="w-full h-9 rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-xs transition-[color,box-shadow] outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]"
                  >
                    <option value="">Select a GEO</option>
                    {geoOptions.map((geo) => (
                      <option key={geo} value={geo}>
                        {geo}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Monthly Target */}
                <div>
                  <label htmlFor="monthlyTarget" className="block text-sm font-semibold text-zinc-900 mb-2">
                    Monthly Target
                  </label>
                  <Input
                    id="monthlyTarget"
                    name="monthlyTarget"
                    type="text"
                    value={formData.monthlyTarget}
                    onChange={handleChange}
                    placeholder="e.g., 1000 users, $50K budget"
                    className="w-full"
                  />
                </div>

                {/* Your Goal */}
                <div>
                  <label className="block text-sm font-semibold text-zinc-900 mb-3">
                    Your Goal <span className="text-red-500">*</span>
                  </label>
                  <div className="space-y-3">
                    {goalOptions.map((option) => (
                      <label
                        key={option.value}
                        className={`flex items-center gap-3 rounded-lg border p-4 cursor-pointer transition-all ${
                          formData.goal === option.value
                            ? "border-[#DC2626] bg-red-50 ring-2 ring-red-200"
                            : "border-zinc-200 hover:border-zinc-300 hover:bg-zinc-50"
                        }`}
                      >
                        <input
                          type="radio"
                          name="goal"
                          value={option.value}
                          checked={formData.goal === option.value}
                          onChange={() => handleGoalChange(option.value)}
                          className="h-4 w-4 text-[#DC2626] focus:ring-[#DC2626]"
                          required
                        />
                        <span className="text-sm font-medium text-zinc-900">{option.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-[#DC2626] text-white hover:bg-[#B91C1C] transition-colors shadow-md hover:shadow-lg"
                  >
                    <Send className="mr-2 h-5 w-5" />
                    Submit
                  </Button>
                </div>

                <p className="text-xs text-center text-zinc-500">
                  By submitting this form, you agree to our terms and conditions. We&apos;ll contact you within 24 hours.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Info Section */}
      <section className="bg-gradient-to-b from-zinc-50 to-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-3xl text-center"
          >
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">What Happens Next?</h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-3">
              {[
                {
                  step: "1",
                  title: "Submit Form",
                  description: "Fill out the partnership form with your details",
                },
                {
                  step: "2",
                  title: "We Review",
                  description: "Our team reviews your application within 24 hours",
                },
                {
                  step: "3",
                  title: "Get Started",
                  description: "We contact you to discuss partnership opportunities",
                },
              ].map((item, i) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.45, delay: i * 0.1 }}
                  className="text-center"
                >
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#DC2626] to-black text-lg font-bold text-white">
                    {item.step}
                  </div>
                  <h3 className="mt-4 font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm text-zinc-600">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

