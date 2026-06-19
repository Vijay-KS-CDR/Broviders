import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";
import SEO from "../components/SEO";
import SectionHeader from "../components/SectionHeader";
import ScrollReveal from "../components/ScrollReveal";
import Button from "../components/Button";
import { company } from "../data/company";

const projectTypes = [
  "Web Development",
  "Mobile App",
  "Custom Software",
  "UI/UX Design",
  "Chrome Extension",
  "AI Integration",
  "School/Hostel System",
  "Other",
];

const budgetRanges = [
  "Under ₹2,500",
  "₹2,500 - ₹5,000",
  "₹5,000 - ₹7,500",
  "₹7,500 - ₹10,000",
  "₹10,000+",
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    budget: "",
    projectType: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch(`https://formsubmit.co/ajax/${company.email || "broviders.dev@gmail.com"}`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          ...form,
          _captcha: false
        })
      });
      setSubmitted(true);
    } catch (error) {
      console.error(error);
      setSubmitted(true);
    }
  };

  return (
    <>
      <SEO
        title="Contact"
        description="Get in touch with Broviders to start your next digital product. We respond within 24 hours."
      />

      <section className="pt-36 pb-24 bg-[var(--color-faint)] relative overflow-hidden min-h-screen">
        <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-[var(--color-primary)]/5 rounded-full blur-[140px] pointer-events-none opacity-40" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 z-10">
          <SectionHeader
            badge="Contact"
            title="Let's Start a Conversation"
            subtitle="Tell us about your project and we'll get back to you within 24 hours."
            align="left"
          />

          <div className="grid lg:grid-cols-5 gap-12 mt-12">
            <ScrollReveal className="lg:col-span-2 space-y-8">
              <div>
                <h3 className="text-xl font-medium text-[var(--color-dark)] mb-8 tracking-wide">Get in Touch</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-5">
                    <Mail size={22} className="text-[var(--color-primary)] mt-0.5" />
                    <div>
                      <div className="text-sm font-medium text-[var(--color-dark)]">Email</div>
                      <div className="text-sm text-[var(--color-muted)] mt-1">
                        {company.email || "Coming Soon"}
                      </div>
                    </div>
                  </div>
                  <div className="h-px w-full bg-[var(--color-border)]" />
                  <div className="flex items-start gap-5">
                    <Phone size={22} className="text-[var(--color-primary)] mt-0.5" />
                    <div>
                      <div className="text-sm font-medium text-[var(--color-dark)]">Phone</div>
                      <div className="text-sm text-[var(--color-muted)] mt-1">
                        {company.phone || "Coming Soon"}
                      </div>
                    </div>
                  </div>
                  <div className="h-px w-full bg-[var(--color-border)]" />
                  <div className="flex items-start gap-5">
                    <MapPin size={22} className="text-[var(--color-primary)] mt-0.5" />
                    <div>
                      <div className="text-sm font-medium text-[var(--color-dark)]">Location</div>
                      <div className="text-sm text-[var(--color-muted)] mt-1">
                        {company.address || "India"}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-8 rounded-2xl bg-[var(--color-dark)] text-white relative mt-12">
                <h4 className="font-medium text-white text-lg mb-4">Quick Response Guarantee</h4>
                <p className="text-[var(--color-muted)] text-body leading-relaxed">
                  We respond to all inquiries within 24 hours. For urgent projects,
                  mention it in your message and we&apos;ll prioritize your request.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal variant="slideRight" className="lg:col-span-3">
              {submitted ? (
                <div className="flex flex-col items-center justify-center p-12 rounded-2xl bg-[var(--color-dark-surface)] border border-[var(--color-border)] text-center min-h-[500px]">
                  <div className="w-20 h-20 bg-[var(--color-primary)]/10 rounded-full flex items-center justify-center mb-6 animate-pulse">
                    <CheckCircle2 size={40} className="text-[var(--color-primary)]" />
                  </div>
                  <h3 className="text-3xl font-medium text-[var(--color-dark)] mb-4">Message Sent!</h3>
                  <p className="text-[var(--color-muted)] text-lg">
                    Thank you for reaching out. We&apos;ll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="p-8 md:p-12 rounded-2xl bg-[var(--color-dark-surface)] border border-[var(--color-border)] space-y-8"
                >
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <label className="block text-sm font-medium text-[var(--color-dark)] mb-3">
                        Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        className="w-full px-5 py-4 rounded-xl bg-[var(--color-dark-elevated)] border border-transparent text-[var(--color-dark)] placeholder-[var(--color-muted)] focus:border-[var(--color-primary)] focus:bg-[var(--color-dark-surface)] focus:outline-none focus:ring-1 focus:ring-[var(--color-primary)] transition-all text-body"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[var(--color-dark)] mb-3">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        className="w-full px-5 py-4 rounded-xl bg-[var(--color-dark-elevated)] border border-transparent text-[var(--color-dark)] placeholder-[var(--color-muted)] focus:border-[var(--color-primary)] focus:bg-[var(--color-dark-surface)] focus:outline-none focus:ring-1 focus:ring-[var(--color-primary)] transition-all text-body"
                        placeholder="you@company.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[var(--color-dark)] mb-3">
                      Company (Optional)
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      className="w-full px-5 py-4 rounded-xl bg-[var(--color-dark-elevated)] border border-transparent text-[var(--color-dark)] placeholder-[var(--color-muted)] focus:border-[var(--color-primary)] focus:bg-[var(--color-dark-surface)] focus:outline-none focus:ring-1 focus:ring-[var(--color-primary)] transition-all text-body"
                      placeholder="Your company name"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <label className="block text-sm font-medium text-[var(--color-dark)] mb-3">
                        Project Type
                      </label>
                      <select
                        name="projectType"
                        value={form.projectType}
                        onChange={handleChange}
                        className="w-full px-5 py-4 rounded-xl bg-[var(--color-dark-elevated)] border border-transparent text-[var(--color-dark)] focus:border-[var(--color-primary)] focus:bg-[var(--color-dark-surface)] focus:outline-none focus:ring-1 focus:ring-[var(--color-primary)] transition-all text-body appearance-none"
                      >
                        <option value="">Select type</option>
                        {projectTypes.map((type) => (
                          <option key={type} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[var(--color-dark)] mb-3">
                        Budget
                      </label>
                      <select
                        name="budget"
                        value={form.budget}
                        onChange={handleChange}
                        className="w-full px-5 py-4 rounded-xl bg-[var(--color-dark-elevated)] border border-transparent text-[var(--color-dark)] focus:border-[var(--color-primary)] focus:bg-[var(--color-dark-surface)] focus:outline-none focus:ring-1 focus:ring-[var(--color-primary)] transition-all text-body appearance-none"
                      >
                        <option value="">Select budget</option>
                        {budgetRanges.map((range) => (
                          <option key={range} value={range}>
                            {range}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[var(--color-dark)] mb-3">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      className="w-full px-5 py-4 rounded-xl bg-[var(--color-dark-elevated)] border border-transparent text-[var(--color-dark)] placeholder-[var(--color-muted)] focus:border-[var(--color-primary)] focus:bg-[var(--color-dark-surface)] focus:outline-none focus:ring-1 focus:ring-[var(--color-primary)] transition-all text-body resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  <Button type="submit" variant="primary" size="lg" magnetic className="w-full mt-4">
                    Send Message
                    <Send size={18} className="ml-2" />
                  </Button>
                </form>
              )}
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
