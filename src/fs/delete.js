import { promises as fs } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const fileToRemove = path.join(__dirname, "files", "fileToRemove.txt");

const remove = async () => {
  try {
    await fs.rm(fileToRemove);
  } catch {
    throw new Error("FS operation failed");
  }
};

await remove();
