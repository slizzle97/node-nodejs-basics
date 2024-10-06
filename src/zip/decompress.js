import { createReadStream, createWriteStream } from "fs";
import { createGunzip } from "zlib";
import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const zipped = path.join(__dirname, "files", "archieve.gz");
const destination = path.join(__dirname, "files", "fileToCompress.txt");

const readStream = createReadStream(zipped);
const writeStream = createWriteStream(destination);
const gunzip = createGunzip();

const decompress = async () => {
  readStream.pipe(gunzip).pipe(writeStream);
};

await decompress();
