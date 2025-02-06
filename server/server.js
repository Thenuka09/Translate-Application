import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import axios from "axios";

const app = express();
dotenv.config(); // helps to read the API_Key from the .env file

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res)=>{
    res.send("Hello from express");
})

app.post("/translate", async (req, res) => {

    try {

        const { text, sourceLang } = req.body;

        const translation = await axios.post(
            `https://translation.googleapis.com/language/translate/v2?key=${process.env.API_KEY}`,
            {},
            {
                params: {
                    q: text,
                    source: sourceLang,
                    target: "en"
                },
            }
        );
        res.json(translation.data.data.translations);

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Translation Faild" })
    }

})

// app.listen(3001, () => {
//     console.log("server is running on port 3001");
// })

export default app;