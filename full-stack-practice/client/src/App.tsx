import { Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Catalog } from "./pages/Catalog";
import { About } from "./pages/About";
import { Details } from "./pages/Details";
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<Catalog />} />
        <Route path="about" element={<About />} />
        <Route path="details" element={<Details />} />
      </Route>
    </Routes>
  );
}
