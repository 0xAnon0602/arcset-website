function AssociatedFaculty({ name, position, department, college, imageUrl, link, otherTitle }) {
    return (
        <div className="faculty-card">
            <a href={link} target="_blank" style={{textDecoration: "none"}}> 
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

export default function AssociatedFacultyHydrogen() {
    const facultyData = [
        {
            name: "Pradeep Kumar Sow",
            position:"Associate Professor",
            department: "Chemical Engineering Department",
            college: "BITS Pilani, Goa Campus",
            imageUrl: "https://www.bits-pilani.ac.in/wp-content/uploads/64485401_10219705515813284_2402715210595958784_n.jpg",
            link: "https://www.bits-pilani.ac.in/goa/pradeep-kumar-sow/",
            otherTitle:"Convener"
        },
        {
            name: "Naveen Kumar Shrivastava",
            position:"Assistant Professor",
            department: "Mechanical Engineering Department",
            college: "BITS Pilani, Hyderabad Campus",
            imageUrl: "https://www.bits-pilani.ac.in/wp-content/uploads/IMG_9556.jpg",
            link: "https://www.bits-pilani.ac.in/hyderabad/naveenkumar-shrivastava/",
            otherTitle:"Co-Convener"
        },
        {
            name: "Jay Pandey",
            position:"Assistant Professor",
            department: "Chemical Engineering Department",
            college: "BITS Pilani, Pilani Campus",
            imageUrl: "https://www.bits-pilani.ac.in/wp-content/uploads/jay-pandey.jpg",
            link: "https://www.bits-pilani.ac.in/pilani/jay-pandey",
            otherTitle:"Co-Convener"
        },
        {
            "name":"Afkham Mir",
            "position":"Assistant Professor",
            "department":"Chemical Engineering Department",
            "college":"BITS Pilani, Hyderabad Campus",
            "imageUrl":"https://www.bits-pilani.ac.in/wp-content/uploads/afkham-mir.jpg",
            "link":"https://www.bits-pilani.ac.in/hyderabad/afkham-mir"
        },
        {
            "name":"Amol Deshpande",
            "position":"Assistant Professor",
            "department":"Chemical Engineering Department",
            "college":"BITS Pilani, Goa Campus",
            "imageUrl":"https://www.bits-pilani.ac.in/wp-content/uploads/DSJ_6137.jpg",
            "link":"https://www.bits-pilani.ac.in/goa/amol-anilrao-deshpande"
        },
        {
            "name":"Kiran Vankayala",
            "position":"Assistant Professor",
            "department":"Department of Chemistry",
            "college":"BITS Pilani, Goa Campus",
            "imageUrl":"https://www.bits-pilani.ac.in/wp-content/uploads/Nano-Jatha_-2024-22-scaled-e1731402579119.jpg",
            "link":"https://www.bits-pilani.ac.in/goa/vankayala-kiran"
        },
        {
            "name":"P Bhavana",
            "position":"Professor",
            "department":"Department of Chemistry",
            "college":"BITS Pilani, Goa Campus",
            "imageUrl":"https://www.bits-pilani.ac.in/wp-content/uploads/Bhavana-1.jpg",
            "link":"https://www.bits-pilani.ac.in/goa/p-bhavana"
        },
        {
            "name":"Richa Singhal",
            "position":"Associate Professor",
            "department":"Chemical Engineering Department",
            "college":"BITS Pilani, K K Birla Goa Campus",
            "imageUrl":"https://www.bits-pilani.ac.in/wp-content/uploads/IMG_20190521_171429.jpg",
            "link":"https://www.bits-pilani.ac.in/goa/richa-singhal/"
        },
        {
            "name":"S. S. Baral",
            "position":"Professor",
            "department":"Chemical Engineering Department",
            "college":"BITS Pilani, Goa Campus",
            "imageUrl":"https://www.bits-pilani.ac.in/wp-content/uploads/Photo-Passport-size-1.png",
            "link":"https://www.bits-pilani.ac.in/goa/saroj-sundar-baral"
        },
        {
            "name":"Sampatrao Dagu Manjare",
            "position":"Professor",
            "department":"Chemical Engineering Department",
            "college":"BITS Pilani, Goa Campus",
            "imageUrl":"https://www.bits-pilani.ac.in/wp-content/uploads/g0185.jpg",
            "link":"https://www.bits-pilani.ac.in/goa/sampatrao-dagu-manjare/"
        },
        {
            "name":"Somak Chatterjee",
            "position":"Assistant Professor",
            "department":"Chemical Engineering Department",
            "college":"BITS Pilani, Pilani Campus",
            "imageUrl":"https://www.bits-pilani.ac.in/wp-content/uploads/12890885_972888792759956_6029432168801616954_o.jpg",
            "link":"https://www.bits-pilani.ac.in/pilani/somak-chatterjee/"
        },
        {
            "name":"Sudipta Chatterjee",
            "position":"Assistant Professor",
            "department":"Department of Chemistry",
            "college":"BITS Pilani, Goa Campus",
            "imageUrl":"https://www.bits-pilani.ac.in/wp-content/uploads/20221030071915_IMG_4062-01-Copy.jpeg",
            "link":"https://www.bits-pilani.ac.in/goa/sudipta-chatterjee"
        },
        {
            "name":"Swastibrata Bhattacharyya",
            "position":"Assistant Professor",
            "department":"Department of Physics",
            "college":"BITS Pilani, Goa Campus",
            "imageUrl":"https://www.bits-pilani.ac.in/wp-content/uploads/swasti.jpg",
            "link":"https://www.bits-pilani.ac.in/goa/swastibrata-bhattacharyya"
        },
        {
            "name":"Teny Theresa John",
            "position":"Associate Professor",
            "department":"Department of Physics",
            "college":"BITS Pilani, Goa Campus",
            "imageUrl":"https://www.bits-pilani.ac.in/wp-content/uploads/G0348-Teny-Theresa.jpg",
            "link":"https://www.bits-pilani.ac.in/goa/teny-theresa-john"
        },
        {
            "name":"Upasana Mahanta",
            "position":"Assistant Professor",
            "department":"Chemical Engineering Department",
            "college":"BITS Pilani, Goa Campus",
            "imageUrl":"https://www.bits-pilani.ac.in/wp-content/uploads/Profile.jpeg",
            "link":"https://www.bits-pilani.ac.in/goa/upasana-mahanta"
        },
        {
            "name":"Varinder Singh",
            "position":"Associate Professor",
            "department":"Mechanical Engineering Department",
            "college":"BITS Pilani, Goa Campus",
            "imageUrl":"https://www.bits-pilani.ac.in/wp-content/uploads/WhatsApp-Image-2022-10-10-at-20.59.34.jpeg",
            "link":"https://www.bits-pilani.ac.in/goa/varinder-singh"
        },
        {
            "name":"Woormileela Sinha",
            "position":"Assistant Professor",
            "department":"Department of Chemistry",
            "college":"BITS Pilani, Goa Campus",
            "imageUrl":"https://www.bits-pilani.ac.in/wp-content/uploads/unnamed-104.jpg",
            "link":"https://www.bits-pilani.ac.in/goa/woormileela-sinha"
        }
    ];

    return (

        <div>

            <p className="componentTitle"> Hydrogen Associated Faculty</p>
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
