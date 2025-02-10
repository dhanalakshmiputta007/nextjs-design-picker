import Image from "next/image";
import Header from '../components/Header'; // Adjust path if needed

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Include the Header here */}
      <Header />

      {/* Main Content Section with Border */}
      <div className="body-content flex-1 container mx-auto p-8 border border-gray-300 rounded-lg my-8">
        <h2 className="text-3xl font-bold text-center">Welcome to My Next.js App!</h2>
        <p className="mt-4 text-center">
          Start editing <code>app/page.tsx</code> to modify this content.
        </p>
        
      </div>

      {/* Footer Section always at the bottom */}
      <footer className="bg-gray-900 text-white p-4 text-center mt-auto">
        <p>&copy; 2025 My Next.js App. All rights reserved.</p>
      </footer>
    </div>
  );
}
