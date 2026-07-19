import { Outlet } from "react-router-dom";
import Footer from "../components/layout/Footer/Footer";
import Navbar from "../components/layout/Navbar/Navbar";
import { useTheme } from "../context/ThemeContext";

function Layout() {
  const { theme } = useTheme();

  return (
    <div
      data-theme={theme}
      style={{ backgroundColor: "var(--background)", color: "var(--text)", display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <Navbar />
      <main style={{ flex: 1 }}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
