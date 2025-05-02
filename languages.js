import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const languagesPath = path.join(__dirname, "languages");

const languageFiles = fs.readdirSync(languagesPath).filter(file => file.endsWith(".js"));

const languages_array = languageFiles.map(file => ({
  name: path.basename(file, ".js"),
  code: path.basename(file, ".js").slice(0, 2)
}));

export default languages_array;
