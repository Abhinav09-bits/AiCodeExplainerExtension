﻿# AiCodeExplainerExtension

# Web-helper

The AI Code Explainer is a Chrome extension that leverages the power of OpenAI's GPT models (like GPT-3.5 or GPT-4) to provide clear, concise explanations for code snippets. Designed to assist developers, students, and learners, this tool helps you better understand unfamiliar or complex code by generating natural-language explanations with a single click.

Whether you're learning to code, reviewing legacy projects, or just want a second pair of (AI) eyes, this extension turns raw code into readable insight—instantly.

#
# Web-helper

The AI Code Explainer is a Chrome extension that leverages the power of OpenAI's GPT models (like GPT-3.5 or GPT-4) to provide clear, concise explanations for code snippets. Designed to assist developers, students, and learners, this tool helps you better understand unfamiliar or complex code by generating natural-language explanations with a single click.

Whether you're learning to code, reviewing legacy projects, or just want a second pair of (AI) eyes, this extension turns raw code into readable insight—instantly.


## Badges

Add badges from somewhere like: [shields.io](https://shields.io/)

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
[![GPLv3 License](https://img.shields.io/badge/License-GPL%20v3-yellow.svg)](https://opensource.org/licenses/)
[![AGPL License](https://img.shields.io/badge/license-AGPL-blue.svg)](http://www.gnu.org/licenses/agpl-3.0)


## 🛠 Skills
Javascript, HTML, CSS...

OPEN-AI



To use the AI Code Explainer extension, you'll need your own OpenAI API key. Here's how to get one and integrate it into the extension:
✅ Step 1: Create/Open an OpenAI Account

    Visit https://platform.openai.com/

    Sign up or log in with your OpenAI account

🔐 Step 2: Generate an API Key

    Go to your API Keys page

    Click "Create new secret key"

    Copy the key immediately — you won’t be able to see it again

    ⚠️ Important: Keep your key private. Do not share or expose it publicly.

🧩 Step 3: Add the Key to the Extension

    After installing the extension in Chrome, click the extension icon (or right-click it).

    Select "Options" or "Settings".

    You’ll see a field to enter your OpenAI API key.

    Paste the key and click Save.

The key is stored securely using chrome.storage.local, and never exposed in the code or uploaded to the cloud.
🚫 Avoid Committing Your Key

If you're editing the extension code:

    Never hardcode your API key in the files (like popup.js)

    Use secure methods like chrome.storage to retrieve it

    Make sure .gitignore excludes any local .env or config files
