import { useOutletContext } from "react-router-dom";
import FactBoxContainer from "../Components/FactBoxContainer/FactBoxContainer";

const Structure = () => {
  const {planet: [planet, setPlanet], stats: [stats]} = useOutletContext();

  
  
  return (
    <div>
      <FactBoxContainer stats={stats} />
    </div>
  )
}

export default Structure
