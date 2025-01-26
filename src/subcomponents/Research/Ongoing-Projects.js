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
            imageUrl: "https://jaipur.manipal.edu/admin/photo/3/faculty/19/93.jpg",
            link: "https://www.linkedin.com/in/abhishek-sharma-11aa7b12/",
        },
        {
            name:"Srinivas Appari",
            imageUrl:"https://www.bits-pilani.ac.in/wp-content/uploads/srinivas.jpg",
            link:"https://www.bits-pilani.ac.in/hyderabad/srinivas-appari/"
        },
        {
            name: "Pradeep Kumar Sow",
            imageUrl: "https://www.bits-pilani.ac.in/wp-content/uploads/64485401_10219705515813284_2402715210595958784_n.jpg",
            link: "https://www.bits-pilani.ac.in/goa/pradeep-kumar-sow/",
        },
 
    ]

    const projectData = [
        [
            {
                title:"Sustainable High Purity Hydrogen production using Chemical Looping combustion in a Packed Bed reactor: An energy efficient and environmental friendly alternative to convention Steam Reforming",
                fundingAgency:"GAIL (India) Limited",
                funding:"Rs 3,08,33,046",
            }
        ],
        [
            {
                title:"Development of Advanced Next Generation Energy Technologies",
                fundingAgency:"Next-ChemX, Nevada, USA",
                funding:"Rs 2,83,00,000",
            },
            {
                title:"Developing Advanced Membrane System Design Software",
                fundingAgency:"Ion Exchange India Pvt Ltd",
                funding:" Rs 7,20,000",
            }
        ],
        [
            {
                title:"Jodhpur City Knowledge and Innovation Foundation- Hydrogen Valley Innovation Cluster",
                fundingAgency:"DST",
                funding:"Rs 2,00,00,000",
            },
            {
                title:"H2 production from agricultural residue using a thermo-chemical route",
                fundingAgency:"Ecosense ",
                funding:"Rs 22,00,000",
            }
        ],
        [
            {
                title:"Proof - of - Concept (PoC) Design of CO2 Hydrogenation to Methanol",
                fundingAgency:"Siemens",
                funding:"Rs 24,78,000",
            }
        ],
        [
            {
                title:"Developing Advanced Membrane System Design Software",
                fundingAgency:"Ion Exchange India Pvt Ltd",
                funding:" Rs 20,88,265",
            }
        ]
   
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
                        {projectData[index].map((project, index) => (  
                            <>
                            <div className="boxCustomization boxCustomization2" key={index}>
                                <p> <span style={{fontWeight:800}}>Project Title :</span> {project.title}</p>
                                <p><span style={{fontWeight:800}}>Funding Agency : </span>{project.fundingAgency}</p>
                                <p><span style={{fontWeight:800}}>Funding : </span> {project.funding}</p>
                            </div>
                            <br/>
                            </>
                        ))}
                    </div>

                </div>
            ))}

        </div>
        
    );
}
  
  export default OngoingProjects;