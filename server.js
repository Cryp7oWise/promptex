const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(express.static('.'));

app.post('/generate', (req, res) => {
    const idea = req.body.idea;
    // Here you would integrate with an AI model to generate the prompt
    // For simplicity, we're just echoing the idea
    const generatedPrompt = `Imagine a world where ${idea}`; // Placeholder response
    res.json({ prompt: generatedPrompt });
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
