import './Services.scss'

const Services = () => {
    return (
        <div className="services">
            <h2>Our Services</h2>
            <div className="services-list">
                <div className="service-item">
                    <img src='/image1.jpg' alt="Residential Waste Collection" />
                    <h3>Residential Waste Collection</h3>
                    <p>Reliable and timely waste collection services for residential areas, ensuring a clean and healthy environment for your home. We offer flexible scheduling and tailored services to meet the unique needs of your household, helping you manage waste efficiently and sustainably.</p>
                </div>
                <div className="service-item">
                    <img src='image2.jpg' alt="Commercial Waste Management" />
                    <h3>Commercial Waste Management</h3>
                    <p>Comprehensive waste management solutions for businesses, helping you maintain a clean and eco-friendly workplace. Our services include regular waste pickups, recycling programs, and customized waste disposal plans to suit your business operations and promote sustainability.</p>
                </div>
                <div className="service-item">
                    <img src='/image3.jpg' alt="Recycling Services" />
                    <h3>Recycling Services</h3>
                    <p>Efficient recycling programs to reduce waste and promote sustainability within your community. We provide easy-to-use recycling bins, regular collection schedules, and educational resources to help you understand the importance of recycling and how to recycle effectively.</p>
                </div>
            </div>
        </div>
    )
}

export default Services