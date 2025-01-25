
function Leadership() {

    const advisoryDescription = [
        `Prof. V. Ramgopal Rao is the Group Vice-Chancellor of Birla Institute of Technology & Science (BITS) Pilani, overseeing campuses in Pilani, Hyderabad, Goa, Dubai, and Mumbai since February 2023.  Prior to this, he served as the Director of the Indian Institute of Technology (IIT) Delhi from 2016 to 2021.  An internationally acclaimed nanoelectronics researcher, Prof. Rao has authored over 500 research publications and holds more than 50 patents, including 20 issued US patents.  His work has significantly impacted CMOS-SoC technologies, with several patents licensed for commercialization. He is a Fellow of IEEE, The World Academy of Sciences (TWAS), and multiple Indian science and engineering academies.  Prof. Rao's contributions have been recognized with numerous awards, including the Shanti Swarup Bhatnagar Prize and the Infosys Prize.`,
        `Prof. Suman Kundu is the Senior Professor and Director at BITS Pilani, K.K. Birla Goa Campus, currently on leave from his position as Professor in the Department of Biochemistry at the University of Delhi.  He earned his Ph.D. from Banaras Hindu University in 1999, followed by postdoctoral research at Iowa State University and a tenure as a Research Associate at Pioneer Hi-Bred, DuPont, USA.  Prof. Kundu has published over 80 research papers and three book chapters, with one patent granted and five applications pending.  His research focuses on engineering recombinant hemoglobin for use as blood substitutes and exploring therapeutics for sickle cell disease. He has received numerous accolades, including the S.P. Tyagi Oration Award (2017) and election as a Fellow of the Indian Academy of Biomedical Sciences (2021).  Additionally, Prof. Kundu serves as the Founder Editor-in-Chief of the *Journal of Proteins and Proteomics* and is an executive council member of the Proteomics Society (India) and the Protein Society (India).`,
        `Professor Soumyo Mukherji is a distinguished biomedical engineer specializing in biosensors and bioinstrumentation. He earned his B.Tech. in Instrumentation Engineering from IIT Kharagpur, followed by an M.S. from Colorado State University and a Ph.D. from the University of North Carolina at Chapel Hill. His research focuses on developing physical, chemical, and biological sensing systems for health, water quality, and environmental monitoring applications. He has held significant administrative roles at IIT Bombay, including Dean of Student Affairs and Head of the Centre for Research in Nanotechnology & Science. In recognition of his contributions, he was elected as a Fellow of both the National Academy of Sciences, India (FNASc), and the Indian National Academy of Engineering (FNAE).`,
        `Professor Souri Banerjee is a distinguished physicist specializing in condensed matter physics. He earned his Ph.D. from the Indian Association for Cultivation of Science, Kolkata, in 1997. Following his doctorate, he briefly worked at the Tata Institute of Fundamental Research in Mumbai. In 2004, he joined BITS Pilani's Pilani campus and later became the founding Head of the Physics Department at the Hyderabad campus in 2008. He has held postdoctoral positions at the University of Electro-Communications and Tokyo Institute of Technology in Japan, and served as a Research Scientist at HITACHI's Central Research Laboratory in Tokyo. In August 2024, Professor Banerjee was appointed as the Director of BITS Pilani's Dubai Campus, where he continues to contribute to academic excellence and research initiatives.`
    ]


    function AssociatedFaculty({ name, department, college, imageUrl, link }) {
        return (
            <div className="faculty-card">
                <a href={link} target="_blank" rel="noopener noreferrer" style={{textDecoration: "none"}}> 
                <img src={imageUrl} alt={`${name}'s photo`} />
                <h2>{name}</h2>
                <p>{department}</p>
                <p>{college}</p>
                </a>
            </div>
        );
    }
    

    const facultyData = [
        {
            name: "V. Ramgopal Rao",
            department: "Acting Director - BITS PILANI",
            college: "Vice Chancellor - BITS PILANI",
            imageUrl: "https://www.bits-pilani.ac.in/wp-content/uploads/prof-vrao.jpg",
            link: "https://www.bits-pilani.ac.in/pilani/v-ramgopal-rao/"
        },
        {
            name: "Suman Kundu",
            department: "Senior Professor - Biological Sciences",
            college: "Director - BITS Pilani, K K Birla Goa Campus",
            imageUrl: "https://www.bits-pilani.ac.in/wp-content/uploads/Prof.-Suman-Kundu.jpg",
            link: "https://www.bits-pilani.ac.in/goa/suman-kundu/"
        },
        {
            name: "Soumyo Mukherji",
            department: "Senior Professor - Electrical Engineering",
            college: "Director - BITS Pilani, Hyderabad Campus",
            imageUrl: "https://www.bits-pilani.ac.in/wp-content/uploads/DirectorBPHC.png",
            link: "https://www.bits-pilani.ac.in/hyderabad/mukherjis/"
        },
        {
            name: "Souri Banerjee",
            department: "Senior Professor - Physics Department",
            college: "Director - BITS Pilani, Dubai Campus",
            imageUrl: "https://www.bits-pilani.ac.in/wp-content/uploads/BIT_3942-scaled.jpg",
            link: "https://www.bits-pilani.ac.in/dubai/souribanerjee/"
        }
    ]


    return (
        <div>

        <div>
            <p className="componentTitle">Leadership</p>
            {facultyData.map((logo, index) => (
                <div key={index} className="industryPartner">
                    <div className="logoContainer">
                        <div className="faculty-cards-container advisoryImage">
                            <AssociatedFaculty name={facultyData[index].name} department={facultyData[index].department} college={facultyData[index].college} imageUrl={facultyData[index].imageUrl} link={facultyData[index].link} />
                        </div>
                    </div>
                    <p className="industryDescription">{advisoryDescription[index]}</p>
                </div>
            ))}
        </div>

        </div>
    );
}

export default Leadership;