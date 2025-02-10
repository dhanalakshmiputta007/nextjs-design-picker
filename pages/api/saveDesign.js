import fs from "fs";
import path from "path";

export default function handler(req, res) {
    
  if (req.method === "POST") {
    const filePath = path.join(process.cwd(), "data.json");
    const data = JSON.parse(fs.readFileSync(filePath, "utf-8"));

    data.selectedDesign = req.body;
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));

    return res.status(200).json({ message: "Design saved!" });
  }
  res.status(405).json({ message: "Method Not Allowed" });
}

// pages/api/saveDesign.js

