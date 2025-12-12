/*require("dotenv").config();
console.log("API Key loaded:", process.env.GEMINI_API_KEY);

const express = require("express");
const cors = require("cors");
const { GoogleGenerativeAI } = require("@google/generative-ai");

const app = express();
app.use(cors());
app.use(express.json());

if (!process.env.GEMINI_API_KEY) {
    console.error("❌ GEMINI_API_KEY missing. Add it to .env before running!");
    process.exit(1);
}

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

app.post("/summarize", async (req, res) => {
    try {
        const text = req.body.text;

        const result = await model.generateContent({
            contents: [
                { 
                  role: "user", 
                  parts: [{ 
                    text: `Summarize the following in clear, simple bullet points (short, concise):\n\n${text}` 
                  }] 
                }
            ]
        });

        const replyText = result.response.text();
        console.log("AI reply:", replyText);

        res.json({ reply: replyText });

    } catch (err) {
        console.error(err);
        res.json({ reply: "Error: " + err.message });
    }
});

app.listen(3000, () => console.log("Server running on http://localhost:3000"));
*/
