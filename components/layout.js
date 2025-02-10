// components/Layout.tsx
import Header from './Header'; // Import the header component

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-1 container mx-auto p-8 border border-gray-300 rounded-lg my-8">
        {children} {/* The main content of each page will go here */}
      </div>
      {/* Footer Section */}
      <footer className="bg-gray-900 text-white p-4 text-center mt-auto">
        <p>&copy; 2025 My Next.js App. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Layout;
