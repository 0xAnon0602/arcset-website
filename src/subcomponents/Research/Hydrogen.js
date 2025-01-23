import { NavLink } from "react-router-dom";

function Hydrogen() {
    return (
  
        <div>

            <p className="componentTitle"> Hydrogen Production, Storage & Utilization</p>
            <p className="componentText bottomMargin">The Hydrogen Energy vertical will focus on advancing sustainable solutions across the entire hydrogen value chain, including hydrogen production, utilization, storage, and transportation. As a versatile and clean energy carrier, hydrogen has significant potential to decarbonize sectors where direct electrification or other low-carbon solutions are challenging.</p>
            <p className="componentText bottomMargin">At ARCSET, the Hydrogen Energy vertical will drive research and innovation across multiple Technology Readiness Levels (TRLs) to develop scalable, impactful solutions. Key areas of focus include green hydrogen production through electrolysis, thermochemical cycles, photocatalytic processes, and biological methods; efficient hydrogen utilization through fuel cells and green ammonia synthesis; and advancing safe, efficient storage and transportation systems. Aligned with government policies and the national hydrogen mission, this vertical will promote hydrogen’s critical role in achieving emissions reduction targets and enhancing energy security.</p>
            <p className="componentText bottomMargin">By collaborating with industry partners, the vertical will pilot and scale promising technologies, expediting their market readiness and real-world deployment. Targeted funding will support projects that address key challenges in hydrogen production, utilization, and infrastructure. Additionally, the vertical will engage with policymakers to help shape regulatory frameworks that foster a resilient hydrogen ecosystem, laying the groundwork for a sustainable, low-carbon energy future.</p>

            <p className="profLink">
                <NavLink to="/people/associated-faculty/hydrogen" > Associated Professors </NavLink>
            </p>
            
        </div>
        
    );
}
  
  export default Hydrogen;