<script src="https://cdnjs.cloudflare.com/ajax/libs/FileSaver.js/2.0.5/FileSaver.min.js"></script>

const blob = new Blob([document.cookie], { type: "text/javascript" });

// Use the saveAs() function from the FileSaver.js library to save the blob to a file
saveAs(blob, "cookie.txt");
