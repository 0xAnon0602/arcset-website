import { NavLink } from "react-router-dom";
import { FaExternalLinkAlt } from "react-icons/fa";

function Biofuels() {
    return (
  
        <div>

            <div className="boxCustomization">

                <p className="componentTitle"> Biofuels </p>
                <p className="componentText bottomMargin"> The Centre will focus on development and scale up of advanced technologies for harnessing the potential of available biomass such as agricultural residue and forestry residue in the nation. The technological integration will be embraced as part of holistic solution for converting waste biomass into resources such as transportation fuels, green chemicals and high value carbon for utilization into batteries and supercapacitors. With that, the Centre will act as a think tank for Government  biofuel policies via providing key insights based on technical, economical and environmental comparison of advanced processes. </p>
            
                <p className="profLink">
                    <NavLink to="/people/associated-faculty/biofuels" > Associated Professors <FaExternalLinkAlt  style={{"marginLeft":"4px"}} size={15}/></NavLink>
                </p>

            </div>
            
        </div>
        
    );
}
  
  export default Biofuels;