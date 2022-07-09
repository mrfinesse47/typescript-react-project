import { createRoot } from "react-dom/client";

import { Parent } from "./props/Parent";

const App = () => {
  return (
    <div>
      <h1>hi there</h1>
      <Parent />
    </div>
  );
};
const container = document.getElementById("root");

// @ts-ignore
const root = createRoot(container);

// Initial render
root.render(<App />);
