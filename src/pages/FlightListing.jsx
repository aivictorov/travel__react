import HeaderInner from "../components/sections/HeaderInner/HeaderInner";
import SearchForm from "../components/blocks/SearchForm/SearchForm";
import ListingFilters from "../components/blocks/ListingFilters/ListingFilters";
import FlightListingCard from "../components/blocks/FlightListingCard/FlightListingCard";
import ButtonShowMore from "../components/elements/ButtonShowMore/ButtonShowMore";
import Footer from "../components/sections/Footer/Footer";

import { useState, useEffect, createContext, useContext } from "react";
import { AppContext } from "../App";
// import data from './../helpers/data';

export const FlightListingContext = createContext(null);

const FlightListing = () => {
    const { flights, searchParams } = useContext(AppContext);

    const [searchResults, setSearchResults] = useState([]);
    const [filteredResults, setFilteredResults] = useState([]);
    const [visibleResults, setVisibleResults] = useState([]);

    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(0);

    const [filters, setFilter] = useState(
        {
            price: { min: 0, max: 0 }
        }
    );

    const [filterParams, setFilterParams] = useState(
        {
            price: { min: 0, max: 0 },
        }
    );

    const [numberOfResults, setNumberOfResults] = useState(3);


    // FULL SEARCH RESULTS FOR CURRENT PARAMS
    useEffect(() => {
        const newSearchResults = flights.filter((item) => {
            return searchParams.from === item.from
        });
        setSearchResults(newSearchResults);
    }, [searchParams]);

    // FILTERED SEARCH RESULTS
    useEffect(() => {
        defineFilterParams()
        applyFilters()
    }, [searchResults, filters])

    function defineFilterParams() {
        if (searchResults.length > 1) {
            // setRenderFiltersFlag(true);
            const newMinPrice = searchResults.reduce((prev, curr) => curr.price < prev ? curr.price : prev, searchResults[0].price);
            const newMaxPrice = searchResults.reduce((prev, curr) => curr.price > prev ? curr.price : prev, searchResults[0].price);
            setMinPrice(newMinPrice);
            setMaxPrice(newMaxPrice);

            setFilterParams({...filterParams, price: { min: newMinPrice, max: newMaxPrice },})
        };
    };

    function applyFilters() {
        let newFilteredResults = searchResults.slice(0);

        if (filters.price.min) {
            newFilteredResults = newFilteredResults.filter((flight) => {
                return flight.price >= filters.price.min;
            })
        };

        if (filters.price.max) {
            newFilteredResults = newFilteredResults.filter((flight) => {
                return flight.price <= filters.price.max;
            })
        };
        
        setFilteredResults(newFilteredResults);
    };

    // VISIBLE
    useEffect(() => {
        const visibleResults = filteredResults.filter((item, index) => {
            return index < numberOfResults
        });
        setVisibleResults(visibleResults);
    }, [filteredResults, numberOfResults])



    const [renderFiltersFlag, setRenderFiltersFlag] = useState(true);

    const changeFilter = (filter) => {
        setFilter({ ...filters, ...filter });
    };

    // OTHER
    // const [airlineFilterItems, setAirlineFilterItems] = useState([]);
    // const [ratingFilterItems, setRatingFilterItems] = useState([]);

    // const [minDepartureTime, setMinDepartureTime] = useState(0);
    // const [maxDepartureTime, setMaxDepartureTime] = useState(1440);



    // useEffect(() => {
    //     setNumberOfResults(1);

    //     if (searchResults.length > 1) {
    //         setRenderFiltersFlag(true);

    //         const newMinPrice = searchResults.reduce((prev, curr) => curr.price < prev ? curr.price : prev, searchResults[0].price);
    //         const newMaxPrice = searchResults.reduce((prev, curr) => curr.price > prev ? curr.price : prev, searchResults[0].price);
    //         setMinPrice(newMinPrice);
    //         setMaxPrice(newMaxPrice);

    //         let arrAirlines = [];
    //         searchResults.forEach((item) => {
    //             arrAirlines.push(item.airline);
    //         });
    //         setAirlineFilterItems(arrAirlines);

    //         let arrRatings = [];
    //         searchResults.forEach((item) => {
    //             console.log(item.rating);
    //             arrRatings.push(item.rating);
    //         });
    //         setRatingFilterItems(arrRatings);
    //     };
    // }, [searchResults])

    // Filters


    return (
        <FlightListingContext.Provider value={{ minPrice, maxPrice }}>
            <p>SEARCH PARAMS </p>
            {JSON.stringify(searchParams)}
            <br />
            <br />

            <p>SEARCH RESULTS </p>
            {JSON.stringify(searchResults.length)}
            <br />
            <br />

            <p>FILTER PARAMS </p>
            {JSON.stringify(filterParams)}
            <br />
            <br />

            <p>FILTERS </p>
            {JSON.stringify(filters)}
            <br />
            <br />

            <p>FILTERED </p>
            {JSON.stringify(filteredResults.length)}
            <br />
            <br />

            <p>VISIBLE </p>
            {JSON.stringify(visibleResults.length)}
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
                                    renderFiltersFlag={renderFiltersFlag}
                                    changeFilter={changeFilter}
                                // airlineFilterItems={airlineFilterItems}
                                // ratingFilterItems={ratingFilterItems}
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
                                            Showing {visibleResults.length} of <a href="#!">{filteredResults.length} flights</a>
                                        </div>
                                        <div className="listing-sort__right">
                                            <span>Sort by </span>Recommended
                                        </div>
                                    </div>
                                    <div className="listing-content__cards">
                                        {visibleResults.length === 0 ? "Flights not found" : null}
                                        {visibleResults.map((flight) => {
                                            return (
                                                <FlightListingCard
                                                    key={flight.id}
                                                    id={flight.id}
                                                    start={flight.start}
                                                    end={flight.end}
                                                    airline={flight.airline}
                                                    logo={flight.logo}
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