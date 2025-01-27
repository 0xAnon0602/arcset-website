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
export default function AssociatedFacultyRenewables() {
    const facultyData = [
        {
            name: "Ranjit Shankarrao Patil",
            position:"Associate Professor",
            department: "Mechanical Engineering Department",
            college: "BITS Pilani, K K Birla Goa Campus",
            imageUrl: "https://www.bits-pilani.ac.in/wp-content/uploads/G0482-Ranjit-Patil.jpg",
            link: "https://www.bits-pilani.ac.in/goa/ranjit-shankarrao-patil/",
            otherTitle:"Convener"

        },
        {
            name: "Morapakala Srinivas",
            position:"Professor",
            department: "Mechanical Engineering Department",
            college: "BITS Pilani, Hyderabad Campus",
            imageUrl: "https://www.bits-pilani.ac.in/wp-content/uploads/m-srinivas.jpg",
            link: "https://www.bits-pilani.ac.in/hyderabad/morapakala-srinivas/",
            otherTitle:"Co-Convener"
        },
        {
            name: "Somak Chatterjee",
            position:"Assistant Professor",
            department: "Chemical Engineering Department",
            college: "BITS Pilani, Pilani Campus",
            imageUrl: "https://www.bits-pilani.ac.in/wp-content/uploads/12890885_972888792759956_6029432168801616954_o.jpg",
            link: "https://www.bits-pilani.ac.in/pilani/somak-chatterjee/",
            otherTitle:"Co-Convener"
        },
        {
            "name":"Devendra G Patil",
            "position":"Assistant Professor",
            "department":"Mechanical Engineering Department",
            "college":"BITS Pilani, K K Birla Goa Campus",
            "imageUrl":"https://www.bits-pilani.ac.in/wp-content/uploads/Personal-Profile.jpg",
            "link":"https://www.bits-pilani.ac.in/goa/devendra-gokul-patil/"
        },
        {
            "name":"Paramita Haldar",
            "position":"Assistant Professor",
            "department":"Chemical Engineering Department",
            "college":"BITS Pilani, K K Birla Goa Campus",
            "imageUrl":"https://www.bits-pilani.ac.in/wp-content/uploads/G0742-Paramita-Haldar.jpg",
            "link":"https://www.bits-pilani.ac.in/goa/paramita-haldar/"
        },
        {
            name: "Pritanshu Ranjan",
            position:"Assistant Professor",
            department: "Mechanical Engineering Department",
            college: "BITS Pilani, K K Birla Goa Campus",
            imageUrl: "https://www.bits-pilani.ac.in/wp-content/uploads/G0708-Pritanshu-Ranjan.jpg",
            link: "https://www.bits-pilani.ac.in/goa/pritanshu-ranjan/"
        },
        {
            "name":"Puneet Siwach",
            "position":"Assistant Professor",
            "department":"Chemical Engineering Department",
            "college":"BITS Pilani, K K Birla Goa Campus",
            "imageUrl":"https://www.bits-pilani.ac.in/wp-content/uploads/My-Pic-for-Website-2.jpeg",
            "link":"https://www.bits-pilani.ac.in/goa/puneet-siwach/"
        },
        {
            "name":"Siddhartha Tripathi",
            "position":"Assistant Professor",
            "department":"Mechanical Engineering Department",
            "college":"BITS Pilani, K K Birla Goa Campus",
            "imageUrl":"https://www.bits-pilani.ac.in/wp-content/uploads/siddhu.jpg",
            "link":"https://www.bits-pilani.ac.in/goa/siddhartha-tripathi/"
        },
        {
            "name":"Subhadeep Banerjee",
            "position":"Associate Professor",
            "department":"Department of Chemistry",
            "college":"BITS Pilani, K K Birla Goa Campus",
            "imageUrl":"https://www.bits-pilani.ac.in/wp-content/uploads/me-1.jpg",
            "link":"https://www.bits-pilani.ac.in/goa/subhadeep-banerjee/"
        },
        {
            "name":"Sudarshan Swain",
            "position":"Assistant Professor",
            "department":"Electrical and Electronics Department",
            "college":"BITS Pilani, K K Birla Goa Campus",
            "imageUrl":"https://www.bits-pilani.ac.in/wp-content/uploads/G0865-Sudarshan-Swain.jpg",
            "link":"https://www.bits-pilani.ac.in/goa/sudarshan-swain/"
        },
        {
            "name":"Swastibrata Bhattacharyya",
            "position":"Assistant Professor",
            "department":"Department of Physics",
            "college":"BITS Pilani, K K Birla Goa Campus",
            "imageUrl":"https://www.bits-pilani.ac.in/wp-content/uploads/swasti.jpg",
            "link":"https://www.bits-pilani.ac.in/goa/swastibrata-bhattacharyya/"
        }
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
                        otherTitle={faculty.otherTitle}
                    />
                ))}
            </div>

        </div>
    );
}
