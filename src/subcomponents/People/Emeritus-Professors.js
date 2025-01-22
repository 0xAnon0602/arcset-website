
function EmeritusProfessors() {


    const advisoryDescription = `Dr. Ramakrishna Ramanath Sonde is an esteemed Indian engineer and academician with a distinguished career spanning several decades. He began his professional journey at the Bhabha Atomic Research Center (BARC), where he was awarded the Dr. Homi Bhabha Gold Medal for his outstanding contributions to nuclear energy.  After 23 years at BARC, Dr. Sonde joined the National Thermal Power Corporation (NTPC) as Executive Director, establishing the Energy Technologies center, now known as NETRA.  He later served as Executive Vice President and Chief Technology Officer at Thermax Limited, focusing on innovation in energy and environmental technologies.  Currently, Dr. Sonde is a Guest Professor at the Indian Institute of Technology Gandhinagar and an Emeritus Professor at the Birla Institute of Technology and Science, Pilani.  His research interests include clean coal technologies, hydrogen energy, and carbon capture.  `


    function AssociatedFaculty({ name, department, college, imageUrl, link }) {
        return (
            <div className="faculty-card">
                <a href={link} target="_blank" style={{textDecoration: "none"}}> 
                <img src={imageUrl} alt={`${name}'s photo`} />
                <h2>{name}</h2>
                <p>{department}</p>
                <p>{college}</p>
                </a>
            </div>
        );
    }
    

    const facultyData = {
        name: "Ramakrishna Ramanath Sonde",
        department: "Former Executive Director - NTPC",
        college: "Senior Professor Emeritus - BITS PILANI",
        imageUrl: "https://www.bits-pilani.ac.in/wp-content/uploads/Ramakrishna-Ramanath-Sonde.jpg",
        link: "https://www.bits-pilani.ac.in/goa/ramakrishna-ramanath-sonde/"
    }


    return (
        <div>

        <div>
            <p className="componentTitle">Emeritus Professors</p>
                <div className="industryPartner">
                    <div className="logoContainer">
                        <div className="faculty-cards-container advisoryImage">
                            <AssociatedFaculty name={facultyData.name} position={facultyData.position} department={facultyData.department} college={facultyData.college} imageUrl={facultyData.imageUrl} link={facultyData.link} />
                        </div>
                    </div>
                    <p className="industryDescription">{advisoryDescription}</p>
                </div>
        </div>

        </div>
    );
}

export default EmeritusProfessors;