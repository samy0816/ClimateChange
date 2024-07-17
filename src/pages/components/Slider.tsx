import React from 'react';
import NewSlider from 'rc-slider';
import 'rc-slider/assets/index.css';

interface NewSliderProps {
    value: number;
    setValue: (value: number) => void;
    min: number;
    max: number;
}

const Slider: React.FC<NewSliderProps> = ({ value, setValue, min, max }) => {
    const handleSliderChange = (newValue: number | number[]) => {
        if (typeof newValue === 'number') {
            setValue(newValue);
        }
    };

    const styles = {
        track: {
            backgroundColor: 'transparent',
        },
        rail: {
            backgroundColor: '#111113',
        },
        handle: {
            borderColor: '#000',  // handle border color
            height: 20,
            width: 20,
            marginLeft: 0,
            marginTop: -8,
            backgroundColor: '#fff',
        },
    };

    const generateMarks = (min: number, max: number) => {
        const marks: { [key: number]: React.ReactNode } = {};
        for (let i = min; i <= max; i++) {
            const color = i === 0 ? 'white' : i < 0 ? 'red' : 'green';
            marks[i] = <span style={{ color }}>{Math.abs(i)}</span>;
        }
        return marks;
    };

    const marks = generateMarks(min, max);

    return (
        <div className="p-4">
            <NewSlider
                min={min}
                max={max}
                marks={marks}
                step={1}
                defaultValue={value}
                styles={styles}
                onChange={handleSliderChange}
            />
        </div>
    );
};

export default Slider;