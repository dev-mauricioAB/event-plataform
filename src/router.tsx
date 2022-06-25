import { Route, Routes } from "react-router-dom";
import { Event } from "./pages/Event";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<h1>Home</h1>}></Route>
      <Route path="/events" element={<Event />} />
    </Routes>
  );
}
