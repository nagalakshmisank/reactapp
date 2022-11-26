import { Outlet, Link } from "react-router-dom";
import './sidebar.css'
import './flower.jpg'

const Layoutnew = () => {
  return (
    <>  
    <div className="wrapper">
      <div className = "sidebar">
      <div className="profile">
              <img src={require('./flower.jpg')} alt="profile pic"></img>
              <h1>Nagalakshmi</h1>
              <h3>Developer</h3>
              <Link className="link" to="/aboutme">About Me</Link>

                
                <h2>List of Tasks</h2>

            </div>
  
      <nav className="navlink">
        <ul>
          <li>
            <Link className="links" to="/mycrud">CRUD</Link>
          </li>
          <li>
            <Link to="/mymuiform">Mui Form</Link>
          </li>

          <li>
            <Link to="/mycontext">Context</Link>
          </li>
          <li>
            <Link to="/datatable">DataTable</Link>
          </li>

        </ul>
      </nav>
      </div>
      </div>

      <Outlet />
    </>
  )
};

export default Layoutnew;