function AssociatedFaculty({ name, position, department, college, imageUrl, link }) {
    return (
        <div className="faculty-card">
            <a href={link} target="_blank" style={{textDecoration: "none"}}> 
            <img src={imageUrl} alt={`${name}'s photo`} />
            <h2>{name}</h2>
            <p>{position}</p>
            <p>{department}</p>
            <p>{college}</p>
            </a>
        </div>
    );
}

export default function AssociatedFacultyRenewables() {
    const facultyData = [
        {
            name: "Pritanshu Ranjan",
            position:"Assistant Professor",
            department: "Mechanical Engineering Department",
            college: "BITS Pilani, Goa Campus",
            imageUrl: "https://www.bits-pilani.ac.in/wp-content/uploads/G0708-Pritanshu-Ranjan.jpg",
            link: "https://www.bits-pilani.ac.in/goa/pritanshu-ranjan/"
        },
        {
            name: "Morapakala Srinivas",
            position:"Professor",
            department: "Mechanical Engineering Department",
            college: "BITS Pilani, Hyderabad Campus",
            imageUrl: "https://www.bits-pilani.ac.in/wp-content/uploads/m-srinivas.jpg",
            link: "https://www.bits-pilani.ac.in/hyderabad/morapakala-srinivas/"
        },
        {
            name: "Swastibrata Bhattacharyya",
            position:"Assistant Professor",
            department: "Department of Physics",
            college: "BITS Pilani, Goa Campus",
            imageUrl: "https://www.bits-pilani.ac.in/wp-content/uploads/swasti.jpg",
            link:"https://www.bits-pilani.ac.in/goa/swastibrata-bhattacharyya/"
        },
        {
            name: "Sudarshan Swain",
            position:"Assistant Professor",
            department: "Electrical and Electronics Department",
            college: "BITS Pilani, Goa Campus",
            imageUrl: "https://www.bits-pilani.ac.in/wp-content/uploads/G0865-Sudarshan-Swain.jpg",
            link: "https://www.bits-pilani.ac.in/goa/sudarshan-swain/"
        },
        {
            name: "Somak Chatterjee",
            position:"Assistant Professor",
            department: "Chemical Engineering Department",
            college: "BITS Pilani, Pilani Campus",
            imageUrl: "https://www.bits-pilani.ac.in/wp-content/uploads/12890885_972888792759956_6029432168801616954_o.jpg",
            link: "https://www.bits-pilani.ac.in/pilani/somak-chatterjee/"
        },
        {
            name: "Puneet Siwach",
            position:"Assistant Professor",
            department: "Chemical Engineering Department",
            college: "BITS Pilani, Goa Campus",
            imageUrl: "https://www.bits-pilani.ac.in/wp-content/uploads/My-Pic-for-Website-2.jpeg",
            link: "https://www.bits-pilani.ac.in/goa/puneet-siwach/"
        },
        {
            name: "Subhadeep Banerjee",
            position:"Associate Professor",
            department: "Department of Chemistry",
            college: "BITS Pilani, Goa Campus",
            imageUrl: "https://www.bits-pilani.ac.in/wp-content/uploads/me-1.jpg",
            link: "https://www.bits-pilani.ac.in/goa/subhadeep-banerjee/"
        },
        {
            name: "P Bhavana",
            position:"Professor",
            department: "Department of Chemistry",
            college: "BITS Pilani, Goa Campus",
            imageUrl: "https://www.bits-pilani.ac.in/wp-content/uploads/Bhavana-1.jpg",
            link: "https://www.bits-pilani.ac.in/goa/p-bhavana"
        },
        {
            name: "Paramita Haldar",
            position:"Assistant Professor",
            department: "Chemical Engineering Department",
            college: "BITS Pilani, Goa Campus",
            imageUrl: "https://www.bits-pilani.ac.in/wp-content/uploads/G0742-Paramita-Haldar.jpg",
            link: "https://www.bits-pilani.ac.in/goa/paramita-haldar/"
        },
        {
            name: "Siddhartha Tripathi",
            position:"Assistant Professor",
            department: "Mechanical Engineering Department",
            college: "BITS Pilani, Goa Campus",
            imageUrl: "https://www.bits-pilani.ac.in/wp-content/uploads/siddhu.jpg",
            link: "https://www.bits-pilani.ac.in/goa/siddhartha-tripathi/"
        },
        {
            name: "Devndra G Patil",
            position:"Assistant Professor",
            department: "Mechanical Engineering Department",
            college: "BITS Pilani, Goa Campus",
            imageUrl: "https://www.bits-pilani.ac.in/wp-content/uploads/Personal-Profile.jpg",
            link: "https://www.bits-pilani.ac.in/goa/devendra-gokul-patil/"
        },
    ];

    return (

        <div>

            <p className="componentTitle"> Renewables Associated Faculty</p>
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
                    />
                ))}
            </div>

        </div>
    );
}
