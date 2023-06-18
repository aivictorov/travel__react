import { useContext, useEffect, useState } from "react";
import { FlightListingContext } from "../../../pages/FlightListing";
import ListingFilterHeader from './ListingFilterHeader';
import DualRange from './../../elements/DualRange/DualRange';

const ListingFilterDualRange = ({ name, title, min, max, format, changeFilter, resetTrigger}) => {

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
    }, [min, resetTrigger])

    useEffect(() => {
        setValueTwo(max);
    }, [max, resetTrigger])

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

    const [displayFilter, setDisplayFilter] = useState(true);

    if (flag && (max - min > 0)) {
        return (
            <div className="filter-item">
                <ListingFilterHeader
                    title={title}
                    action={() => { setDisplayFilter(!displayFilter) }}
                />

                {displayFilter &&
                    <DualRange
                        min={min}
                        max={max}
                        valueOne={valueOne}
                        valueTwo={valueTwo}
                        valueOneFormatted={valueOneFormatted}
                        valueTwoFormatted={valueTwoFormatted}
                        actionOne={(event) => {
                            setValueOne(event.target.value);
                            setSearchParams({ ...searchParams, 'min': event.target.value });
                        }}
                        actionTwo={(event) => {
                            setValueTwo(event.target.value);
                            setSearchParams({ ...searchParams, 'max': event.target.value });
                        }}
                    />
                }
            </div>
        );
    };
};

export default ListingFilterDualRange;