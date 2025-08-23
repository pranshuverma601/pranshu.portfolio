// src/app/contact/page.tsx
"use client";

import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(form); // Replace with real submission
    alert("Message sent!");
  };

  return (
    <section>
      <h2 className="text-4xl font-semibold mb-6">Contact Me</h2>
      <form onSubmit={handleSubmit} className="max-w-md space-y-4">
        <input
          required
          placeholder="Name"
          className="w-full p-3 border rounded"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <input
          type="email"
          required
          placeholder="Email"
          className="w-full p-3 border rounded"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <textarea
          required
          placeholder="Message"
          rows={4}
          className="w-full p-3 border rounded"
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
        />
        <button
          type="submit"
          className="px-6 py-3 bg-indigo-600 text-white rounded hover:bg-indigo-700"
        >
          Send
        </button>
      </form>
    </section>
  );
}
