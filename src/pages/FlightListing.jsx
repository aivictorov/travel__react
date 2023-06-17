import HeaderInner from "../components/sections/HeaderInner/HeaderInner";
import SearchForm from "../components/forms/SearchForm/SearchForm";
import ListingFilters from "../components/blocks/ListingFilters/ListingFilters";
import FlightListingCard from "../components/blocks/FlightListingCard/FlightListingCard";
import ButtonShowMore from "../components/elements/ButtonShowMore/ButtonShowMore";
import Footer from "../components/sections/Footer/Footer";

import { useState, useEffect, createContext, useContext } from "react";
import { AppContext } from "../App";
import ListingSort from "../components/blocks/ListingSort/ListingSort";
import Tabs from "../components/elements/Tabs/Tabs";

export const FlightListingContext = createContext(null);

const FlightListing = () => {
    const { flights, searchParams } = useContext(AppContext);

    const [searchResults, setSearchResults] = useState([]);
    const [filteredResults, setFilteredResults] = useState([]);
    const [visibleResults, setVisibleResults] = useState([]);

    const [filterParams, setFilterParams] = useState(
        {
            price: { min: 0, max: 0 },
            depature: { min: 0, max: 0 },
            arrival: { min: 0, max: 0 },
            airlines: [],
            rating: { min: 0, max: 0 }
        }
    );
    const [filters, setFilters] = useState(
        {
            ...filterParams,
            airlines: [],
            rating: filterParams.rating.min
        }
    );
    const [resetFilters, setResetFilters] = useState(true);

    const [numberOfResults, setNumberOfResults] = useState(3);

    // FULL SEARCH RESULTS FOR CURRENT PARAMS
    useEffect(() => {
        let newSearchResults = flights.slice(0);

        if (searchParams.from !== 'All') {
            newSearchResults = newSearchResults.filter((item) => {
                return searchParams.from === item.from
            });
        };

        if (searchParams.to !== 'All') {
            newSearchResults = newSearchResults.filter((item) => {
                return searchParams.to === item.to
            });
        };

        setSearchResults(newSearchResults);
    }, [searchParams]);

    // FILTERED SEARCH RESULTS
    useEffect(() => {
        defineFilterParams()
    }, [searchResults])

    function defineFilterParams() {
        // Default params
        let minPrice = 0, maxPrice = 0;
        let airlinesList = [];
        let minRating = 0, maxRating = 0;

        // Defining new params
        if (searchResults.length > 1) {

            // New price filter params 
            minPrice = searchResults.reduce((prev, curr) => curr.price < prev ? curr.price : prev, searchResults[0].price);
            maxPrice = searchResults.reduce((prev, curr) => curr.price > prev ? curr.price : prev, searchResults[0].price);

            // Airlines filter
            searchResults.forEach((item) => {
                if (!airlinesList.includes(item.airline)) airlinesList.push(item.airline);
            });
            airlinesList.sort();

            // Rating filter
            minRating = searchResults.reduce((prev, curr) => curr.rating < prev ? curr.rating : prev, searchResults[0].rating);
            maxRating = searchResults.reduce((prev, curr) => curr.rating > prev ? curr.rating : prev, searchResults[0].rating)
        };

        // Set filter params
        setFilterParams(
            {
                price: { min: minPrice, max: maxPrice },
                depature: { min: 0, max: 0 },
                arrival: { min: 0, max: 0 },
                airlines: airlinesList,
                rating: { min: minRating, max: maxRating }
            }
        );
    };

    useEffect(() => {
        setFilters(
            {
                ...filterParams,
                airlines: [],
                rating: filterParams.rating.min
            }
        );
        setResetFilters(!resetFilters);
    }, [filterParams])

    useEffect(() => {
        applyFilters()
    }, [filters])

    function applyFilters() {
        let newFilteredResults = searchResults.slice(0);

        // Price filter
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

        // Rating filter
        newFilteredResults = newFilteredResults.filter((item) => {
            return item.rating >= filters.rating;
        });

        // Airlines filter
        if (filters.airlines.length !== 0) {
            newFilteredResults = newFilteredResults.filter((item) => {
                return filters.airlines.includes(item.airline);
            });
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

    const changeFilter = (filter) => {
        setFilters({ ...filters, ...filter });
    };


    // --------------------------DEV--------------------------
    // SORTING
    function sortByPrice() {
        alert('sortByPrice')

        let newSearchResults = searchResults.slice(0);

        newSearchResults.sort(function (a, b) {
            if (a.price > b.price) {
                return 1;
            }
            if (a.price < b.price) {
                return -1;
            }
            return 0;
        });

        setSearchResults(newSearchResults);
    };
    // --------------------------DEV--------------------------


    const tabs = [
        {
            title: 'Cheapest',
            subtitle: '$99, 2h 00m',
            active: false,
            action: sortByPrice,
        },
        {
            title: 'Best',
            subtitle: '$199, 3h 30m',
            active: false,
            action: sortByPrice,
        },
        {
            title: 'Quickest',
            subtitle: '$299, 5h 00m',
            active: false,
            action: sortByPrice,
        },
    ];

    return (
        <FlightListingContext.Provider value={{ changeFilter, resetFilters }}>
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
                                <div className="listing-filters">
                                    <h3 className="listing-filters__title">
                                        Filters
                                    </h3>
                                    {searchResults.length > 1 &&
                                        <ListingFilters
                                            changeFilter={changeFilter}
                                            filterParams={filterParams}
                                        />
                                    }

                                    {searchResults.length <= 1 &&
                                        <p>No available filters</p>
                                    }
                                </div>
                            </div>

                            <div className="listing-content__right">
                                <div className="listing-content__right-wrapper">
                                    
                                    {searchResults.length > 1 &&
                                        <Tabs tabs={tabs} />
                                    }

                                    <ListingSort
                                        visibleResults={visibleResults}
                                        filteredResults={filteredResults}
                                        numberOfResults={numberOfResults}
                                        setNumberOfResults={setNumberOfResults}
                                    />

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
                                    {visibleResults < filteredResults &&
                                        <ButtonShowMore
                                            numberOfResults={numberOfResults}
                                            setNumberOfResults={setNumberOfResults}
                                        />
                                    }
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