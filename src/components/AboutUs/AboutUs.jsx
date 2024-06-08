import './AboutUs.scss'

const AboutUs = () => {
    return (
        <div className="about-us">
            <div className="about-us-image">
                <img src='/aboutus.png' alt="About Us" />
            </div>
            <div className="about-us-content">
                <h2>About Us</h2>
                <p>
                    Our company is dedicated to providing top-notch waste collection services with a strong commitment to sustainability and environmental responsibility. With years of experience in the industry, we have developed efficient systems and processes that ensure waste is managed effectively and responsibly.
                </p>
                <p>
                    Our mission is to promote a cleaner, greener community by offering reliable and eco-friendly waste collection solutions. We work closely with local authorities, businesses, and residents to tailor our services to meet their unique needs, ensuring a positive impact on the environment and public health.
                </p>
                <p>
                    Join us in our efforts to create a more sustainable future. Together, we can make a difference in keeping our environment clean and safe for generations to come.
                </p>
            </div>
        </div>
    )
}

export default AboutUs