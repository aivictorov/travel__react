import HeaderInner from "../components/sections/HeaderInner/HeaderInner";
import SearchForm from "../components/forms/SearchForm/SearchForm";
import ListingFilters from "../components/blocks/ListingFilters/ListingFilters";
import FlightListingCard from "../components/cards/FlightListingCard/FlightListingCard";
import ButtonShowMore from "../components/elements/ButtonShowMore/ButtonShowMore";
import Footer from "../components/sections/Footer/Footer";

import { useState, useEffect, createContext, useContext } from "react";
import { AppContext } from "../App";
import ListingSort from "../components/blocks/ListingSort/ListingSort";
import Tabs from "../components/elements/Tabs/Tabs";

export const FlightListingContext = createContext(null);

const FlightListing = () => {
    const { flights, flightSearchParams } = useContext(AppContext);
    const [searchResults, setSearchResults] = useState([]);
    const [filteredResults, setFilteredResults] = useState([]);
    const [numberOfResults, setNumberOfResults] = useState(3);

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
            sort: 'price',
            ...filterParams,
            airlines: [],
            rating: filterParams.rating.min
        }
    );

    const [resetTrigger, setResetTrigger] = useState(true);

    const [sortType, setSortType] = useState('lowest price');

    const changeFilter = (filter) => {
        setFilters({ ...filters, ...filter });
    };

    // FULL SEARCH RESULTS FOR CURRENT PARAMS
    useEffect(() => {

        // Searching for direct flights
        let directFlights = [...flights];

        if (flightSearchParams.from !== 'All') {
            directFlights = directFlights.filter((item) => {
                return flightSearchParams.from === item.from
            });
        };

        if (flightSearchParams.to !== 'All') {
            directFlights = directFlights.filter((item) => {
                return flightSearchParams.to === item.to
            });
        };

        directFlights = directFlights.filter((item) => {
            const arrayDepartDate = flightSearchParams.depart.split(['.']);
            if (item.start.getFullYear() !== parseInt(arrayDepartDate[2])) return false;
            if ((item.start.getMonth() + 1) !== parseInt(arrayDepartDate[1])) return false;
            if ((item.start.getDate()) !== parseInt(arrayDepartDate[0])) return false;
            return true;
        });

        // Searching for return flights
        let returnFlights = [];

        if (flightSearchParams.return !== '') {

            returnFlights = [...flights];

            if (flightSearchParams.from !== 'All') {
                returnFlights = returnFlights.filter((item) => {
                    return flightSearchParams.from === item.to
                });
            };

            if (flightSearchParams.to !== 'All') {
                returnFlights = returnFlights.filter((item) => {
                    return flightSearchParams.to === item.from
                });
            };

            returnFlights = returnFlights.filter((item) => {
                const arrayReturnDate = flightSearchParams.return.split(['.']);
                if (item.start.getFullYear() !== parseInt(arrayReturnDate[2])) return false;
                if ((item.start.getMonth() + 1) !== parseInt(arrayReturnDate[1])) return false;
                if ((item.start.getDate()) !== parseInt(arrayReturnDate[0])) return false;
                return true;
            });
        };

        // Creating tickets

        let flightTickets = [];

        if (flightSearchParams.return === '') {
            flightTickets = createOneWayTickets(directFlights);
        } else {
            flightTickets = createReturnTickets(directFlights, returnFlights);
        };

        function createReturnTickets(directFlights, returnFlights) {
            let results = [];

            directFlights.forEach((directFlight) => {
                const suitableReturnFlights = returnFlights.filter((returnFlight) => {
                    return returnFlight.airline === directFlight.airline;
                });

                suitableReturnFlights.forEach((suitableReturnFlight) => {
                    const item = {
                        direct: directFlight,
                        return: suitableReturnFlight,
                    }

                    item.price = item.direct.price + item.return.price;
                    item.airline = item.direct.airline;
                    item.rating = item.direct.rating;
                    item.duration = item.direct.duration + item.return.duration;

                    results.push(item);
                });
            });

            return results;
        };

        function createOneWayTickets(directFlights) {
            let results = [];

            directFlights.forEach((directFlight) => {

                const item = {
                    direct: directFlight,
                    return: [],
                }

                item.price = item.direct.price;
                item.airline = item.direct.airline;
                item.rating = item.direct.rating;
                item.duration = item.direct.duration;

                results.push(item);
            });

            return results;
        };

        setSearchResults(flightTickets);
    }, [flightSearchParams]);

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
        setResetTrigger(!resetTrigger);
    }, [filterParams])

    useEffect(() => {
        let items = [...searchResults];
        let filtered = applyFilters(items);
        let sorted = applySort(filtered)
        setFilteredResults(sorted);
    }, [filters])

    function applyFilters(items) {

        // Price filter
        if (filters.price.min) {
            items = items.filter((item) => {
                return item.price >= filters.price.min;
            })
        };

        if (filters.price.max) {
            items = items.filter((item) => {
                return item.price <= filters.price.max;
            })
        };

        // Rating filter
        items = items.filter((item) => {
            return item.rating >= filters.rating;
        });

        // Airlines filter
        if (filters.airlines.length !== 0) {
            items = items.filter((item) => {
                return filters.airlines.includes(item.airline);
            });
        };

        return items;
    };

    function applySort(items) {

        if (sortType === 'lowest price') {
            items.sort(function (a, b) {
                if (a.price > b.price) {
                    return 1;
                }
                if (a.price < b.price) {
                    return -1;
                }
                return 0;
            });
        }

        // Sorting by highest price

        if (sortType === 'highest price') {
            items.sort(function (a, b) {
                if (a.price < b.price) {
                    return 1;
                }
                if (a.price > b.price) {
                    return -1;
                }
                return 0;
            });
        };

        if (sortType === 'fastest') {
            items.sort(function (a, b) {
                if (a.duration > b.duration) {
                    return 1;
                }
                if (a.duration < b.duration) {
                    return -1;
                }
                return 0;
            });
        }

        return items;
    };

    useEffect(() => {
        let items = [...filteredResults];
        let sorted = applySort(items)
        setFilteredResults(sorted);
    }, [sortType])

    const tabs = [
        {
            title: 'Cheapest',
            subtitle: '$99, 2h 00m',
            active: false,
            action: () => { setSortType('lowest price') },
        },
        {
            title: 'Best',
            subtitle: '$199, 3h 30m',
            active: false,
            action: () => { setSortType('highest price') },
        },
        {
            title: 'Quickest',
            subtitle: '$299, 5h 00m',
            active: false,
            action: () => { setSortType('lowest price') },
        },
    ];

    return (
        <>
            <>
                <p>SEARCH PARAMS </p>
                {JSON.stringify(flightSearchParams)}
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
            </>

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
                                    layout="flights"
                                    filterParams={filterParams}
                                    changeFilter={changeFilter}
                                    resetTrigger={resetTrigger}
                                />
                            </div>
                            <div className="listing-content__right">
                                <div className="listing-content__right-wrapper">
                                    {searchResults.length > 1 &&
                                        <Tabs tabs={tabs} />
                                    }
                                    <ListingSort
                                        filteredResults={filteredResults}
                                        searchResults={searchResults}
                                        numberOfResults={numberOfResults}
                                        setNumberOfResults={setNumberOfResults}
                                        sortType={sortType}
                                        setSortType={setSortType}
                                        resetTrigger={resetTrigger}
                                        setResetTrigger={setResetTrigger}
                                    />
                                    <div className="listing-content__cards">
                                        {filteredResults.length === 0 ? "Flights not found" : null}
                                        {filteredResults.map((ticket, index) => {
                                            return (
                                                index < numberOfResults &&
                                                <FlightListingCard
                                                    key={index}
                                                    ticket={ticket}
                                                />
                                            )
                                        })}
                                    </div>
                                </div>
                                <div className="listing-content__right-button">
                                    {numberOfResults < filteredResults.length &&
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
        </>
    );
}

export default FlightListing;