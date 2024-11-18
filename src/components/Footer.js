import '../css/Footer.css'
import { SiLinkedin } from "react-icons/si";

function Footer() {
    return (
  
        <div className="footer">

            <div className="contactDiv">
                <div className="contact">
                    <p className="contactTitle">Contact</p>
                    <p className="contactText">
                        Professor in Charge <br />
                        Department of Chemical Engineering <br />
                        BITS Pilani K K Birla Goa Campus <br />
                        NH 17B, Bypass, Road, Zuarinagar <br />
                        Sancoale, Goa 403726
                    </p>
                </div>

                <div className="email">
                    <p className="contactTitle">Email</p>
                    <p>xyz@goa.bits-pilani.ac.in</p>
                </div>
            </div>

            <div className="social">
                <p className="contactTitle">Connect With Us </p>
                <div className='socialLogo'>
                    <SiLinkedin  size={18}/>
                </div>
                    
            </div>


            <div className="other">
                <p className="socialTitle">Social</p>
                <p>Follow us on social media</p>
            </div>


        </div>

        
    );
}
  
  export default Footer;