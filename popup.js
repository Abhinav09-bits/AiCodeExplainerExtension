const apiKey = "yourApiKey"

document.addEventListener("DOMContentLoaded", async () => {
    chrome.storage.local.get("selectedCode", (data) => {
        if (data.selectedCode) {
            document.getElementById("codeInput").value = data.selectedCode;
        }
    });

    document.getElementById("explainBtn").addEventListener("click", async () => {
        const code = document.getElementById("codeInput").value;
        if (!code) return;

        document.getElementById("output").innerText = "Loading...";

        const response = await fetch(apiKey, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${apiKey}`
            },
            body: JSON.stringify({
                model: "gpt-3.5-turbo",
                messages: [{ role: "user", content: `Explain this code: ${code}` }],
                max_tokens: 100
            })
        });

        const data = await response.json();
        document.getElementById("output").innerText = data.choices[0].message.content;
    });
});
