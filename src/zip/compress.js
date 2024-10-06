import { createReadStream, createWriteStream } from "fs";
import { createGzip } from "zlib";
import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const source = path.join(__dirname, "files", "fileToCompress.txt");
const zipped = path.join(__dirname, "files", "archieve.gz");

const readStream = createReadStream(source);
const writeStream = createWriteStream(zipped);
const zipStream = createGzip();

const compress = async () => {
  readStream.pipe(zipStream).pipe(writeStream);
};

await compress();
