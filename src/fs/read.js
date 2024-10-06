import { promises as fs } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const source = path.join(__dirname, "files", "fileToRead.txt");

const read = async () => {
  try {
    const data = await fs.readFile(source, { encoding: "UTF-8" });
    console.log(data);
  } catch {
    throw new Error("FS operation failed");
  }
};

await read();
