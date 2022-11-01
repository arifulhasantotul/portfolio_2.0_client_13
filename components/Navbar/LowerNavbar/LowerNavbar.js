import DarkToggleButton from "@/components/DarkToggleButton/DarkToggleButton";
import LowerNavbar from "@/components/Navbar/LowerNavbar/LowerNavbar";
import UpperNavbar from "@/components/Navbar/UpperNavbar/UpperNavbar";
import Sidebar from "@/components/Sidebar/Sidebar";
import ThemeSettings from "@/components/ThemeSettings/ThemeSettings";
import { useStateContext } from "@/context/ContextProvider";
import { useRouter } from "next/router";

const Layout = ({ children }) => {
  const { darkTheme, screenSize } = useStateContext();
  const { pathname } = useRouter();

  return (
    <div id={darkTheme ? "dark" : "light"}>
      {screenSize >= 900 && (
        <nav>
          <UpperNavbar />
          <div className="empty_div"></div>
        </nav>
      )}
      <DarkToggleButton />
      <ThemeSettings />
      {pathname.includes("/dashboard") && <Sidebar />}

      <main>{children}</main>

      <footer>
        <div className="empty_div"></div>
        {/* {screenSize < 900 && <div className="empty_div"></div>} */}
        {screenSize < 900 && <LowerNavbar />}
      </footer>
    </div>
  );
};

export default Layout;
