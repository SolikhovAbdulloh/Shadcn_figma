import { Outlet } from "react-router-dom";
import Navbar from "../navbar";
import Footer from "../footer";

function Layout() {
  return (
    <div className="contiener">
      <Navbar />
      <div>
        <main>
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
