import Link from "next/link";

export default function HomePage() {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative flex items-center justify-center h-screen bg-gradient-to-br from-indigo-600 to-purple-600 text-white px-6">
        <div className="max-w-2xl text-center">
          <h1 className="text-6xl font-extrabold mb-6 leading-tight drop-shadow-lg">
            Hi, I’m Pranshu Verma
          </h1>
          <p className="text-lg mb-8">
            I build elegant full‐stack applications with Next.js, Tailwind CSS &
            TypeScript.
          </p>
          <div className="flex justify-center space-x-4">
            <Link href="#projects" className="px-6 py-3 bg-white text-indigo-600 font-semibold rounded shadow hover:bg-indigo-50 transition">
                My Work
            </Link>
            <Link
              href="#contact"
              className="px-6 py-3 border border-white text-white font-semibold rounded hover:bg-white hover:text-indigo-600 transition"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-6">
          About Me
        </h2>
        <p className="max-w-3xl text-gray-600 mx-auto leading-relaxed">
          I’m a Node.js full stack developer passionate about crafting scalable,
          maintainable web solutions. I specialize in Next.js and Tailwind CSS,
          delivering performant and beautiful user experiences.
        </p>
        <div className="flex justify-center mt-8">
          <Link
            href="/about"
            className="px-5 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
          >
            Learn More
          </Link>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-indigo-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            Projects
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Project Card */}
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-2xl font-semibold mb-2">Project Alpha</h3>
              <p className="text-gray-600 mb-4">
                A performant Next.js e-commerce platform styled with Tailwind.
              </p>
              <Link
                href="/projects"
                className="text-indigo-600 hover:underline"
              >
                View Details →
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-2xl font-semibold mb-2">Dashboard Pro</h3>
              <p className="text-gray-600 mb-4">
                An admin dashboard built with React, TypeScript & Chart.js.
              </p>
              <Link
                href="/projects"
                className="text-indigo-600 hover:underline"
              >
                View Details →
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-2xl font-semibold mb-2">API Central</h3>
              <p className="text-gray-600 mb-4">
                A secure Node.js REST API with JWT authentication.
              </p>
              <Link
                href="/projects"
                className="text-indigo-600 hover:underline"
              >
                View Details →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section id="resume" className="py-20 container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-6">
          Resume
        </h2>
        <p className="text-center text-gray-600 mb-8">
          Download my resume to see my full experience, skills, and
          achievements.
        </p>
        <div className="flex justify-center">
          <a
            href="/resume.pdf"
            download
            className="px-8 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition"
          >
            Download Resume
          </a>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-indigo-50">
        <div className="container mx-auto px-6 max-w-lg">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-6">
            Get in Touch
          </h2>
          <p className="text-center text-gray-600 mb-8">
            Have a project in mind or just want to say hi? Visit the contact
            page.
          </p>
          <Link
            href="/contact"
            className="block text-center px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition"
          >
            Contact Me
          </Link>
        </div>
      </section>
    </div>
  );
}
