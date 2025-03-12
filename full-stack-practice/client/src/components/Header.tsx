import { Link, Outlet } from "react-router-dom";

export function Header() {
  return (
    <div>
      <header className="flex bg-[#2d313a] py-3">
        <Link className="text-white pl-3" to="about">
          About
        </Link>
        <Link className="text-white pl-3" to="/">
          Catalog
        </Link>
      </header>
      <Outlet />
    </div>
  );
}
