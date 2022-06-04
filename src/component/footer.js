import React from 'react'
import './style/Footer.css'

function Footer() {
    return (
        <div class="foot">
        <div class="footer">
            <div class="footer_img"><img src="https://ant.ivdata.in/v2/assets/images/profile-img.png" /></div>
            <div class="footer_list">
                <div>
                    <h5>Quick Links</h5>
                    <ul>
                        <li>Contact Us</li>
                        <li>About Us</li>
                        <li>Testimonial</li>
                        <li>Gallery</li>
                        <li>Site Map</li>
                    </ul>
                </div>
                <div>
                    <h5>Flates In Mumbai</h5>
                    <ul>
                        <li>1BHK West</li>
                        <li>2BHK West</li>
                        <li>3BHK West</li>
                        <li>1BHK West</li>
                        <li>2BHK West</li>
                    </ul>
                </div>
                <div>
                    <h5>Project in Mumbai</h5>
                    <ul>
                        <li>Ongoing</li>
                        <li>Upcoming</li>
                        <li>Completed</li>
                        <li>Hetali Blessing</li>
                        <li>Hetali Anuchhaya</li>
                    </ul>
                </div>
            </div>
        </div>
        <hr/>
        </div>
    )
}

export default Footer