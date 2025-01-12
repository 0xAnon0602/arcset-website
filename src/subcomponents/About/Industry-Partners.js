import React from 'react';

function IndustryPartners() {

    const industryLogo = [
        "https://www.next-chemx.com/wp-content/themes/nextchemx/assets/img/logo.png",
        "https://ionexchangeglobal.com/app/uploads/2022/05/ion-logo.webp",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSopngCefg2XIl_1WQTv-9X9CMAcdU5aWns3Q&s",
    ]

    const industryDescription = [
        `NEXT-ChemX Corporation specializes in a novel membrane-based ion extraction technology, known as "NCX," which mimics natural biophysical processes to separate low concentrations of ions from liquids into highly concentrated forms. 
        This environmentally friendly and cost-effective technology has applications in lithium extraction, vegetable oil refining, radioactive ion extraction, metal ion extraction, and desalination.`,
        
        `Ion Exchange (India) Ltd., established in 1964, is a leading provider of comprehensive water and environment management solutions with a global presence. 
        The company offers a wide range of products and services, including water and wastewater treatment, solid waste management, and waste-to-energy solutions, catering to industries, institutions, homes, and communities. 
        With over 60 years of experience, Ion Exchange is recognized for its technological innovation, customer satisfaction, and commitment to sustainability. 
        Their extensive portfolio includes ion exchange resins, membranes, specialty chemicals, and water quality monitoring instruments.`,
        
        `Chemdist Group, established in 2013, is a leading provider of process technology, engineering, and equipment solutions in the chemical industry. 
        Specializing in separation technologies, they offer a comprehensive range of products and services, including distillation columns, heat exchangers, membrane systems, and green energy solutions. 
        Their commitment to innovation and sustainability is evident through collaborations with esteemed institutions and a portfolio of over 10 patents. 
        With a global presence, Chemdist Group serves diverse industries by delivering customized, cost-effective engineering solutions. 
        CHEMDIST GROUP`
    ]

    const industryLinks = [
        "https://www.next-chemx.com/",
        "https://ionexchangeglobal.com/",
        "https://www.chemdistgroup.com"
    ]

    return (
        <div>
            <p className="componentTitle">Industry Partners</p>
            {industryLogo.map((logo, index) => (
                <div key={index} className="industryPartner">
                    <a href={industryLinks[index]} className="logoContainer">
                        <img src={logo} alt={`Industry Partner ${index + 1}`} className="industryLogo" />
                    </a>
                    <p className="industryDescription">{industryDescription[index]}</p>
                </div>
            ))}
        </div>
    );
}

export default IndustryPartners;