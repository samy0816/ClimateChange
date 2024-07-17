import React, {useEffect, useState} from 'react';

type SelectProps = {
    question: string;
    options: string[];
    onSelect: (answer: string) => void;
    disabled: boolean;
    correct: boolean | null;
    reason: string;
    hint: string;
    category: string;
};

const Select = ({question, options, onSelect, disabled, correct, reason, hint, category}: SelectProps) => {
    const [selectedOption, setSelectedOption] = useState<string | null>(null);

    useEffect(() => {
        if (correct === null) {
            setSelectedOption(null);
        }
    }, [correct]);

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const value = event.target.value;
        setSelectedOption(value);
        onSelect(value);
    };

    return (
        <div className="space-y-2">
            <p className="font-medium">{question}</p>
            <select
                className="select select-bordered w-full"
                onChange={handleChange}
                value={selectedOption ?? ''}
                disabled={disabled}
            >
                <option value="" disabled>
                    Select an option
                </option>
                {options.map(option => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>
            {correct !== null && (
                <div>
                    {correct ? (
                        <div className="text-green-500">
                            Correct! {reason}
                        </div>
                    ) : (
                        <div className="text-red-500">
                            <p>Incorrect. Try again. {hint}</p>
                            <p>Here you can find more information:
                                <a
                                    href={category === 'Tectonics' ? '/tectonics' : '/global'}
                                    target="_blank"
                                    className="underline ml-1"
                                >
                                    {category === 'Tectonics' ? 'Plate Tectonics - Reading' : 'Global Change - Reading'}
                                </a>
                            </p>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default Select;