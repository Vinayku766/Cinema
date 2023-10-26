import React from "react";
import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaLinkedin,
} from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <footer className="footer">
            <ContentWrapper>
                <ul className="menuItems">
                    <li className="menuItem">Terms Of Use</li>
                    <li className="menuItem">Privacy-Policy</li>
                    <li className="menuItem">About</li>
                    <li className="menuItem">Blog</li>
                    <li className="menuItem">FAQ</li>
                </ul>
                <div className="infoText">
                 Cinema Appication show all kind of movies, animes, tv shows,
                 Here You can find your next show through searching as well
                 as with recommendations. I mentioned every movies details
                 like rating, cast, director and trailer through which you 
                 are able to find correct information about movie and choose
                 your next show. build and created by me "Vinay". 
                </div>
                <div className="socialIcons">
                    <span className="icon">
                        <FaFacebookF onClick={(e) => window.location.href = "https://www.facebook.com/vinay.kumar.766"} />
                    </span>
                    <span className="icon">
                        <FaInstagram onClick={(e) => window.location.href = "https://www.instagram.com/its_vinay766"} />
                    </span>
                    <span className="icon">
                        <FaTwitter onClick={(e) => window.location.href = "https://www.twitter.com/its__Vinay766"} />
                    </span>
                    <span className="icon">
                        <FaLinkedin onClick={(e) => window.location.href = "https://www.linkedin.com/in/vinay-kumar-yadav-8a7026218"} />
                    </span>
                </div>
                <span className="copyRight">
                  Copyright@{year} by Vinay🖤
                </span>
            </ContentWrapper>
        </footer>
    );
};

export default Footer;
