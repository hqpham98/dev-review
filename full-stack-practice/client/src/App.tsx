import { Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Catalog } from "./pages/Catalog";
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<Catalog />} />
        <Route path="about" />
      </Route>
    </Routes>
  );
}
