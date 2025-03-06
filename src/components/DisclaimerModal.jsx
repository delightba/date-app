import React, { useState, useEffect } from 'react';
import './DisclaimerModal.css'; // Import your CSS file for styling

const DisclaimerModal = ({ onAccept }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Check if the disclaimer has been accepted
        const isAccepted = localStorage.getItem('disclaimerAccepted');
        if (!isAccepted) {
            setIsVisible(true);
            document.body.style.overflow = 'hidden'; // Apply overflow hidden when modal is visible
        }

        // Cleanup on component unmount
        return () => {
            document.body.style.overflow = 'auto'; // Reset overflow style
        };
    }, []);

    const handleAccept = () => {
        localStorage.setItem('disclaimerAccepted', 'true');
        setIsVisible(false);
        document.body.style.overflow = 'auto'; // Reset overflow style when modal is hidden
        onAccept();
    };

    return (
        isVisible && (
            <div className="disclaimer-modal">
                <div className="disclaimer-modal-content">
                    <div className="disclaimer-modal-scrollable">
                        <h2>Disclaimer Agreement</h2>
                        <p>
                            By using this site, you acknowledge and agree to the following: <br /><br />
                            1. <b>Eligibility:</b> You must be at least 18 years old to use this site. By using this site, you represent and warrant that you have the right, authority, and capacity to enter into this agreement and to abide by all of the terms and conditions of this agreement. <br />

                            2. <b>Accuracy of Information:</b> We do not guarantee the accuracy, completeness, or validity of the information provided by users. All content, profiles, and communication on this platform are the responsibility of the users themselves. <br />

                            3. <b>User Responsibility:</b> Users are solely responsible for their interactions with others on the site. We are not responsible for any harm, damages, or outcomes resulting from communications, meetings, or transactions between users. <br/>

                            4. <b>Safety:</b> While we strive to provide a safe and secure platform, we cannot guarantee the safety of users or the content shared. Users are encouraged to take precautions when interacting with others, both online and offline.<br/>

                            5. <b>Third-Party Links:</b> The site may contain links to third-party websites. We do not endorse and are not responsible for the content or services provided by these external sites.<br/>

                            6. <b> Limitations of Liability:</b> To the fullest extent permitted by law, we shall not be liable for any direct, indirect, incidental, or consequential damages arising out of or in connection with your use of the site.

                            By using this site, you agree to these terms and acknowledge that you are participating at your own risk.
                        </p>
                    </div>
                    <button className="default-btn" onClick={handleAccept}>
                        Accept
                    </button>
                </div>
            </div>
        )
    );
};

export default DisclaimerModal;
