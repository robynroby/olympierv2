import { useEffect, useRef, useState } from 'react';
import './Herosection.scss';

const Herosection = () => {
    const [isLoaded, setIsLoaded] = useState(false);
    const heroRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsLoaded(true);
                } else {
                    setIsLoaded(false);
                }
            },
            {
                threshold: 0.6,
            }
        );

        if (heroRef.current) {
            observer.observe(heroRef.current);
        }

        return () => {
            if (heroRef.current) {
                observer.unobserve(heroRef.current);
            }
        };
    }, []);

    return (
        <div className="hero-section" ref={heroRef}>
            <div className="hero-content">
                <h1 className={isLoaded ? 'animated' : ''}>
                    Reliable Waste Collection Services <span>Keeping Your Environment Clean</span>
                </h1>
                <p className={isLoaded ? 'animated' : ''}>
                    At our company, we are dedicated to providing efficient and eco-friendly waste collection services.
                    Our goal is to help you manage your waste responsibly, ensuring a cleaner and healthier community for
                    everyone.
                </p>
            </div>
            <div className="hero-image">
                <img src='/Illustration.png' alt="Hero" />
            </div>
        </div>
    );
}

export default Herosection;
