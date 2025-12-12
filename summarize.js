/*

const aiBox = document.getElementById("aiBox");

// Default message before server responds
aiBox.value = "Waiting for AI response…";

// Summarize button
document.getElementById("summarizeBTN").addEventListener("click", async () => {
    const text = document.getElementById("textBox").value;

    try {
        const res = await fetch("http://localhost:3000/summarize", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ text })
        });

        const data = await res.json();
        aiBox.value = data.reply || "No response from server";

    } catch (err) {
        // If server is down or error occurs
        aiBox.value = "Server not running or network error.";
    }
});

// Regenerate button
document.getElementById("restart").addEventListener("click", async () => {
    const text = document.getElementById("textBox").value;

    try {
        const res = await fetch("http://localhost:3000/summarize", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ text })
        });

        const data = await res.json();
        aiBox.value = data.reply || "No response from server";

    } catch (err) {
        aiBox.value = "Server not running or network error.";
    }
});

*/
