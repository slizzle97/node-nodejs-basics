import { createReadStream, createWriteStream, promises as fs } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const source = path.join(__dirname, "files", "fileToWrite.txt");

const writeStream = createWriteStream(source);

const write = async () => {
  process.stdin.pipe(writeStream);
};

await write();
