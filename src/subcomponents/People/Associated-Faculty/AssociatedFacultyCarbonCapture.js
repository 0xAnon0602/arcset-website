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

export default function AssociatedFacultyCarbonCapture() {
    const facultyData = [
        {
            name: "Srinivas Krishnaswamy ",
            position:"Professor",
            department: "Chemical Engineering Department",
            college: "BITS Pilani, K K Birla Goa Campus",
            imageUrl: "https://i.ibb.co/GFGYqTH/unnamed.jpg",
            link: "https://www.bits-pilani.ac.in/goa/srinivas-krishnaswamy/",
            otherTitle:"Convener"
        },
        {
            name: "Satyapaul Singh Amarthaluri",
            position:"Assistant Professor",
            department: "Chemical Engineering Department",
            college: "BITS Pilani, Hyderabad Campus",
            imageUrl: "https://www.bits-pilani.ac.in/wp-content/uploads/satyapal-singh.jpg",
            link: "https://www.bits-pilani.ac.in/hyderabad/satyapaul-singh-amarthaluri/",
            otherTitle:"Co-Convener"
        },
        {
            name: "Subhasis Pradhan",
            position:"Assistant Professor",
            department: "Civil Engineering Department",
            college: "BITS Pilani, Pilani Campus",
            imageUrl: "https://www.bits-pilani.ac.in/wp-content/uploads/subhasis-pradhan.jpg",
            link: "https://www.bits-pilani.ac.in/pilani/subhasis-pradhan/",
            otherTitle:"Co-Convener"
        },
        {
            "name":"N. N. Ghosh",
            "position":"Professor",
            "department":"Department of Chemistry",
            "college":"BITS Pilani, K K Birla Goa Campus",
            "imageUrl":"https://www.bits-pilani.ac.in/wp-content/uploads/Photo-Narendra-nath-Ghosh.jpeg",
            "link":"https://www.bits-pilani.ac.in/goa/narendra-nath-ghosh/",
            otherTitle:"Co-Convener"
        },
        {
            "name":"Anasua Guharay",
            "position":"Associate Professor",
            "department":"Civil Engineering Department",
            "college":"BITS Pilani, Hyderabad Campus",
            "imageUrl":"https://www.bits-pilani.ac.in/wp-content/uploads/anasua-guhray.jpg",
            "link":"https://www.bits-pilani.ac.in/hyderabad/anasua-guharay/"
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
            "name":"Neena Goveas",
            "position":"Professor",
            "department":"Computer Science and Information System Department",
            "college":"BITS Pilani, K K Birla Goa Campus",
            "imageUrl":"https://www.bits-pilani.ac.in/wp-content/uploads/Neena_Photo_2023_JSN_0322.jpeg",
            "link":"https://www.bits-pilani.ac.in/goa/neena-goveas/"
        },
        {
            "name":"Pratik N Sheth",
            "position":"Professor",
            "department":"Chemical Engineering Department",
            "college":"BITS Pilani, Pilani Campus",
            "imageUrl":"https://www.bits-pilani.ac.in/wp-content/uploads/Passport-size-pic-2-Pratik-N.-Sheth.jpg",
            "link":"https://www.bits-pilani.ac.in/pilani/pratik/"
        },
        {
            "name":"Raghuram Ammavajjala",
            "position":"Assistant Professor",
            "department":"Civil Engineering Department",
            "college":"BITS Pilani, Hyderabad Campus",
            "imageUrl":"https://www.bits-pilani.ac.in/wp-content/uploads/Raghuram-Ammavajjala.png",
            "link":"https://www.bits-pilani.ac.in/hyderabad/raghuram-ammavajjala/"
        },
        {
            "name":"Ranjit Shankarrao Patil",
            "position":"Associate Professor",
            "department":"Mechanical Engineering Department",
            "college":"BITS Pilani, K K Birla Goa Campus",
            "imageUrl":"https://www.bits-pilani.ac.in/wp-content/uploads/G0482-Ranjit-Patil.jpg",
            "link":"https://www.bits-pilani.ac.in/goa/ranjit-shankarrao-patil/"
        },
        {
            "name":"Smita Raghuvansh",
            "position":"Professor",
            "department":"Chemical Engineering Department",
            "college":"BITS Pilani, Pilani Campus",
            "imageUrl":"https://www.bits-pilani.ac.in/wp-content/uploads/smita-raghuvanshi.jpg",
            "link":"https://www.bits-pilani.ac.in/pilani/smita-raghuvanshi/"
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
            "name":"Srinivas Appari",
            "position":"Associate Professor",
            "department":"Chemical Engineering Department",
            "college":"BITS Pilani, Hyderabad Campus",
            "imageUrl":"https://www.bits-pilani.ac.in/wp-content/uploads/srinivas.jpg",
            "link":"https://www.bits-pilani.ac.in/hyderabad/srinivas-appari/"
        },
        {
            "name":"Vikranth Kumar Surasani",
            "position":"Associate Professor",
            "department":"Chemical Engineering Department",
            "college":"BITS Pilani, Hyderabad Campus",
            "imageUrl":"https://media.licdn.com/dms/image/v2/C4E03AQGYbH15pfhA6w/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1517687898341?e=2147483647&v=beta&t=HBX7xOLR__k6vfADI0M0JVvpFKzU0Ft6SavB5iHfOco",
            "link":"https://www.bits-pilani.ac.in/hyderabad/prof-vikranth-kumar-surasani/"
        }
    
    ];

    return (

        <div>

            <p className="componentTitle"> Carbon Capture Associated Faculty</p>
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
