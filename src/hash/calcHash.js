import { promises as fs } from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { createHash } from "node:crypto";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const source = path.join(__dirname, "files", "fileToCalculateHashFor.txt");

const calculateHash = async () => {
  try {
    const data = await fs.readFile(source);
    const hash = createHash("sha256").update(data).digest("hex");
    console.log(hash);
  } catch {
    throw new Error("FS operation failed");
  }
};

await calculateHash();
