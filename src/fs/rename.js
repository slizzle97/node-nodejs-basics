import { promises as fs } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const wrongFileName = path.join(__dirname, "files", "wrongFilename.txt");
const properFilename = path.join(__dirname, "files", "properFilename.md");

const rename = async () => {
  try {
    await fs.rename(wrongFileName, properFilename);
  } catch {
    throw new Error("FS operation failed");
  }
};

await rename();
