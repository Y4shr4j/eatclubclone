import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="bg-gray-800 text-white py-8">
            <div className="container mx-auto px-4">
                <div className="brand-meta grid grid-cols-1 md:grid-cols-4 gap-6">
                    <div className="column-box">
                        <div className="brand-name text-2xl font-bold">EATCLUB DEMO</div>
                        <p className="brand-description mt-2">
                        This is a demo website for EatClub with no intention to harm others. It has been created solely for the purpose of my job resume for the same company.
                        </p>
                        <p className="brand-description mt-2">
                        This is a demo website for EatClub with no intention to harm others. It has been created solely for the purpose of my job resume for the same company.
                        </p>
                        <p className="brand-description mt-2">One membership, many benefits!</p>
                    </div>
                    <div className="column-box">
                        <h5 className="text-lg font-semibold">COMPANY</h5>
                        <ul className="mt-2">
                            <li><Link to="/" className="hover:text-gray-300">About Us</Link></li>
                        </ul>
                    </div>
                    <div className="column-box">
                        <h5 className="text-lg font-semibold">GET HELP</h5>
                        <ul className="mt-2">
                            <li><Link to="/" className="hover:text-gray-300">Contact Us</Link></li>
                            <li><Link to="/" className="hover:text-gray-300">Help & Support</Link></li>
                            <li><Link to="/" className="hover:text-gray-300">Delivery Policies</Link></li>
                            <li><Link to="/" className="hover:text-gray-300">Privacy Policies</Link></li>
                            <li><Link to="/" className="hover:text-gray-300">Disclaimers</Link></li>
                        </ul>
                    </div>
                    <div className="column-box">
                        <h5 className="text-lg font-semibold">EXPLORE</h5>
                        <ul className="mt-2">
                            <li><Link to="/" className="hover:text-gray-300">Offers</Link></li>
                            <li><Link to="/" className="hover:text-gray-300">Bulk Order</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="copyright text-center mt-8">
                    <div>
                        <span className="text-gray-400">yashra4j</span>
                    </div>
                    <div className="social-icons mt-4 flex justify-center space-x-4">
                        <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/profile.php?id=100085257384998">
                            <img alt="Facebook Social Link" title="Follow us on Facebook" src="https://dwc6ndmngc4q3.cloudfront.net/20240620155323/assets/images/new_social_icons/fb.svg" className="h-6" />
                        </a>
                        <a target="_blank" rel="noopener noreferrer" href="https://x.com/YashRa4j">
                            <img alt="Twitter Social Link" title="Follow us on Twitter" src="https://dwc6ndmngc4q3.cloudfront.net/20240620155323/assets/images/new_social_icons/twitter.svg" className="h-6" />
                        </a>
                        <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/yashra4j/">
                            <img alt="Instagram Social Link" title="Follow us on Instagram" src="https://dwc6ndmngc4q3.cloudfront.net/20240620155323/assets/images/new_social_icons/instagram.svg" className="h-6" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
