import { Link } from "react-router-dom";
import { FaHome, FaRegChartBar, FaUserFriends } from 'react-icons/fa'

const SideBar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li>
          <FaHome />
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <FaRegChartBar />
          <Link to="/sales">Ventas</Link>
        </li>
        <li>
          <FaUserFriends />
          <Link to="/clients">Clientes</Link>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
