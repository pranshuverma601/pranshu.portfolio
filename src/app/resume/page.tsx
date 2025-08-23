// src/app/resume/page.tsx
export default function ResumePage() {
  return (
    <section className="text-center">
      <h2 className="text-4xl font-semibold mb-6">Download My Resume</h2>
      <a
        href="/resume.pdf"
        download
        className="inline-block px-8 py-4 bg-green-600 text-white rounded hover:bg-green-700"
      >
        Download Resume
      </a>
    </section>
  );
}
