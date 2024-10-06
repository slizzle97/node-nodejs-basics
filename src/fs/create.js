import { promises as fs } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dirPath = path.join(__dirname, "files");
const filePath = path.join(dirPath, "fresh.txt");
const text = "I am fresh and young";

const create = async () => {
  try {
    await fs.writeFile(filePath, text, { flag: "wx" });
  } catch {
    throw new Error("FS operation failed");
  }
};

await create();
