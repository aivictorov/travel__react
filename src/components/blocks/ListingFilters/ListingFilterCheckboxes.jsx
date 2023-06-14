import { useContext, useEffect, useState } from "react";
import { FlightListingContext } from "../../../pages/FlightListing";
import ListingFilterHeader from './ListingFilterHeader';

const ListingFilterCheckboxes = ({ name, title, items }) => {

    const { changeFilter, resetFilters } = useContext(FlightListingContext)

    const [params, setParams] = useState([]);

    useEffect(() => {
        changeFilter({ [name]: params });
    }, [params])

    const [displayFilter, setDisplayFilter] = useState(true);

    if (items.length > 1) {
        return (
            <div className="filter-item">

                <ListingFilterHeader
                    title={title}
                    action={() => { setDisplayFilter(!displayFilter) }}
                />

                {displayFilter &&
                    <div
                        className="filter-item__content filter-item__content--column"
                        accordeon-content={name}
                    >
                        {items.map((item) => {
                            return (
                                <div
                                    className="checkbox"
                                    key={item}
                                >
                                    <label className="checkbox__label">
                                        <input
                                            className="checkbox__hidden visually-hidden"
                                            type="checkbox"
                                            name={item}
                                            onChange={(event) => {
                                                if (event.target.checked) {
                                                    setParams([...params, event.target.name])
                                                } else {
                                                    setParams(
                                                        params.filter((param) => {
                                                            return param !== event.target.name
                                                        })
                                                    )
                                                };
                                            }}
                                        />
                                        <div className="checkbox__custom" />
                                        <div className="checkbox__value">{item}</div>
                                    </label>
                                </div>
                            )
                        })}
                    </div>
                }
            </div>
        );
    }
}

export default ListingFilterCheckboxes;