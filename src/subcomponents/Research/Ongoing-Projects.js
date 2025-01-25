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
            name: "ABHISHEK SHARMA",
            imageUrl: "https://media.licdn.com/dms/image/v2/C4D03AQGZITZpgbqoiQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1629897290473?e=1741824000&v=beta&t=equql9HN_RbuOUIsbe2F-wYGyBmOmnmFUyauQiLM8iQ",
            link: "https://www.linkedin.com/in/abhishek-sharma-11aa7b12/",
        },
        {
            name:"Srinivas Appari",
            imageUrl:"https://www.bits-pilani.ac.in/wp-content/uploads/srinivas.jpg",
            link:"https://www.bits-pilani.ac.in/hyderabad/srinivas-appari/"
        },
        {
            name: "ABHISHEK SHARMA",
            imageUrl: "https://media.licdn.com/dms/image/v2/C4D03AQGZITZpgbqoiQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1629897290473?e=1741824000&v=beta&t=equql9HN_RbuOUIsbe2F-wYGyBmOmnmFUyauQiLM8iQ",
            link: "https://www.linkedin.com/in/abhishek-sharma-11aa7b12/",
        },
        {
            name: "Anirban Roy",
            imageUrl: "https://www.bits-pilani.ac.in/wp-content/uploads/Anirban-Roy.jpg",
            link: "https://www.bits-pilani.ac.in/goa/anirban-roy/",
        },
    ]

    const projectData = [
        {
            title:"Sustainable High Purity Hydrogen production using Chemical Looping combustion in a Packed Bed reactor: An energy efficient and environmental friendly alternative to convention Steam Reforming",
            fundingAgency:"GAIL (India) Limited",
            funding:"Rs 3,08,33,046",
        },
        {
            title:"Development of Advanced Next Generation Energy Technologies",
            fundingAgency:"Next-ChemX, Nevada, USA",
            funding:"Rs 2,83,00,000",
        },
        {
            title:"Jodhpur City Knowledge and Innovation Foundation- Hydrogen Valley Innovation Cluster",
            fundingAgency:"DST",
            funding:"Rs 2,00,00,000",
        },
        {
            title:"Proof - of - Concept (PoC) Design of CO2 Hydrogenation to Methanol",
            fundingAgency:"Siemens",
            funding:"Rs 24,78,000",
        },
        {
            title:"H2 production from agricultural residue using a thermo-chemical route",
            fundingAgency:"Ecosense ",
            funding:"Rs 22,00,000",
        },
        {
            title:"Developing Advanced Membrane System Design Software",
            fundingAgency:"Ion Exchange India Pvt Ltd",
            funding:" Rs 7,20,000",
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
                        <p> <span style={{fontWeight:800}}>Project Title :</span> {projectData[index].title}</p>
                        <p><span style={{fontWeight:800}}>Funding Agency : </span>{projectData[index].fundingAgency}</p>
                        <p><span style={{fontWeight:800}}>Funding : </span> {projectData[index].funding}</p>
                    </div>

                </div>
            ))}

        </div>
        
    );
}
  
  export default OngoingProjects;