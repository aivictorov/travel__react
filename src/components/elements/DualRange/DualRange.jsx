import './DualRange.scss';

const DualRange = ({ min, max, valueOne, valueTwo, valueOneFormatted, valueTwoFormatted, actionOne, actionTwo }) => {

    // function dualRangeInputs() {
    //     const dualRangeInputs = document.querySelectorAll('.dual-range-input');

    //     dualRangeInputs.forEach((input) => {
    //         const rangeOne = input.querySelector('[data-name="range-1"]');
    //         const rangeTwo = input.querySelector('[data-name="range-2"]');
    //         const valueOne = input.querySelector('[data-name="value-1"]');
    //         const valueTwo = input.querySelector('[data-name="value-2"]');
    //         const minGap = 0;
    //         const track = input.querySelector('[data-name="track"]');
    //         const minValue = rangeOne.min;
    //         const maxValue = rangeOne.max;

    //         slideOne();
    //         slideTwo();

    //         rangeOne.addEventListener('input', slideOne);
    //         rangeTwo.addEventListener('input', slideTwo);

    //         function slideOne() {
    //             if (parseInt(rangeTwo.value) - parseInt(rangeOne.value) <= minGap) {
    //                 rangeOne.value = parseInt(rangeTwo.value) - minGap;
    //             }
    //             valueOne.textContent = formatValue(rangeOne.value);
    //             fillColor();
    //         };

    //         function slideTwo() {
    //             if (parseInt(rangeTwo.value) - parseInt(rangeOne.value) <= minGap) {
    //                 rangeTwo.value = parseInt(rangeOne.value) - minGap;
    //             }
    //             valueTwo.textContent = formatValue(rangeTwo.value);
    //             fillColor();
    //         };

    //         function fillColor() {
    //             const percent1 = (rangeOne.value - minValue) / (maxValue - minValue) * 100;
    //             const percent2 = (rangeTwo.value - minValue) / (maxValue - minValue) * 100;
    //             track.style.background = `linear-gradient(to right, #E1E1E1 ${percent1}%,  #112211 ${percent1}%,
    //                         #112211 ${percent2}%,  #E1E1E1 ${percent2}%)`;
    //         };

    //         function formatValue(value) {
    //             return value + '$';
    //         };
    //     })
    // };

    return (
        <div className="dual-range-input">
            <div className="dual-range-input__track-wrapper">
                <div
                    className="dual-range-input__track"
                    data-name="track"
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