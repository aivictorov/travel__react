import './ListingSort.scss';

const ListingSort = ({ visibleResults, filteredResults, numberOfResults, setNumberOfResults }) => {
    return (
        <div className="listing-sort">
            <div className="listing-sort__left">
                Showing {visibleResults.length} of <a href="#!">{filteredResults.length} flights</a>
            </div>
            <div className="listing-sort__right">
                <span>Sort by </span>Recommended
                <span> & Display by: </span>
                <select
                    value={numberOfResults}
                    onChange={(event) => setNumberOfResults(parseInt(event.target.value))}
                >
                    <option value="1">1</option>
                    <option value="3">3</option>
                    <option value="5">5</option>
                    <option value="10">10</option>
                </select>
            </div>
        </div>
    );
}

export default ListingSort;