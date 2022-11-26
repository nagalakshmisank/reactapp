import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ol>
          <li>
            <Link to="/get">Get</Link>
          </li>
          <li>
            <Link to="/post">Post</Link>
          </li>
          <li>
            <Link to="/put">Put</Link>
          </li>

        </ol>
      </nav>
      <hr />

      <Outlet />
    </>
  )
};

export default Layout;