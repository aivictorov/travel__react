import { useState, useEffect, createContext } from "react";
import HeaderInner from "../components/sections/HeaderInner/HeaderInner";
import FlightFilters from "../components/blocks/FlightFilters/FlightFilters";
import FlightListingCard from "../components/blocks/FlightListingCard/FlightListingCard";
import Footer from "../components/sections/Footer/Footer";

export const AppContext = createContext(null);

const FlightListing = () => {

    const flightsData = [
        { id: 0, start: '12:00 pm', end: '01:28 pm', price: 104 },
        { id: 1, start: '15:00 pm', end: '18:28 pm', price: 208 },
        { id: 2, start: '18:00 pm', end: '18:28 pm', price: 312 },
    ];

    let minPrice = flightsData.reduce((prev, curr) => curr.price < prev ? curr.price : prev, flightsData[0].price);
    let maxPrice = flightsData.reduce((prev, curr) => curr.price > prev ? curr.price : prev, flightsData[0].price);

    const [flights, setFlights] = useState(flightsData);
    const [filters, setFilter] = useState({});
    // const [fetchData, setFetchData] = useState(true);

    const changeFilter = (filter) => {
        setFilter({ ...filters, ...filter });
        console.log(filters);
        // setFetchData(value => !value);
    };

    const applyFilters = (filters) => {
        let filtered = flightsData;

        if (filters.minPrice) {
            filtered = filtered.filter((flight) => {
                return flight.price >= filters.minPrice;
            })
        };

        if (filters.maxPrice) {
            filtered = filtered.filter((flight) => {
                return flight.price <= filters.maxPrice;
            })
        };

        setFlights(filtered);
    }

    useEffect(() => {
        console.log('useEffect applied');
        applyFilters(filters)
    }, [filters]);

    return (
        <AppContext.Provider value={{ changeFilter }}>
            {JSON.stringify(filters)}
            <HeaderInner />
            <main className="listing">
                <div className="listing-form">
                    <div className="container">
                        <div className="search-form" tabs="search">
                            <div
                                className="search-form__content"
                                tab-content="flight-search"
                                tab-group="search"
                            >
                                <div className="search-form__fields">
                                    <div
                                        className="input"
                                        style={{ width: "calc((100% - 140px - 56px - 4 * 24px) / 3)" }}
                                    >
                                        <input
                                            className="input__field"
                                            type="text"
                                            defaultValue="Lahore - Karachi"
                                        />
                                        <div className="input__label">From - To</div>
                                        <button
                                            className="input__icon"
                                            type="button"
                                            data-button="swap-button"
                                        >
                                            <svg width={24} height={24}>
                                                <use href="#swap-icon"> </use>
                                            </svg>
                                        </button>
                                    </div>
                                    <div className="select" style={{ width: 140 }}>
                                        <button className="select__button" type="button">
                                            {" "}
                                            Return
                                        </button>
                                        <div className="select__label">Trip</div>
                                        <div className="select__icon">
                                            <svg width={24} height={24}>
                                                <use href="#arrow-down" />
                                            </svg>
                                        </div>
                                        <ul className="select__list">
                                            <li data-value="Return">Return</li>
                                            <li data-value="Single">Single</li>
                                        </ul>
                                        <input
                                            className="select__input-hidden"
                                            type="text"
                                            name="select-category"
                                            defaultValue=""
                                        />
                                    </div>
                                    <div
                                        className="input"
                                        style={{ width: "calc((100% - 140px - 3 * 24px) / 3)" }}
                                    >
                                        <input
                                            className="input__field"
                                            type="text"
                                            defaultValue="07 Nov 22 - 13 Nov 22"
                                        />
                                        <div className="input__label">Depart - Return</div>
                                    </div>
                                    <div
                                        className="input"
                                        style={{ width: "calc((100% - 140px - 3 * 24px) / 3)" }}
                                    >
                                        <input
                                            className="input__field"
                                            type="text"
                                            defaultValue="1 Passenger, Economy"
                                        />
                                        <div className="input__label">Passenger - Class</div>
                                    </div>
                                    <button
                                        className="square-button"
                                        type="button"
                                        style={{ width: 56, height: 56 }}
                                    >
                                        <svg width={24} height={24}>
                                            <use href="#search-icon" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="listing-content">
                    <div className="container">
                        <div className="listing-content__row">
                            <div className="listing-content__left">
                                <FlightFilters
                                    minPrice={minPrice}
                                    maxPrice={maxPrice}
                                />
                            </div>
                            <div className="listing-content__right">
                                <div className="listing-content__right-wrapper">
                                    <ul className="tabs">
                                        <button
                                            className="tabs__item"
                                            type="button"
                                            style={{ width: "calc(100% / 3)" }}
                                        >
                                            <div className="tabs__item-content">
                                                <div className="tabs__item-title">Cheapest</div>
                                                <div className="tabs__item-subtitle">$99, 2h 00m</div>
                                            </div>
                                        </button>
                                        <button
                                            className="tabs__item"
                                            type="button"
                                            style={{ width: "calc(100% / 3)" }}
                                        >
                                            <div className="tabs__item-content">
                                                <div className="tabs__item-title">Best</div>
                                                <div className="tabs__item-subtitle">$199, 3h 30m</div>
                                            </div>
                                        </button>
                                        <button
                                            className="tabs__item"
                                            type="button"
                                            style={{ width: "calc(100% / 3)" }}
                                        >
                                            <div className="tabs__item-content">
                                                <div className="tabs__item-title">Quickest</div>
                                                <div className="tabs__item-subtitle">$299, 5h 00m</div>
                                            </div>
                                        </button>
                                    </ul>
                                    <div className="listing-sort">
                                        <div className="listing-sort__left">
                                            Showing 4 of <a href="#!">257 places</a>
                                        </div>
                                        <div className="listing-sort__right">
                                            <span>Sort by </span>Recommended
                                        </div>
                                    </div>
                                    <div className="listing-content__cards">
                                        {flights.length === 0 ? "Flights not found" : null}
                                        {flights.map((flight) => {
                                            return (
                                                <FlightListingCard
                                                    key={flight.id}
                                                    start={flight.start}
                                                    end={flight.end}
                                                    price={flight.price}
                                                />
                                            )
                                        })}
                                    </div>
                                </div>
                                <div className="listing-content__right-button">
                                    <button
                                        className="button button--dark button--bold"
                                        type="button"
                                        style={{ width: "100%" }}
                                    >
                                        Show more
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </AppContext.Provider>
    );
}

export default FlightListing;