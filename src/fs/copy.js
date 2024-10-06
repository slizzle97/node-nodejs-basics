import { promises as fs } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const source = path.join(__dirname, "files");
const destination = path.join(__dirname, "files_copy");

const copy = async () => {
  try {
    await fs.cp(source, destination, { recursive: true });
  } catch {
    throw new Error("FS operation failed");
  }
};

await copy();
