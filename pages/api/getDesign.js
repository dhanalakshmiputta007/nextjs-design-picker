import fs from "fs";
import path from "path";

export default function handler(req, res) {
  const filePath = path.join(process.cwd(), "data.json");
  const data = JSON.parse(fs.readFileSync(filePath, "utf-8"));

  return res.status(200).json({ selectedDesign: data.selectedDesign });
}
