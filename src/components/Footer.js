import React from 'react';
import '../App.css';
import { FaFacebook, FaTwitter, FaInstagram} from 'react-icons/fa';
const Footer = () => {
    return (
        <div className="footer">
            <div className='footer-main'>
                <div className='footer-1'>
                    <h5 className='footer-title'>TUNISIANLEAGUE.COM</h5>
                    <ul>
                        <li>Terms of Use</li>
                        <li>Privacy Policy</li>
                        <li>GDPR and Journalism</li>
                        <li>Advertise</li>
                    </ul>
                </div>
                <div className='footer-1'>
                    <h5 className='footer-title'>FOOTBALL</h5>
                    <ul>
                        <li>Mobile</li>
                        <li>Live Scores</li>
                        <li>Recommended Sites</li>
                        <li>FAQ</li>
                    </ul>
                </div>
                <div className='footer-2'>
                    <h5 className='footer-title'>FOLLOW US  </h5>
                    <ul>
                        <li>
                            <a href="https://www.facebook.com">
                                <FaFacebook color="#1877F2" size={28} />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.twitter.com">
                                <FaTwitter color="#1DA1F2" size={28} />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com">
                                <FaInstagram color="#E4405F" size={28} />
                            </a>
                        </li>
                      
                    </ul>
                </div>
            </div>

        </div>
    )
}
export default Footer;