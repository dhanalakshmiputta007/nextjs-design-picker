import { useEffect, useState } from "react";

const designs = [
  { id: 1, name: "Minimalist", image: "/images/coffee.png" },
  { id: 2, name: "Dark Mode", image: "/images/chiken.jpg" },
  { id: 3, name: "Professional", image: "/images/download.png" },
];

export default function Designs() {
    useEffect(() => {
        const fetchData = async () => {
          const response = await fetch('/api/hello');
          const data = await response.json();
          console.log(data.message);  // Output should be "Hello World!"
        };
    
        fetchData();
      }, []);
  const [selectedDesign, setSelectedDesign] = useState(null);

  const handleSelect = async (design) => {
    setSelectedDesign(design);

    // Save selection to backend
    const response=  await fetch("/api/saveDesign", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(design),
    });
    if (response.ok) {
        const data = await response.json();
        console.log("Design saved successfully!", data);
      } else {
        console.log("Error saving design");
      }
  };
  
  

  return (
    <div className="p-6 text-center">
      <h1 className="text-2xl font-bold mb-4">Pick a Design</h1>
      <div className="grid grid-cols-3 gap-4">
        {designs.map((design) => (
          <div key={design.id} className="p-4 border rounded-lg">
            <img src={design.image} alt={design.name} className="w-full h-40 object-cover rounded-lg" />
            <h2 className="mt-2">{design.name}</h2>
            <button
              onClick={() => handleSelect(design)}
              className="mt-2 bg-blue-500 text-white px-4 py-2 rounded"
            >
              Select
            </button>
          </div>
        ))}
      </div>
      {selectedDesign && (
        <p className="mt-4 text-green-600">You selected: {selectedDesign.name}</p>
      )}
    </div>
  );
}
