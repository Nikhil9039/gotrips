import "./Footer.css";
const Footer =()=>{
    return(
        <div className="footer">
            <div className="top">
                <div>
                    <h1>GoTrip</h1>
                    <p>Choose Your Favourite Destination</p>
                </div>
                <div>
                    <a href="/"><i className="fa-brands fa-facebook-square"></i></a>
                    <a href="/"><i className="fa-brands fa-instagram-square"></i></a>
                    <a href="/"><i className="fa-brands fa-linkedin"></i></a>
                    <a href="/"><i className="fa-brands fa-twitter-square"></i></a>
                </div>
            </div>
            <div className="bottom">
                <div>
                    <h4>Project</h4>
                    <a href="/">Changlog</a>
                    <a href="/">Status</a>
                    <a href="/">License</a>
                    <a href="/">All versions</a>
                </div>
                <div>
                    <h4>Community</h4>
                    <a href="/">Github</a>
                    <a href="/">Issues</a>
                    <a href="/">Projects</a>
                    <a href="/">Twitter</a>
                </div>
                <div>
                    <h4>Help</h4>
                    <a href="/">Support</a>
                    <a href="/">Troubleshooting</a>
                    <a href="/">Contact Us</a>
                </div>
                <div>
                    <h4>Others</h4>
                    <a href="/">Terms of Services</a>
                    <a href="/">Privacy Policy</a>
                    <a href="/">License</a>
                </div>

            </div>
            <div className="copyright" ><p>Copyright ©2023 Designed By <b>Nikhil Prajapati</b></p></div>
        </div>
    )
}
export default Footer;