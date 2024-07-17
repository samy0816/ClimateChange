import React from 'react';
import classNames from 'classnames';

interface RadioButtonProps {
    label: string;
    value: string;
    name: string;
    checked: boolean;
    color: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const RadioButton = ({ label, value, name, checked, color, onChange }: RadioButtonProps) => {
    const className = classNames('ml-3 radio', {
        'checked:bg-yellow-500 hover:checked:bg-yellow-500 valid:checked:bg-yellow-500': color === 'yellow',
        'checked:bg-orange-500 hover:checked:bg-orange-500 valid:checked:bg-orange-500': color === 'orange',
        'checked:bg-green-500 hover:checked:bg-green-500 valid:checked:bg-green-500': color === 'green',
        'checked:bg-blue-500 hover:checked:bg-blue-500 valid:checked:bg-blue-500': color === 'blue',
    });

    return (
        <div className="form-control">
            <label className="label cursor-pointer">
                <span className="label-text">{label}</span>
                <input
                    type="radio"
                    name={name}
                    value={value}
                    className={className}
                    checked={checked}
                    onChange={onChange}
                />
            </label>
        </div>
    );
};

export default RadioButton;