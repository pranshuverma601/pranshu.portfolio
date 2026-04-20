// src/app/contact/page.tsx
"use client";

import emailjs from "@emailjs/browser";
import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === "sending") return;

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setStatus("error");
      setErrorMessage(
        "Email service is not configured yet. Please add EmailJS keys in environment variables."
      );
      return;
    }

    setErrorMessage("");
    setStatus("sending");

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
          reply_to: form.email,
        },
        {
          publicKey,
        }
      );

      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Email send failed:", error);
      setStatus("error");
      setErrorMessage("Failed to send message. Please try again.");
    }
  };

  return (
    <section className="relative">
      <div className="pointer-events-none absolute inset-x-0 -top-10 mx-auto h-56 max-w-6xl bg-gradient-to-r from-indigo-500/10 via-violet-500/10 to-fuchsia-500/10 blur-3xl" />

      <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-5">
        <div className="grid h-11 w-11 place-items-center overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-500 via-violet-500 to-fuchsia-500 shadow-sm ring-1 ring-black/5">
          <span className="select-none text-sm font-black tracking-tight text-white">
            P
          </span>
        </div>
        <div>
          <h2 className="text-4xl font-semibold tracking-tight text-gray-900">
            Contact Me
          </h2>
          <p className="mt-1 text-sm text-gray-600">
            Let&apos;s build something great — I usually reply within 24 hours.
          </p>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-5">
        <aside className="lg:col-span-2">
          <div className="rounded-2xl border border-black/5 bg-white/80 p-6 shadow-sm backdrop-blur">
            <h3 className="text-lg font-semibold text-gray-900">
              Quick info
            </h3>
            <p className="mt-2 text-sm text-gray-600">
              Share your requirement and timeline. I can help with Dynamics 365
              CRM (backend), PCF controls, Power Automate, and web apps using
              React/Next.js.
            </p>

            <div className="mt-5 grid gap-3">
              {[
                {
                  title: "Response time",
                  desc: "Usually within 24 hours",
                  tag: "Fast",
                },
                {
                  title: "Best for",
                  desc: "CRM backend, PCF, Power Automate, Web apps",
                  tag: "Focus",
                },
              ].map((c) => (
                <div
                  key={c.title}
                  className="group rounded-2xl border border-black/5 bg-white px-5 py-4 transition hover:-translate-y-[1px] hover:shadow-sm"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="min-w-0">
                      <div className="text-sm font-semibold text-gray-900">
                        {c.title}
                      </div>
                      <div className="mt-1 text-sm text-gray-600">{c.desc}</div>
                    </div>
                    <span className="shrink-0 rounded-xl bg-gradient-to-br from-indigo-500 via-violet-500 to-fuchsia-500 px-2.5 py-1 text-xs font-bold text-white shadow-sm">
                      {c.tag}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-5 rounded-2xl border border-black/5 bg-gradient-to-br from-indigo-600/10 via-violet-600/10 to-fuchsia-600/10 p-5">
              <div className="text-sm font-semibold text-gray-900">
                Prefer email?
              </div>
              <p className="mt-1 text-sm text-gray-700">
                Add your email in the form and I’ll reply there. (You can also
                include a meeting time window.)
              </p>
            </div>
          </div>
        </aside>

        <div className="lg:col-span-3">
          <div className="rounded-2xl border border-black/5 bg-white/80 p-6 shadow-sm backdrop-blur">
            <div className="flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Send a message
                </h3>
                <p className="mt-1 text-sm text-gray-600">
                  Tell me what you want to build (or fix) and I’ll get back to
                  you.
                </p>
              </div>
              {status === "sent" && (
                <div className="mt-3 inline-flex items-center gap-2 rounded-xl bg-emerald-500/10 px-3 py-2 text-sm font-semibold text-emerald-700 ring-1 ring-emerald-500/20 sm:mt-0">
                  <span className="grid h-6 w-6 place-items-center rounded-lg bg-emerald-500 text-white">
                    ✓
                  </span>
                  Message sent successfully
                </div>
              )}
              {status === "error" && (
                <div className="mt-3 inline-flex items-center gap-2 rounded-xl bg-rose-500/10 px-3 py-2 text-sm font-semibold text-rose-700 ring-1 ring-rose-500/20 sm:mt-0">
                  <span className="grid h-6 w-6 place-items-center rounded-lg bg-rose-500 text-white">
                    !
                  </span>
                  {errorMessage}
                </div>
              )}
            </div>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">
                    Name
                  </label>
                  <input
                    required
                    maxLength={80}
                    placeholder="Your name"
                    className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-gray-900 outline-none ring-0 transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/15"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    maxLength={120}
                    placeholder="you@example.com"
                    className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-gray-900 outline-none ring-0 transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/15"
                    value={form.email}
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  required
                  maxLength={800}
                  placeholder="Tell me about your project, stack, timeline, and what you need help with..."
                  rows={6}
                  className="w-full resize-none rounded-xl border border-black/10 bg-white px-4 py-3 text-gray-900 outline-none ring-0 transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/15"
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                />
                <div className="flex flex-col gap-2 text-xs text-gray-500 sm:flex-row sm:items-center sm:justify-between">
                  <span>
                    Tip: Include “Dynamics 365 / PCF / Power Automate” if it’s a
                    CRM requirement.
                  </span>
                  <span className="font-medium text-gray-600">
                    {form.message.length}/800
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div className="text-sm text-gray-600">
                  By sending, you agree I can reply to your email.
                </div>
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 px-6 py-3 font-semibold text-white shadow-sm shadow-indigo-600/20 ring-1 ring-black/5 transition-transform duration-200 hover:-translate-y-[1px] hover:shadow-md hover:shadow-indigo-600/30 active:translate-y-0 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
                >
                  <span className="grid h-7 w-7 place-items-center rounded-lg bg-white/15 ring-1 ring-white/10 transition-transform duration-200 group-hover:rotate-[8deg]">
                    <span className="text-[12px] font-black tracking-tight">
                      P
                    </span>
                  </span>
                  {status === "sending" ? "Sending..." : "Send message"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
