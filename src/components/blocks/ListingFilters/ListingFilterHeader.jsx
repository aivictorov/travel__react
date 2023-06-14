const ListingFilterHeader = ({ title, action }) => {

    return (
        <div className="filter-item__header">
            <h4 className="filter-item__title">
                {title}
            </h4>
            <button
                className="filter-item__button"
                type="button"
                onClick={action}
            >
                <svg width={24} height={24}>
                    <use href="#arrow-down" />
                </svg>
            </button>
        </div>
    );
}

export default ListingFilterHeader;