import { createReadStream, promises as fs } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const source = path.join(__dirname, "files", "fileToRead.txt");

const reader = createReadStream(source);

const read = async () => {
  reader.pipe(process.stdout);
};

await read();
