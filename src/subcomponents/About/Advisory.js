
function Advisory() {


    const advisoryDescription = `Jyeshtharaj Bhalchandra Joshi, born on May 28, 1949, in Masur, Maharashtra, India, is a distinguished chemical engineer and nuclear scientist renowned for his pioneering work in multiphase reactor design. He earned his B.E., M.E., and Ph.D. in chemical engineering from the University Department of Chemical Technology (UDCT), Mumbai. Prof. Joshi has published over 630 research papers and guided 100 Ph.D. and 60 master's theses. His contributions have been recognized with numerous awards, including the Shanti Swarup Bhatnagar Prize (1991) and the Padma Bhushan (2014). He is a fellow of several prestigious academies, such as the Indian National Science Academy and The World Academy of Sciences.  `


    function AssociatedFaculty({ name, department, college, imageUrl, link }) {
        return (
            <div className="faculty-card">
                <a href={link} style={{textDecoration: "none"}}> 
                <img src={imageUrl} alt={`${name}'s photo`} />
                <h2>{name}</h2>
                <p>{department}</p>
                <p>{college}</p>
                </a>
            </div>
        );
    }
    

    const facultyData = {
        name: "JB Joshi",
        department: "Padma Bhushan Awardee",
        college: "Former Director - ICT",
        imageUrl: "https://ssbprize.gov.in/WriteReadData/AwardeePhotos/Dr%20J%20B%20Joshi%20(1991).JPG",
        link: "https://en.wikipedia.org/wiki/Jyeshtharaj_Joshi"
    }


    return (
        <div>

        <div>
            <p className="componentTitle">Advisory Committee</p>
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

export default Advisory;