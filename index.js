import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";
import validUrl from "valid-url";

// Prompt user for input
inquirer
  .prompt([
    {
      message: "Type in your URL: ",
      name: "URL",
    },
  ])
  .then((answers) => {
    const url = answers.URL.trim();

    // Validate the URL
    if (!validUrl.isUri(url)) {
      console.log("❌ Invalid URL. Please enter a valid one (e.g., https://example.com).");
      return;
    }

    // Generate QR code and save to file
    const qr_svg = qr.image(url, { type: "png" });
    qr_svg.pipe(fs.createWriteStream("qr_img.png"));
    console.log("✅ QR code saved as qr_img.png");

    // Save URL to a text file
    fs.writeFile("URL.txt", url, (err) => {
      if (err) throw err;
      console.log("✅ URL saved to URL.txt");
    });
  })
  .catch((error) => {
    if (error.isTtyError) {
      console.error("❗ Prompt couldn't be rendered in the current environment.");
    } else {
      console.error("❗ An error occurred:", error);
    }
  });
