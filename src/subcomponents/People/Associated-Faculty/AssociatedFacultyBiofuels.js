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

export default function AssociatedFacultyBiofuels() {
    const facultyData = [
        {
            name: "Anirban Roy",
            position:"Associate Professor",
            department: "Chemical Engineering Department",
            college: "BITS Pilani, K K Birla Goa Campus",
            imageUrl: "https://www.bits-pilani.ac.in/wp-content/uploads/Anirban-Roy.jpg",
            link: "https://www.bits-pilani.ac.in/goa/anirban-roy/",
            otherTitle:"Convener"
        },
        {
            name: "Dr Pratik N Sheth",
            position:"Professor",
            department: "Chemical Engineering Department",
            college: "BITS Pilani, Pilani Campus",
            imageUrl: "https://www.bits-pilani.ac.in/wp-content/uploads/Passport-size-pic-2-Pratik-N.-Sheth.jpg",
            link: "https://www.bits-pilani.ac.in/pilani/pratik/",
            otherTitle:"Co-Convener"
        },
        {
            name: "Iyman Abrar",
            position:"Assistant Professor",
            department: "Chemical Engineering Department",
            college: "BITS Pilani, Hyderabad Campus",
            imageUrl: "https://www.bits-pilani.ac.in/wp-content/uploads/iyman-abrar.jpg",
            link: "https://www.bits-pilani.ac.in/hyderabad/iyman-abrar/",
            otherTitle:"Co-Convener"
        },
        {
            name: "Abhishek Sharma",
            position:"Professor",
            department: "Chemical Engineering Department",
            college: "Manipal University Jaipur",
            imageUrl: "https://jaipur.manipal.edu/admin/photo/3/faculty/19/93.jpg",
            link: "https://www.linkedin.com/in/abhishek-sharma-11aa7b12/",
            otherTitle:"Co-Convener"
        },
        {
            "name":"Amol Deshpande",
            "position":"Assistant Professor",
            "department":"Chemical Engineering Department",
            "college":"BITS Pilani, K K Birla Goa Campus",
            "imageUrl":"https://www.bits-pilani.ac.in/wp-content/uploads/DSJ_6137.jpg",
            "link":"https://www.bits-pilani.ac.in/goa/amol-anilrao-deshpande"
        },
        {
            "name":"Arnab Dutta",
            "position":"Assistant Professor",
            "department":"Chemical Engineering Department",
            "college":"BITS Pilani, Hyderabad Campus",
            "imageUrl":"https://www.bits-pilani.ac.in/wp-content/uploads/arnab-dutta.jpg",
            "link":"https://www.bits-pilani.ac.in/hyderabad/arnab-dutta/"
        },
        {
            "name":"Jayita Chopra",
            "position":"Visiting Assistant Professor",
            "department":"Chemical Engineering Department",
            "college":"BITS Pilani, K K Birla Goa Campus",
            "imageUrl":"https://www.bits-pilani.ac.in/wp-content/uploads/photo.jpg",
            "link":"https://www.bits-pilani.ac.in/goa/jayita-chopra/"
        },
        {
            "name":"Riju De",
            "position":"Assistant Professor",
            "department":"Chemical Engineering Department",
            "college":"BITS Pilani, K K Birla Goa Campus",
            "imageUrl":"https://www.bits-pilani.ac.in/wp-content/uploads/IMG_20201202_222228.jpg",
            "link":"https://www.bits-pilani.ac.in/goa/riju-de/"
        },
        {
            "name":"Sampatrao Dagu Manjare",
            "position":"Professor",
            "department":"Chemical Engineering Department",
            "college":"BITS Pilani, K K Birla Goa Campus",
            "imageUrl":"https://www.bits-pilani.ac.in/wp-content/uploads/g0185.jpg",
            "link":"https://www.bits-pilani.ac.in/goa/sampatrao-dagu-manjare/"
        },
        {
            "name":"S. S. Baral",
            "position":"Professor",
            "department":"Chemical Engineering Department",
            "college":"BITS Pilani, K K Birla Goa Campus",
            "imageUrl":"https://www.bits-pilani.ac.in/wp-content/uploads/Photo-Passport-size-1.png",
            "link":"https://www.bits-pilani.ac.in/goa/saroj-sundar-baral"
        },
        {
            "name":"Sumit Biswas",
            "position":"Professor",
            "department":"Department of Biological Sciences",
            "college":"BITS Pilani, K K Birla Goa Campus",
            "imageUrl":"https://www.bits-pilani.ac.in/wp-content/uploads/G0412-Sumit-Biswas.jpg",
            "link":"https://www.bits-pilani.ac.in/goa/sumit-biswas/"
        },
        {
            "name":"Supratim Ghosh",
            "position":"Assistant Professor",
            "department":"Department of Biological Sciences",
            "college":"BITS Pilani, Hyderabad Campus",
            "imageUrl":"https://www.bits-pilani.ac.in/wp-content/uploads/supratim-ghosh.jpg",
            "link":"https://www.bits-pilani.ac.in/hyderabad/supratim-ghosh/"
        },
        {
            "name":"Vivek Rangarajan",
            "position":"Associate Professor",
            "department":"Chemical Engineering Department",
            "college":"BITS Pilani, K K Birla Goa Campus",
            "imageUrl":"https://www.bits-pilani.ac.in/wp-content/uploads/Profile-pic.jpg",
            "link":"https://www.bits-pilani.ac.in/goa/vivek-rangarajan/"
        }
    ];

    return (

        <div>

            <p className="componentTitle"> Biofuels Associated Faculty</p>
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
