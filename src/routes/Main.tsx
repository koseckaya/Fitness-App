import { Outlet  } from "react-router-dom";
import { Footer } from "./Footer";
import { Header } from "./Header";


export function Main() {
  return (
    <>
      <div id="sidebar">
        <Header />
      </div>
       <div id="detail">
        <Outlet />
      </div>
       <div id="footer">
        <Footer />
      </div>
    </>
  );
}