function AssociatedFaculty({ name, position, department, college, imageUrl, link }) {
    return (
        <div className="faculty-card">
            <a href={link} style={{textDecoration: "none"}}> 
            <img src={imageUrl} alt={`${name}'s photo`} />
            <h2>{name}</h2>
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
            college: "BITS Pilani, Goa Campus",
            imageUrl: "https://www.bits-pilani.ac.in/wp-content/uploads/Anirban-Roy.jpg",
            link: "https://www.bits-pilani.ac.in/goa/anirban-roy/"
        },
        {
            name: "Iyman Abrar",
            position:"Assistant Professor",
            department: "Chemical Engineering Department",
            college: "BITS Pilani, Hyderabad Campus",
            imageUrl: "https://www.bits-pilani.ac.in/wp-content/uploads/iyman-abrar.jpg",
            link: "https://www.bits-pilani.ac.in/hyderabad/iyman-abrar/"
        },
        {
            name: "Supratim Ghosh",
            position:"Assistant Professor",
            department: "Department of Biological Sciences",
            college: "BITS Pilani, Hyderabad Campus",
            imageUrl: "https://www.bits-pilani.ac.in/wp-content/uploads/supratim-ghosh.jpg",
            link: "https://www.bits-pilani.ac.in/hyderabad/supratim-ghosh/"
        },
        {
            name: "Vivek Rangarajan",
            position:"Associate Professor",
            department: "Chemical Engineering Department",
            college: "BITS Pilani, Goa Campus",
            imageUrl: "https://www.bits-pilani.ac.in/wp-content/uploads/Profile-pic.jpg",
            link: "https://www.bits-pilani.ac.in/goa/vivek-rangarajan/"
        },
        {
            name: "Sampatrao Dagu Manjare",
            position:"Professor",
            department: "Chemical Engineering Department",
            college: "BITS Pilani, Goa Campus",
            imageUrl: "https://www.bits-pilani.ac.in/wp-content/uploads/g0185.jpg",
            link: "https://www.bits-pilani.ac.in/goa/sampatrao-dagu-manjare/"
        },
        {
            name: "Jayita Chopra",
            position:"Visiting Assistant Professor",
            department: "Chemical Engineering Department",
            college: "BITS Pilani, Goa Campus",
            imageUrl: "https://www.bits-pilani.ac.in/wp-content/uploads/photo.jpg",
            link: "https://www.bits-pilani.ac.in/goa/jayita-chopra/"
        },
        {
            name: "Amol Deshpande",
            position:"Assistant Professor",
            department: "Chemical Engineering Department",
            college: "BITS Pilani, Goa Campus",
            imageUrl: "https://www.bits-pilani.ac.in/wp-content/uploads/DSJ_6137.jpg",
            link: "https://www.bits-pilani.ac.in/goa/amol-anilrao-deshpande"
        },
        {
            name: "Riju De",
            position:"Assistant Professor",
            department: "Chemical Engineering Department",
            college: "BITS Pilani, Goa Campus",
            imageUrl: "https://www.bits-pilani.ac.in/wp-content/uploads/IMG_20201202_222228.jpg",
            link: "https://www.bits-pilani.ac.in/goa/riju-de/"
        },
        {
            name: "Arnab Dutta",
            position:"Assistant Professor",
            department: "Chemical Engineering Department",
            college: "BITS Pilani, Hyderabad Campus",
            imageUrl: "https://www.bits-pilani.ac.in/wp-content/uploads/arnab-dutta.jpg",
            link: "https://www.bits-pilani.ac.in/hyderabad/arnab-dutta/"
        },
        {
            name: "Dr Pratik N Sheth",
            position:"Professor",
            department: "Chemical Engineering Department",
            college: "BITS Pilani, Pilani Campus",
            imageUrl: "https://www.bits-pilani.ac.in/wp-content/uploads/Passport-size-pic-2-Pratik-N.-Sheth.jpg",
            link: "https://www.bits-pilani.ac.in/pilani/pratik/"
        },
        {
            name: "ABHISHEK SHARMA",
            position:"Professor",
            department: "Chemical Engineering Department",
            college: "Manipal University Jaipur",
            imageUrl: "https://media.licdn.com/dms/image/v2/C4D03AQGZITZpgbqoiQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1629897290473?e=1741824000&v=beta&t=equql9HN_RbuOUIsbe2F-wYGyBmOmnmFUyauQiLM8iQ",
            link: "https://www.linkedin.com/in/abhishek-sharma-11aa7b12/"
        },
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
                    />
                ))}
            </div>

        </div>
    );
}
