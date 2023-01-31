import { Outlet, Link  } from "react-router-dom";


export function Main() {
  return (
    <>
      <div id="sidebar">
        <h1>React Router Contacts</h1>
        <div>
        </div>
        <nav>
          <ul>
            <li>
                 <Link to={`/`}>Home</Link>
            </li>
            <li>
                 <Link to={`trainings`}>Trainings</Link>
            </li>
          </ul>
        </nav>
      </div>
       <div id="detail">
        <Outlet />
      </div>
    </>
  );
}