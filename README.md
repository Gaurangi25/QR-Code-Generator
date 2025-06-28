# 🔳 QR Code Generator CLI

A simple Node.js CLI tool that lets you enter a URL and automatically:

- Generates a QR code as a PNG image
- Saves the URL to a text file for recordkeeping

---

## 📦 Features

- Prompt-based user input using `inquirer`
- URL validation with `valid-url`
- QR code generation using `qr-image`
- File handling with Node's built-in `fs` module

---

## 🚀 Getting Started

To run the project locally:

```bash
git clone https://github.com/Gaurangi25/qr-code-generator.git
cd qr-code-generator
npm install
node index.js

Then enter the URL when prompted.

````

🖼 Output
✅ qr_img.png: QR code image of the entered URL
✅ URL.txt: A text file storing the same URL

🛠 Dependencies
- inquirer
- qr-image
- valid-url

