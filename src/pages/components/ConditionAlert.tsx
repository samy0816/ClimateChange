import React from "react";

interface ConditionAlertProps {
    text: string;
}

const ConditionAlert: React.FC<ConditionAlertProps> = ({ text }) => {


    return (
        <div role="alert" className="alert">
            <span>{text}</span>
        </div>
    );
}

export default ConditionAlert;
