import { Link } from "react-router-dom";
export default function Brand(){
    return (   <ul>
        <li>
          <Link to="/index" className="brand">
            <img src="./images/logo-bg.png" alt="Learn with Sumit Logo" />
            <h3>Learn with Sumit</h3>
          </Link>
        </li>
      </ul>);
 }