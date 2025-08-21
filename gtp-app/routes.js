require("dotenv").config();
const express = require("express");
const router = express.Router();
const { OpenAI } = require("openai");
const Result = require('./models.js')

// Initialize OpenAI client with API key from environment
const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});
console.log("API Key loaded?", process.env.OPENAI_API_KEY ? "Yes ✅" : "No ❌");

const startChatLog = `Human: Hello, who are you?
AI: I am doing great. How can I help you today?
`;

async function ask(question, chatLog = undefined) {
    if (!chatLog) chatLog = startChatLog;
    const chatPrompt = `${chatLog}Human: ${question}\nAI:`;

    try {
        const chatResponse = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [{ role: "user", content: chatPrompt }],
            temperature: 0.9,
            top_p: 1,
            max_tokens: 150
        });

        const chatAnswer = chatResponse.choices[0].message.content.trim();
        return chatAnswer;

    } catch (error) {
        console.error("OpenAI API error:", error.message);

        // Handle quota exceeded
        if (error.status === 429) {
            return "Sorry, the AI is currently over its usage limit. Please try again later.";
        }

        // Handle other API errors
        return "Sorry, something went wrong while contacting the AI.";
    }
}

const historyData = [];
router.get(
    '/',
    async (req, res, next) => {
        const query = req.query.query;
        if (query == '' || query == undefined)
            res.render('response_view.html');
        else {
            const chatAnswer = await ask(query);
            const dataList = [];
            const timeNow = Date.now().toLocaleString('en-GB', { timeZone: 'UTC' });
            const queryMessage = new Result({
                time: timeNow,
                messageType: 'other-message float-right',
                message: query
            });
            await queryMessage.save();
            const responseMessage = new Result({
                time: timeNow,
                messageType: 'my-message',
                message: chatAnswer
            })
            await responseMessage.save()
            dataList.push(queryMessage);
            dataList.push(responseMessage);
            historyData.push(queryMessage); 
            historyData.push(responseMessage);
            res.render('response_view.html', { results: dataList });
        }
    }
);

// Example route
router.post(
    '/',
    (req, res, next) => {
        res.render('history.html', {results: historyData})
    }
)

module.exports = router;
