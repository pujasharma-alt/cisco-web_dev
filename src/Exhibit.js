import React, { userState } from 'react';
import './Exhibit.css';

const Exhibit = ({ heading, children}) => {
    const [isExpanded, setIsExpanded] = useState(true);

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className="exhibit-continer">
            <div className="exhibut-header" onClick={toggleExpand}>
                <h2 className="exhibit-heading">{heading}</h2>
                <button className="exhibit-toggle">
                    {isExpanded ? '▼' : '▶'}
                </button>
            </div>
            {isExpanded && (
                <div className="exhibit-content">
                    {children}
                    </div> 
            )}
        </div>
    );
};

export default Exhibit;