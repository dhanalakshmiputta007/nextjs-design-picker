import { useEffect, useState } from "react";

export default function Selected() {
  const [selectedDesign, setSelectedDesign] = useState(null);

  useEffect(() => {
    fetch("/api/getDesign")
      .then((res) => res.json())
      .then((data) => setSelectedDesign(data.selectedDesign));
  }, []);

  return (
    <div className="p-6 text-center">
      <h1 className="text-2xl font-bold">Selected Design</h1>
      {selectedDesign ? (
        <div className="mt-4">
          <img src={selectedDesign.image} alt={selectedDesign.name} className="w-64 h-40 object-cover rounded-lg" />
          <h2 className="mt-2">{selectedDesign.name}</h2>
        </div>
      ) : (
        <p className="text-red-500">No design selected yet.</p>
      )}
    </div>
  );
}
