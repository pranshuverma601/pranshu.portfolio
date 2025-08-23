// src/components/Footer.tsx
export default function Footer() {
  return (
    <footer className="bg-gray-100 py-6 mt-16">
      <div className="container mx-auto text-center text-gray-600">
        © {new Date().getFullYear()} MyPortfolio. All rights reserved.
      </div>
    </footer>
  );
}
