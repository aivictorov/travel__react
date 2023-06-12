import { useContext, useEffect, useState } from "react";
import { FlightListingContext } from "../../../pages/FlightListing";

const ListingFilterDualRange = ({ name, title, min, max, format }) => {

    const { changeFilter, resetFilters } = useContext(FlightListingContext)

    let formatValue, flag = true;

    if (format === 'price') {
        formatValue = formatPrice;
    } else if (format === 'time') {
        formatValue = formatTime;
    } else {
        flag = false;
    }

    const [valueOne, setValueOne] = useState(0);
    const [valueTwo, setValueTwo] = useState(0);
    const [valueOneFormatted, setValueOneFormatted] = useState(0);
    const [valueTwoFormatted, setValueTwoFormatted] = useState(0);
    const [searchParams, setSearchParams] = useState({ min: 0, max: 0 });

    useEffect(() => {
        setValueOne(min);
    }, [min, resetFilters])

    useEffect(() => {
        setValueTwo(max);
    }, [max, resetFilters])

    useEffect(() => {
        setValueOneFormatted(formatValue(valueOne));
    }, [valueOne])

    useEffect(() => {
        setValueTwoFormatted(formatValue(valueTwo));
    }, [valueTwo])

    function formatPrice(value) {
        return value + '$'
    };

    function formatTime(value) {
        const hours = parseInt(value / 60);
        let minutes = parseInt(value % 60);
        if (minutes < 10) {
            minutes = '0' + minutes;
        }
        return `${hours}h ${minutes}m`
    };

    useEffect(() => {
        changeFilter({ [name]: searchParams });
    }, [searchParams]);

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

    if (flag && (max - min > 0)) {
        return (
            <div className="filter-item">
                <div className="filter-item__header">
                    <h4 className="filter-item__title">
                        {title}
                    </h4>
                    <button
                        className="filter-item__button"
                        type="button"
                        accordeon-button={name}
                    >
                        <svg width={24} height={24}>
                            <use href="#arrow-down" />
                        </svg>
                    </button>
                </div>
                <div
                    className="filter-item__content filter-item__content--column"
                    accordeon-content={name}
                >
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
                                // defaultValue={min}
                                step={1}
                                onChange={(event) => {
                                    setValueOne(event.target.value);
                                    setSearchParams({ ...searchParams, 'min': event.target.value });
                                }}
                            />
                            <input
                                data-name="range-2"
                                type="range"
                                min={min}
                                max={max}
                                value={valueTwo}
                                // defaultValue={max}
                                step={1}
                                onChange={(event) => {
                                    setValueTwo(event.target.value);
                                    setSearchParams({ ...searchParams, 'max': event.target.value });
                                }}
                            />
                        </div>
                        <div className="dual-range-input__values">
                            <span data-name="value-1">{valueOneFormatted}</span>
                            <span data-name="value-2">{valueTwoFormatted}</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
};

export default ListingFilterDualRange;