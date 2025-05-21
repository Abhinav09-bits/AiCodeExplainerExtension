document.addEventListener("DOMContentLoaded", async () => {
    chrome.storage.local.get(["selectedCode", "apiKey"], async (data) => {
        if (data.selectedCode) {
            document.getElementById("codeInput").value = data.selectedCode;
        }

        document.getElementById("explainBtn").addEventListener("click", async () => {
            const code = document.getElementById("codeInput").value;
            if (!code) return;

            const apiKey = data.apiKey;
            if (!apiKey) {
                document.getElementById("output").innerText = "API key not found. Please set it in extension settings.";
                return;
            }

            document.getElementById("output").innerText = "Loading...";

            try {
                const response = await fetch("https://api.openai.com/v1/chat/completions", {
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

                const result = await response.json();
                if (result.choices && result.choices[0]) {
                    document.getElementById("output").innerText = result.choices[0].message.content;
                } else {
                    document.getElementById("output").innerText = "Error: No explanation returned.";
                }
            } catch (error) {
                document.getElementById("output").innerText = `Error: ${error.message}`;
            }
        });
    });
});
