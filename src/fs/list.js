import { promises as fs } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const files = path.join(__dirname, "files");

const list = async () => {
  try {
    const fileNames = await fs.readdir(files);
    console.log(fileNames);
  } catch {
    throw new Error("FS operation failed");
  }
};

await list();
