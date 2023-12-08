import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import './TopicSelection.css'; // Ensure this file exists and is in the correct path

const TopicSelection = ({ onSelectTopic }) => {
    const navigate = useNavigate();
    const topics = ["Language", "Math", "Chemistry", "Biology"];
    const [messageVisible, setMessageVisible] = useState(false); // State to control message visibility

    const handleSelectTopic = (topic) => {
        onSelectTopic(topic);
        setMessageVisible(true); // Show the message

        setTimeout(() => {
            setMessageVisible(false); // Hide the message again
            navigate('/quiz'); // Navigate to the quiz page after 5 seconds
        }, 5000);
    };

    // Inline style for the background image
    const containerStyle = {
        backgroundImage: `url(${process.env.PUBLIC_URL}/mainPageTopicPick.jpeg)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        // Include other styles you want to apply directly here
    };

    return (
        <div style={containerStyle}>
            <h2 className="topic-selection-header">Select a Topic</h2>
            <div className="topic-buttons-container">
                {topics.map((topic, index) => (
                    <button key={index} onClick={() => handleSelectTopic(topic)} className="topic-button">
                        {topic}
                    </button>
                ))}
            </div>
            
            {messageVisible && (
                <div className="start-message-box">
                    The quiz will start in 3 seconds, get ready!!
                </div>
            )}

        </div>
    );
};

export default TopicSelection;
