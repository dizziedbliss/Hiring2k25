import React, { useState } from "react";

// --- SVG Icons ---
// Using inline SVGs is a great way to have assets without needing to host image files.
const PokeballIcon = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 200 200"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      cx="100"
      cy="100"
      r="95"
      fill="white"
      stroke="#333"
      strokeWidth="10"
    />
    <path
      d="M100 100V5A95 95 0 0 1 100 195V100ZM100 5A95 95 0 0 0 100 195"
      fill="#F03D3D"
      stroke="#333"
      strokeWidth="10"
    />
    <path d="M5 100H195" stroke="#333" strokeWidth="10" />
    <circle
      cx="100"
      cy="100"
      r="35"
      fill="white"
      stroke="#333"
      strokeWidth="10"
    />
    <circle
      cx="100"
      cy="100"
      r="20"
      fill="white"
      stroke="#333"
      strokeWidth="5"
    />
  </svg>
);

// --- NEW: Landing Page Component ---
const LandingPage = ({ onApplyClick }) => {
  return (
    <div className="w-full max-w-xs mx-auto flex flex-col items-center justify-center text-center">
      <h2 className="text-3xl font-bold text-blue-800 mb-4">
        Trainers be Ready
      </h2>

      <div className="relative mb-8 w-full py-4">
        <div className="text-center font-black">
          <h3
            className="text-4xl md:text-5xl text-yellow-400"
            style={{ WebkitTextStroke: "2px #2563eb" }}
          >
            WE ARE
          </h3>
          <h3
            className="text-6xl md:text-7xl text-yellow-400 -mt-2"
            style={{ WebkitTextStroke: "3px #2563eb" }}
          >
            HIRING
          </h3>
        </div>
        <img
          src="https://i.ibb.co/C0W2g3j/pikachu-sitting.png"
          alt="Pikachu"
          className="absolute w-16 top-5 -right-0 md:w-20 md:-right-4"
        />
      </div>

      <button
        onClick={onApplyClick}
        className="bg-yellow-400 text-gray-800 font-bold text-xl py-3 px-12 rounded-xl shadow-lg border-4 border-yellow-500 hover:bg-yellow-500 transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-yellow-600"
      >
        Apply
      </button>
    </div>
  );
};

// --- Submission Form Component ---
const SubmissionForm = ({ formData, setFormData, handleSubmit, isLoading }) => {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="w-full max-w-md mx-auto bg-white/30 backdrop-blur-sm p-6 md:p-8 rounded-3xl border-2 border-red-500/50 shadow-lg relative">
      <PokeballIcon className="absolute -top-8 -left-10 w-24 h-24 text-red-500 opacity-50 transform rotate-[-30deg]" />
      <PokeballIcon className="absolute -bottom-8 -left-8 w-20 h-20 text-red-500 opacity-30 transform rotate-[15deg]" />
      <PokeballIcon className="absolute top-1/2 -right-12 w-28 h-28 text-red-500 opacity-60 transform -translate-y-1/2" />

      <div className="relative z-10">
        <div className="text-center mb-6">
          <span className="bg-gray-800 text-white text-sm font-semibold px-4 py-2 rounded-full shadow-md">
            Random Questions
          </span>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              required
              value={formData.name}
              onChange={handleInputChange}
              className="mt-1 block w-full bg-white/80 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition"
            />
          </div>
          <div>
            <label htmlFor="usn" className="text-sm font-medium text-gray-700">
              USN
            </label>
            <input
              type="text"
              name="usn"
              id="usn"
              required
              value={formData.usn}
              onChange={handleInputChange}
              className="mt-1 block w-full bg-white/80 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition"
            />
          </div>
          <div>
            <label
              htmlFor="branch"
              className="text-sm font-medium text-gray-700"
            >
              Branch
            </label>
            <input
              type="text"
              name="branch"
              id="branch"
              required
              value={formData.branch}
              onChange={handleInputChange}
              className="mt-1 block w-full bg-white/80 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition"
            />
          </div>
          <div>
            <label
              htmlFor="extra_talents"
              className="text-sm font-medium text-gray-700"
            >
              Extra talents (if any)
            </label>
            <input
              type="text"
              name="extra_talents"
              id="extra_talents"
              value={formData.extra_talents}
              onChange={handleInputChange}
              className="mt-1 block w-full bg-white/80 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition"
            />
          </div>
          <div>
            <label
              htmlFor="projects"
              className="text-sm font-medium text-gray-700"
            >
              Projects (if any)
            </label>
            <textarea
              name="projects"
              id="projects"
              rows="2"
              value={formData.projects}
              onChange={handleInputChange}
              className="mt-1 block w-full bg-white/80 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition"
            ></textarea>
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-white text-gray-800 font-bold py-3 px-4 rounded-xl shadow-lg border-2 border-gray-300 hover:bg-yellow-400 hover:border-yellow-500 transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-yellow-500 disabled:bg-gray-300 disabled:cursor-not-allowed"
          >
            {isLoading ? "Generating..." : "Generate your card"}
          </button>
        </form>
      </div>
    </div>
  );
};

// --- Generated Card Component ---
const GeneratedCard = ({ cardData, handleSave }) => {
  if (!cardData) return null;

  // Function to format the Pokemon ID with leading zeros
  const formatPokemonId = (id) => String(id).padStart(4, "0");

  return (
    <div className="w-full max-w-md mx-auto text-center">
      <PokeballIcon className="absolute top-1/4 -left-10 w-20 h-20 text-red-500 opacity-40 transform rotate-[20deg]" />
      <PokeballIcon className="absolute bottom-1/4 -right-12 w-28 h-28 text-red-500 opacity-50 transform -translate-y-1/2 rotate-[-15deg]" />

      <div className="relative z-10">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
          Congratulations
        </h2>
        <p className="text-gray-600 mb-6">
          You're selected for the priority list
        </p>

        <div
          id="pokemon-card"
          className="bg-gray-800 text-white rounded-3xl p-6 shadow-2xl w-full max-w-sm mx-auto aspect-[3/4] flex flex-col justify-between relative overflow-hidden"
        >
          {/* Header */}
          <div className="flex justify-between items-start">
            <span className="text-4xl font-black text-white/50 tracking-widest">
              #{formatPokemonId(cardData.id)}
            </span>
          </div>

          {/* Main Image */}
          <div className="flex-grow flex items-center justify-center">
            <img
              src={cardData.pokemonImage}
              alt={cardData.pokemonName}
              className="max-w-full max-h-full h-48 md:h-56 drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)]"
            />
          </div>

          {/* Pokemon Name (Vertical) */}
          <span className="absolute top-0 right-0 text-5xl font-black text-white/20 uppercase origin-top-right transform rotate-90 translate-x-full translate-y-4 tracking-[0.2em]">
            {cardData.pokemonName}
          </span>

          {/* Footer Info */}
          <div className="text-left relative z-10">
            <img
              src="https://i.ibb.co/bF05T5j/meriise-logo-white.png"
              alt="Meriise Foundation Logo"
              className="absolute bottom-2 right-2 w-20 opacity-80"
            />
            <h3 className="text-4xl font-extrabold capitalize drop-shadow-lg">
              {cardData.studentName}
            </h3>
            <p className="text-sm text-gray-300">{cardData.studentUsn}</p>
            <p className="text-xs text-yellow-400">Technical Weeb</p>
          </div>
        </div>

        <p className="text-xs text-gray-500 mt-4">
          *Please bring a digital copy of this to the Auditions
        </p>
        <button
          onClick={handleSave}
          className="mt-4 bg-white text-gray-800 font-bold py-3 px-8 rounded-xl shadow-lg border-2 border-gray-300 hover:bg-yellow-400 hover:border-yellow-500 transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-yellow-500"
        >
          Click to save this
        </button>
        <p className="text-gray-600 mt-4 font-semibold">
          See you soon at the Auditions
        </p>
      </div>
    </div>
  );
};

// --- Main App Component ---
export default function App() {
  const [view, setView] = useState("landing"); // 'landing', 'form', or 'card'
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    usn: "",
    branch: "",
    extra_talents: "",
    projects: "",
  });
  const [cardData, setCardData] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    // --- BACKEND API CALL GOES HERE ---
    // In a real application, you would use fetch() to send `formData`
    // to your backend endpoint, e.g., POST /generate-card

    // For now, we will simulate the API call and response.
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate network delay

      // This is MOCK data. Your backend will create and send this.
      const mockApiResponse = {
        id: 39, // Jigglypuff's ID
        studentName: formData.name,
        studentUsn: formData.usn,
        pokemonName: "jigglypuff",
        pokemonImage:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/39.png",
      };

      setCardData(mockApiResponse);
      setView("card");
    } catch (err) {
      setError("Something went wrong. Please try again!");
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSave = () => {
    // In a real app, you might use a library like html2canvas to save the card div as an image.
    alert("Save functionality would be implemented here!");
  };

  const renderContent = () => {
    switch (view) {
      case "form":
        return (
          <SubmissionForm
            formData={formData}
            setFormData={setFormData}
            handleSubmit={handleSubmit}
            isLoading={isLoading}
          />
        );
      case "card":
        return <GeneratedCard cardData={cardData} handleSave={handleSave} />;
      case "landing":
      default:
        return <LandingPage onApplyClick={() => setView("form")} />;
    }
  };

  return (
    <div
      className={`min-h-screen w-full font-sans flex flex-col items-center justify-center p-4 relative overflow-hidden ${
        view === "landing" ? "bg-gray-100" : "bg-yellow-300"
      }`}
    >
      {/* Decorative background elements shown only for form and card */}
      {view !== "landing" && (
        <div className="absolute top-0 left-0 w-full h-1/2 z-0">
          <img
            src="https://i.ibb.co/Yj35K0V/pika-pichu-bg.png"
            alt="Decorative background"
            className="w-full h-full object-contain object-top"
          />
        </div>
      )}

      <header className="relative z-10 w-full flex flex-col items-center pt-8 pb-4">
        <img
          src="https://i.ibb.co/k3y5g3s/meriise-logo-color.png"
          alt="Meriise Foundation Logo"
          className="w-48 md:w-64 mb-4"
        />
        {view === "form" && (
          <h1 className="bg-white/80 backdrop-blur-sm text-3xl md:text-4xl font-extrabold text-gray-800 rounded-full px-8 py-2 shadow-lg border-2 border-gray-200">
            Digital
          </h1>
        )}
      </header>

      <main className="relative z-10 w-full flex-grow flex items-center justify-center">
        {renderContent()}
        {error && (
          <p className="text-red-500 bg-white/50 p-3 rounded-lg mt-4">
            {error}
          </p>
        )}
      </main>
    </div>
  );
}
