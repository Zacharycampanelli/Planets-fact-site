import { Link } from "react-router-dom"
import planetsData from "../assets/data/data"

const NavBar = () => {
  return (
    <nav>
          <ul>
            {planetsData.map((planet, index) => (
              <li key={index}>
                <Link to={`/planet/${planet.name.toLowerCase()}`}>{planet.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
  )
}

export default NavBar
