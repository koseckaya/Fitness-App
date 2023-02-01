import { Outlet  } from "react-router-dom";
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
    </>
  );
}