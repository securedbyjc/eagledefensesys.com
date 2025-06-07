import React from "react";
import capabilityPDF from '../assets/docs/capability-statement.pdf';

const Home = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800 flex flex-col items-center justify-center px-4 py-12">

      {/* Existing content here… */}

      {/* Capability Statement Download Button */}
      <a
        href={capabilityPDF}
        download
        className="mt-4 px-4 py-2 bg-yellow-600 text-white rounded hover:bg-yellow-700 transition"
        >
        Download Capability Statement
    </a>

    </div>
  );
};

export default Home;
