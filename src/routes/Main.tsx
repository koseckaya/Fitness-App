import { Outlet  } from "react-router-dom";
import { Header } from "./Header";


export function Main() {
  return (
    <>
      <div id="sidebar">
        <h1>React Router Contacts</h1>
        <Header />
      
      </div>
       <div id="detail">
        <Outlet />
      </div>
    </>
  );
}