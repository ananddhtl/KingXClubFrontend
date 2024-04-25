import { cn } from "@/utils/cn";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';
import { FC } from "react";

interface IFooter {
    classname?: string;
}

const Footer: FC<IFooter> = ({ classname }) => {
    return (
    <footer className={cn("footer bgn-4 bt", classname)}>
        <div className="container">
            <div className="row justify-content-between">
                <div className="col-lg-3 col-sm-6 br py-lg-20 pt-sm-15 pt-10 footer-card-area">
                    <div className="py-lg-10">
                        <div className="footer-logo mb-8">
                            <a href="#" className="d-grid gap-6">
                                
                              <img className="w-100" src="assets/img/logo.png" alt="logo" />
                            </a>
                        </div>
                        <div className="social-links">
                            <ul className="d-flex align-items-center gap-3 flex-wrap">
                                <li>
                                    <a href="#"><i className="ti ti-brand-facebook fs-2xl"><FaFacebook/></i></a>
                                </li>
                                <li>
                                    <a href="#"><i className="ti ti-brand-twitter fs-2xl"><FaTwitter/></i></a>
                                </li>
                                <li>
                                    <a href="#"><i className="ti ti-brand-youtube fs-2xl"><FaYoutube/></i></a>
                                </li>
                                <li>
                                    <a href="#"><i className="ti ti-brand-linkedin fs-2xl"><FaLinkedin/></i></a>
                                </li>
                                <li>
                                    <a href="#"><i className="ti ti-brand-instagram fs-2xl"><FaInstagram/></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6 br br-res py-lg-20 pt-sm-15 pt-10 footer-card-area">
                    <div className="py-lg-10">
                        <h4 className="footer-title mb-8 title-anim">Quick Links</h4>
                        <ul className="footer-list d-grid gap-4">
                            
                            <li><a href="game.html" className="footer-link d-flex align-items-center tcn-6"> <i
                                        className="ti ti-chevron-right"></i> Games </a></li>
                            <li><a href="teams.html" className="footer-link d-flex align-items-center tcn-6"> <i
                                        className="ti ti-chevron-right"></i> Teams</a></li>
                            <li><a href="faq.html" className="footer-link d-flex align-items-center tcn-6"> <i
                                        className="ti ti-chevron-right"></i> FAQ</a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6 br py-lg-20 pt-sm-15 pt-10 footer-card-area">
                    <div className="py-lg-10">
                        <h4 className="footer-title mb-8 title-anim">Explore</h4>
                        <ul className="footer-list d-grid gap-4">
                            <li><a href="#" className="footer-link d-flex align-items-center tcn-6"> <i
                                        className="ti ti-chevron-right"></i> Top Players</a></li>
                            <li><a href="chat.html" className="footer-link d-flex align-items-center tcn-6"> <i
                                        className="ti ti-chevron-right"></i> messages</a></li>
                            <li><a href="profile.html" className="footer-link d-flex align-items-center tcn-6"> <i
                                        className="ti ti-chevron-right"></i> Profile</a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6 py-lg-20 pt-sm-15 pt-10 footer-card-area">
                    <div className="py-lg-10">
                        <h4 className="footer-title mb-8 title-anim">Follow Us</h4>
                        <ul className="footer-list d-grid gap-4">
                            <li><a href="#" className="footer-link d-flex align-items-center tcn-6"> <i
                                        className="ti ti-chevron-right"></i> Facebook</a></li>
                            <li><a href="#" className="footer-link d-flex align-items-center tcn-6"> <i
                                        className="ti ti-chevron-right"></i> Instagram</a></li>
                            <li><a href="#" className="footer-link d-flex align-items-center tcn-6"> <i
                                        className="ti ti-chevron-right"></i> Twitter</a></li>
                            <li><a href="#" className="footer-link d-flex align-items-center tcn-6"> <i
                                        className="ti ti-chevron-right"></i> Linkedln</a></li>
                                        <li><a href="#" className="footer-link d-flex align-items-center tcn-6"> <i
                                        className="ti ti-chevron-right"></i> What's App</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="row pb-4 pt-lg-4 pt-8 justify-content-between g-2">
                <div className="col-xxl-4 col-lg-6 order-last order-lg-first">

                    <span>Copyright © <span className="currentYear"></span> Matka King </span>
                </div>
                <div className="col-xxl-3 col-lg-5">
                    <ul className="d-flex align-items-center gap-lg-10 gap-sm-6 gap-4">
                        <li><a href="terms-condition.html">Terms & Conditions</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                    </ul>
                </div>
            </div>
        </div>
       <div className="footer-banner-img" id="faa">
            <img className="w-100" src="assets/img/fbanner.png" alt="banner"/>
        </div> 
    </footer>
    );
};

export default Footer;
