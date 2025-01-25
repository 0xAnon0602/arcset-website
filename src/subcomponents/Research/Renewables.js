import { NavLink } from "react-router-dom";
import { FaExternalLinkAlt } from "react-icons/fa";

function Renewables() {
    return (
  
        <div>

            <div className="boxCustomization">

                <p className="componentTitle"> Renewables & Alternative Energy</p>
                <p className="componentText bottomMargin"> The Centre will focus on advanced research in Renewable Enegry (RE) like solar photovoltaic cells, solar energy, micro-grids, smart grids, wind power and grid integration. The renewable vertical will develop solutions aligning with the goals of State Government as well as National policies. Rooftop solar installations, advanced load forecasting, Renewable potential assessment, integration of RE in agriculture are few of the avenues of direct interest. RE vertical aims at developing solutions covering the entire spectrum of TRL 1-9.</p>
            
                <p className="profLink">
                    <NavLink to="/people/associated-faculty/renewables" > Associated Professors <FaExternalLinkAlt  style={{"marginLeft":"4px"}} size={15}/></NavLink>
                </p>
            
            </div>
        
        </div>
        
    );
}
  
  export default Renewables;