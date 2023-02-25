// First, include the FileSaver.js library in your HTML file

// Create a blob from the cookie data
const blob = new Blob([document.cookie], { type: "text/javascript" });

// Use the saveAs() function from the FileSaver.js library to save the blob to a file
saveAs(blob, "cookie.txt");
