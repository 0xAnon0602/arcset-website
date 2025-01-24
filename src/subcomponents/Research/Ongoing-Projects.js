function OngoingProjects() {

    function AssociatedFaculty({ name, imageUrl, link }) {
        return (
            <div className="faculty-card">
                <a href={link} target="_blank" rel="noopener noreferrer" style={{textDecoration: "none"}}> 
                <img src={imageUrl} alt={`${name}'s photo`} />
                <h2>{name}</h2>
                </a>
            </div>
        );
    }

    const facultyData = [
        {
            name: "Srinivas Krishnaswamy ",
            imageUrl: "https://i.ibb.co/GFGYqTH/unnamed.jpg",
            link: "https://www.bits-pilani.ac.in/goa/srinivas-krishnaswamy/",
        },
        {
            name: "Anirban Roy",
            imageUrl: "https://www.bits-pilani.ac.in/wp-content/uploads/Anirban-Roy.jpg",
            link: "https://www.bits-pilani.ac.in/goa/anirban-roy/",
        },
        {
            name: "Anirban Roy",
            imageUrl: "https://www.bits-pilani.ac.in/wp-content/uploads/Anirban-Roy.jpg",
            link: "https://www.bits-pilani.ac.in/goa/anirban-roy/",
        }
    ]

    const projectData = [
        {
            title:"Sustainable High Purity Hydrogen production using Chemical Looping combustion in a Packed Bed reactor: An energy efficient and environmental friendly alternative to convention Steam Reforming",
            fundingAgency:"GAIL (India) Limited",
            funding:"Rs 3,08,33,046/",
        },
        {
            title:"Development of Advanced Next Generation Energy Technologies",
            fundingAgency:"Next-ChemX, Nevada, USA",
            funding:"Rs 2,83,00,000/",
        },
        {
            title:"Developing Advanced Membrane System Design Software",
            fundingAgency:"Ion Exchange India Pvt Ltd",
            funding:" Rs 7,20,000/",
        }
    ]

    return (
  
        <div>

            <p className="componentTitle"> Relevant Ongoing Projects</p>
            
            {facultyData.map((logo, index) => (
                <div key={index} className="industryPartner">
                    <div className="logoContainer">
                        <div className="faculty-cards-container advisoryImage">
                            <AssociatedFaculty name={facultyData[index].name} imageUrl={facultyData[index].imageUrl} link={facultyData[index].link} />
                        </div>
                    </div>
                    <div className="industryDescription">
                        <p>Title : {projectData[index].title}</p>
                        <p>Funding Agency : {projectData[index].fundingAgency}</p>
                        <p>Funding : {projectData[index].funding}</p>
                    </div>

                </div>
            ))}

        </div>
        
    );
}
  
  export default OngoingProjects;