import { NavLink } from "react-router-dom";

function Carbon() {
    return (
  
        <div>

            <p className="componentTitle"> Carbon Capture </p>
            <p className="componentText bottomMargin"> Carbon Capture, Utilization, and Storage (CCUS) is essential for achieving significant emissions reductions in industrial sectors, after all other decarbonization technologies have been implemented. By capturing CO₂ at its source for utilization or safe storage, CCUS offers a scalable solution that supports both national and global climate goals.</p>
            <p className="componentText bottomMargin"> The CCUS vertical at ARCSET will advance innovations across various Technology Readiness Levels (TRLs) catering to a broad range of industries. Aligning with government policies and national mission goals for emissions reduction, this vertical will focus on research in developing/scaling potential CO₂ capture technologies, CO₂ utilization methods like mineralization and/or fuel conversion, and CO₂ storage, with emphasis on optimized energy management. Industry partnerships will facilitate the piloting and scaling of CCUS technologies, while funding initiatives will support key projects that drive these advancements forward. The vertical will also work closely with policymakers to promote regulatory frameworks that accelerate CCUS adoption, establishing a strong foundation for sustainable energy practices across the nation.</p>
        
            <p className="profLink">
                <NavLink to="/people/associated-faculty/carbon-capture" > Associated Professors </NavLink>
            </p>
        
        </div>
        
    );
}
  
  export default Carbon;