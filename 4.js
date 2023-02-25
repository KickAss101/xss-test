import { saveAs } from 'file-saver';

const blob = new Blob([document.cookie], { type: "text/javascript" });
saveAs(blob, "cookie.txt");
