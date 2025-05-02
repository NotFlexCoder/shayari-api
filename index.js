import express from "express";
import cors from "cors";
import router from "./routes/route.js";
import languages_array from "./languages.js";

const port = process.env.PORT || 3000;
const app = express();

app.use(cors({
    origin: "*",
    methods: ['GET', 'POST']
}));

app.get("/", (req, res) => {
    res.send("API Is Running");
});

app.get("/language-list", (req, res) => {
    res.send(languages_array);
});

app.use("/language", router);

app.listen(port, () => {
    console.log(`App running on port ${port}`);
});

export default app;
