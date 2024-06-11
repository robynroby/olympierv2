import { useState } from 'react';
import './ContactUs.css';

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    const validateForm = () => {
        const { name, phone, email, message } = formData;
        if (!name || !phone || !email || !message) {
            alert("Please fill in all required fields.");
            return false;
        }
        return true;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            console.log("Form data:", formData);
            // Handle form submission logic here
        }
    };

    return (
        <div className='contactus'>
            <div className="container">
                <h1>Get in Touch</h1>
                <p>Fill up the form to get in touch with us.</p>

                <div className="contact-box">
                    <div className="container-left">
                        <h3>Fill the Form*</h3>
                        <form id="contactForm" onSubmit={handleSubmit}>
                            <div className="input-row">
                                <div className="input-group">
                                    <label>Name*</label>
                                    <input
                                        type="text"
                                        id="name"
                                        placeholder="Enter your Name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className="input-group">
                                    <label>Phone*</label>
                                    <input
                                        type="text"
                                        id="phone"
                                        placeholder="+254 734567890"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="input-row">
                                <div className="input-group">
                                    <label>Email*</label>
                                    <input
                                        type="email"
                                        id="email"
                                        placeholder="youremail@gmail.com"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className="input-group">
                                    <label>Subject</label>
                                    <input
                                        type="text"
                                        id="subject"
                                        placeholder="Inquiry"
                                        value={formData.subject}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                            <label>Message*</label>
                            <textarea
                                rows="10"
                                id="message"
                                placeholder="Enter your Message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            />
                            <button type="submit" className='contact-btn'>SEND MESSAGE</button>
                        </form>
                    </div>

                    <div className="container-right">
                        <h3>Reach Us</h3>
                        <table>
                            <tbody>
                                <tr>
                                    <td>Email: </td>
                                    <td>info@olympier.com</td>
                                </tr>
                                <tr>
                                    <td>Phone: </td>
                                    <td>+254 745656183</td>
                                </tr>
                                <tr>
                                    <td>Address: </td>
                                    <td>
                                        Nairobi
                                        <br />
                                        C-4, moi venue,
                                        <br />
                                        Nairobi - 110058,  Nairobi, Kenya
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="map">
                            <iframe
                                src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=moi%20avenue+(olympier)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                                width="800"
                                height="275"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;