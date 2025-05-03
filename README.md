## 📜 Shayari API

This simple API serves random Shayari (poetry quotes) in multiple languages by reading from the languages folder. It auto-detects available languages and delivers content based on user preference.

## 🚀 Features

- 🌐 Automatically detects supported languages from the /languages folder
- ✨ Serves random Shayari from selected language
- 🔁 Returns a new Shayari each time
- 🪶 Clean and minimal JSON response
- ⚡ Fast and lightweight Node.js implementation

## 📦 Requirements

- Node.js 14+
- Vercel CLI (if deploying locally to Vercel)

## 📡 Usage

**1. Endpoint**

Send a GET request to:

GET /language/english/random

**2. Query Parameters**

| Parameter | Required | Description                             |
|-----------|----------|-----------------------------------------|
| lang      | ✅       | Language to get shayari from (e.g., hindi, english) |

✅ Example Request

```bash
curl "http://localhost:3000/language/english/random"
```

✅ Example Response

```json
{
  "shayari": "तू समझता क्यों नहीं, तुझसे जुदा नहीं हो सकते हम।",
  "language": "hindi"
}
```

❌ Error Responses

- Missing query:

```json
{
  "error": "Please provide ?lang=language_name"
}
```

- Language not supported:

```json
{
  "error": "Language 'french' not found. Available: hindi, urdu, english"
}
```

- Server error:

```json
{
  "error": "Something went wrong"
}
```

## 🔍 Code Explanation

- Dynamically loads all JSON files inside the /languages directory
- Each language file is an array of shayaris
- Randomly selects one entry from the requested language file
- Gracefully handles missing or unsupported languages
- Modular and ready to extend

## ⚠️ Error Handling

- 📭 400 Bad Request: If lang query is not provided
- ❓ 404 Not Found: If requested language file doesn't exist
- 💥 500 Internal Server Error: For file read or JSON parse issues


## 🚀 Vercel Deployment

1. Push the repo to GitHub
2. Connect it to Vercel
3. Done! You’ll have a public URL like: https://your.vercel.app/language/english/random

## 🛠️ Setup

Watching Following Video You Can Host This Api & Gain Some Knowledge 👇

[![Watch the video](https://img.youtube.com/vi/n5yxR1aOmlw/hqdefault.jpg)](https://youtu.be/n5yxR1aOmlw)

## 📄 License

This project is licensed under the License - see the [LICENSE](https://github.com/NotFlexCoder/shayari-api/blob/main/LICENSE) file for details.
