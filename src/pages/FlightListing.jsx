import HeaderInner from "../components/sections/HeaderInner/HeaderInner";
import SearchForm from "../components/blocks/SearchForm/SearchForm";
import ListingFilters from "../components/blocks/ListingFilters/ListingFilters";
import FlightListingCard from "../components/blocks/FlightListingCard/FlightListingCard";
import ButtonShowMore from "../components/elements/ButtonShowMore/ButtonShowMore";
import Footer from "../components/sections/Footer/Footer";

import { useState, useEffect, createContext, useContext } from "react";
import { AppContext } from "../App";
import data from './../helpers/data';

export const FlightListingContext = createContext(null);

const FlightListing = () => {
    const { searchParams } = useContext(AppContext);

    const [searchResults, setSearchResults] = useState([]);
    const [numberOfResults, setNumberOfResults] = useState(1);
    const [visibleFlights, setVisibleFlights] = useState([]);
    const [airlineFilterItems, setAirlineFilterItems] = useState([]);

    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(0);

    const [minDepartureTime, setMinDepartureTime] = useState(0);
    const [maxDepartureTime, setMaxDepartureTime] = useState(1440);

    useEffect(() => {
        const newSearchResults = data.filter((item) => {
            return searchParams.from === item.from
        });
        setSearchResults(newSearchResults);
    }, [searchParams]);

    useEffect(() => {
        setNumberOfResults(1);

        if (searchResults.length > 0) {
            const newMinPrice = searchResults.reduce((prev, curr) => curr.price < prev ? curr.price : prev, searchResults[0].price);
            const newMaxPrice = searchResults.reduce((prev, curr) => curr.price > prev ? curr.price : prev, searchResults[0].price);
            setMinPrice(newMinPrice);
            setMaxPrice(newMaxPrice);
        };

        let arr = [];
        searchResults.forEach((item) => {
            arr.push(item.airline);
        });
        setAirlineFilterItems(arr);
    }, [searchResults])

    useEffect(() => {
        const visibleResults = searchResults.filter((item, index) => {
            return index < numberOfResults
        });
        setVisibleFlights(visibleResults);
    }, [searchResults, numberOfResults])

    // Filters

    const [filters, setFilter] = useState({});

    const changeFilter = (filter) => {
        setFilter({ ...filters, ...filter });
    };

    useEffect(() => {
        applyFilters(filters)
    }, [filters]);

    const applyFilters = (filters) => {
        // let filteredFlights = searchResults;

        // if (filters.minPrice) {
        //     filteredFlights = filteredFlights.filter((flight) => {
        //         return flight.price >= filters.minPrice;
        //     })
        // };

        // if (filters.maxPrice) {
        //     filteredFlights = filteredFlights.filter((flight) => {
        //         return flight.price <= filters.maxPrice;
        //     })
        // };
        // setVisibleFlights(filteredFlights);
    }

    return (
        <FlightListingContext.Provider value={{ minPrice, maxPrice, minDepartureTime, maxDepartureTime }}>
            <p>SEARCH PARAMS </p>
            {JSON.stringify(searchParams)}
            <br />
            <br />
            <p>FILTERS </p> 
            {JSON.stringify(filters)}
            <br />
            <br />
            <p>VISIBLE </p>
            {JSON.stringify(visibleFlights)}
            <br />
            <br />

            <HeaderInner />
            <main className="listing">
                <div className="listing-form">
                    <div className="container">
                        <SearchForm page="flight-listing" />
                    </div>
                </div>
                <div className="listing-content">
                    <div className="container">
                        <div className="listing-content__row">
                            <div className="listing-content__left">

                                <ListingFilters
                                    changeFilter={changeFilter}
                                    airlineFilterItems={airlineFilterItems}
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
                                            Showing {visibleFlights.length} of <a href="#!">{searchResults.length} flights</a>
                                        </div>
                                        <div className="listing-sort__right">
                                            <span>Sort by </span>Recommended
                                        </div>
                                    </div>
                                    <div className="listing-content__cards">
                                        {visibleFlights.length === 0 ? "Flights not found" : null}
                                        {visibleFlights.map((flight) => {
                                            return (
                                                <FlightListingCard
                                                    key={flight.id}
                                                    id={flight.id}
                                                    start={flight.start}
                                                    end={flight.end}
                                                    price={flight.price}
                                                    rating={flight.rating}
                                                />
                                            )
                                        })}
                                    </div>
                                </div>
                                <div className="listing-content__right-button">
                                    <ButtonShowMore
                                        numberOfResults={numberOfResults}
                                        setNumberOfResults={setNumberOfResults}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </FlightListingContext.Provider>
    );
}

export default FlightListing;