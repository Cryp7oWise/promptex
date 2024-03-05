// This script will be updated later to communicate with the server.
function generatePrompt() {
    const idea = document.getElementById('ideaInput').value;
    fetch('/generate', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ idea }),
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('promptOutput').innerText = data.prompt;
    })
    .catch(error => {
        console.error('Error:', error);
    });
}
