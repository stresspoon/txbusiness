import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Apply global styles for Noto Sans KR font
document.documentElement.style.fontFamily = "'Noto Sans KR', sans-serif";

createRoot(document.getElementById("root")!).render(<App />);
