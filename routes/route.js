import express from "express";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const router = express.Router();

const languagesPath = path.join(__dirname, "../languages");
const languages = {};

const languageFiles = fs.readdirSync(languagesPath).filter(file => file.endsWith(".js"));
for (const file of languageFiles) {
  const langName = path.basename(file, ".js");
  const modulePath = path.join(languagesPath, file);
  const langData = await import(modulePath);
  languages[langName] = langData.default;
}

router.get("/:lang/random", (req, res) => {
  const { lang } = req.params;
  const number = parseInt(req.query.number) || null;

  if (!languages[lang]) {
    return res.status(404).json({ message: "Language not supported" });
  }

  const data = languages[lang];
  if (number && !isNaN(number)) {
    const shuffled = [...data].sort(() => 0.5 - Math.random());
    return res.json(shuffled.slice(0, number));
  } else {
    return res.json(data);
  }
});

export default router;
