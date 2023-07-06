import './DualRange.scss';
import { useEffect, useRef } from 'react';

const DualRange = ({
    min,
    max,
    valueOne,
    setValueOne,
    valueTwo,
    setValueTwo,
    valueOneFormatted,
    valueTwoFormatted,
    actionOne,
    actionTwo
}) => {

    const trackRef = useRef();

    const minGap = 0;

    useEffect(() => {
        slideOne();
        slideTwo();
    }, [valueOne, valueTwo])

    function slideOne() {
        if (parseInt(valueTwo) - parseInt(valueOne) <= minGap) {
            setValueOne(parseInt(valueTwo) - minGap);
        }
        fillColor();
    };

    function slideTwo() {
        if (parseInt(valueTwo) - parseInt(valueOne) <= minGap) {
            setValueTwo(parseInt(valueOne) - minGap);
        }
        fillColor();
    };

    function fillColor() {
        const percent1 = (valueOne - min) / (max - min) * 100;
        const percent2 = (valueTwo - min) / (max - min) * 100;
        trackRef.current.style.background = `linear-gradient(to right, #E1E1E1 ${percent1}%, #112211 ${percent1}%, #112211 ${percent2}%, #E1E1E1 ${percent2}%)`;
    };

    return (
        <div className="dual-range-input">
            <div className="dual-range-input__track-wrapper">
                <div
                    className="dual-range-input__track"
                    ref={trackRef}
                />
                <input
                    data-name="range-1"
                    type="range"
                    min={min}
                    max={max}
                    value={valueOne}
                    step={1}
                    onChange={actionOne}
                />
                <input
                    data-name="range-2"
                    type="range"
                    min={min}
                    max={max}
                    value={valueTwo}
                    step={1}
                    onChange={actionTwo}
                />
            </div>
            <div className="dual-range-input__values">
                <span data-name="value-1">{valueOneFormatted}</span>
                <span data-name="value-2">{valueTwoFormatted}</span>
            </div>
        </div>
    );
}

export default DualRange;