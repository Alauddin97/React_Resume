import React from 'react';
import './css/footer.css';
function Footer() {
    return (
        <div>
            <footer>
                   Contact Me
                <div className="style">
                <i class="fa fa-facebook-square"><a href="https://www.facebook.com/alauddin.ahmed.35" target="_blank">Facebook</a></i>
                <i class="fa fa-github-square"><a href="https://github.com/Alauddin97" target="_blank">GitHub</a></i>
                <i class="fa fa-linkedin-square"><a href="https://www.linkedin.com/in/alauddin-ahmed-b75a14184/" target="_blank">LinkedIn</a></i><br/>
                <i class="fa fa-instagram"><a href="https://www.instagram.com/alen_maxx/?hl=en" target="_blank">Instagram</a></i>
                <i class="fa fa-envelope-square"><a href="mailto:alen.maxx17@gmail.com" target="_blank">Email</a></i>
                {"  "}<i class="fa fa-phone-square"><a href="tel:9611270985">Call</a></i>
                </div>
            </footer>
        </div>
    )
}

export default Footer
