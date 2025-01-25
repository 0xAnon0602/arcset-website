function AssociatedFaculty({ name, position, department, college, imageUrl, link, otherTitle }) {
    return (
        <div className="faculty-card">
            <a href={link} target="_blank" rel="noopener noreferrer" style={{textDecoration: "none"}}> 
            <img src={imageUrl} alt={`${name}'s photo`} />
            <h2>{name}</h2>
            <p style={{fontWeight: 800}}>{otherTitle}</p>
            <p>{position}</p>
            <p>{department}</p>
            <p>{college}</p>
            </a>
        </div>
    );
}

export default function Coordinators() {
    const facultyData = [
        {
            "name":"Ranjit Shankarrao Patil",
            "position":"Associate Professor",
            "department":"Mechanical Engineering Department",
            "college":"BITS Pilani, K K Birla Goa Campus",
            "imageUrl":"https://www.bits-pilani.ac.in/wp-content/uploads/G0482-Ranjit-Patil.jpg",
            "link":"https://www.bits-pilani.ac.in/goa/ranjit-shankarrao-patil/"
        },
        {
            "name":"Srikanta Dinda",
            "position":"Professor",
            "department":"Chemical Engineering Department",
            "college":"BITS Pilani, Hyderabad Campus",
            "imageUrl":"https://www.bits-pilani.ac.in/wp-content/uploads/srikanta-dinda.jpg",
            "link":"https://www.bits-pilani.ac.in/hyderabad/prof-srikanta-dinda/"
        },
        {
            "name":"Pratik N Sheth",
            "position":"Professor",
            "department":"Chemical Engineering Department",
            "college":"BITS Pilani, Pilani Campus",
            "imageUrl":"https://www.bits-pilani.ac.in/wp-content/uploads/Passport-size-pic-2-Pratik-N.-Sheth.jpg",
            "link":"https://www.bits-pilani.ac.in/pilani/pratik/"
        },
    ];

    return (

        <div>

            <p className="componentTitle"> Campus Coordinators</p>
            <div className="faculty-cards-container">
                {facultyData.map((faculty, index) => (
                    <AssociatedFaculty
                        key={index}
                        name={faculty.name}
                        position={faculty.position}
                        department={faculty.department}
                        college={faculty.college}
                        imageUrl={faculty.imageUrl}
                        link={faculty.link}
                        otherTitle={faculty.otherTitle}
                    />
                ))}
            </div>

        </div>
    );
}
