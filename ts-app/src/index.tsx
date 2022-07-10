import { createRoot } from "react-dom/client";

// import { Parent } from "./props/Parent";
// import GuestList from "./state/GuestList";
// import UserSearch from "./state/UserSearch";
import EventComponent from "./events/EventComponent";

const App = () => {
  return (
    <div>
      {/* <UserSearch />
      <GuestList />
      <h1>hi there</h1>
      <Parent /> */}
      <EventComponent />
    </div>
  );
};
const container = document.getElementById("root");

// @ts-ignore
const root = createRoot(container);

// Initial render
root.render(<App />);
