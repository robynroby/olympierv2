import { useEffect, useRef, useState } from 'react';
import './CalltoAction.scss';

const CalltoAction = () => {
    const [isLoaded, setIsLoaded] = useState(false);
    const ctaRef = useRef(null);

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
                threshold: 0.5,
            }
        );

        if (ctaRef.current) {
            observer.observe(ctaRef.current);
        }

        return () => {
            if (ctaRef.current) {
                observer.unobserve(ctaRef.current);
            }
        };
    }, []);

    return (
        <div className={`cta-section ${isLoaded ? 'animated' : ''}`} ref={ctaRef}>
            <div className="cta-content">
                <h2>Join Us in Creating a Cleaner Environment</h2>
                <p>Take the first step towards a greener future. Partner with us to ensure efficient and responsible waste management in your community. Together, we can make a significant impact on our environment.</p>
                <button className="cta-button">Get Started</button>
            </div>
            <div className="cta-images">
                <img src='/image1.jpg' alt="Waste Management 1" />
                <img src='/image2.jpg' alt="Waste Management 2" />
                <img src='/image3.jpg' alt="Waste Management 3" />
                <img src='/image1.jpg' alt="Waste Management 3" />
            </div>
        </div>
    );
}

export default CalltoAction;
