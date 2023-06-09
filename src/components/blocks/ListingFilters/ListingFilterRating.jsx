const ListingFilterRating = ({ name, title, items = [], changeFilter }) => {
    return (
        <div className="filter-item">
            <div className="filter-item__header">
                <h4 className="filter-item__title">{title}</h4>
                <button
                    className="filter-item__button"
                    type="button"
                    accordeon-button="Rating"
                >
                    <svg width={24} height={24}>
                        <use href="#arrow-down" />
                    </svg>
                </button>
            </div>
            <div
                className="filter-item__content filter-item__content--row"
                accordeon-content="Rating"
            >
                {items.map((item) => {
                    return (
                        <div
                            className="rating-filter-checkbox"
                            key={item}
                        >
                            <label className="rating-filter-checkbox__label">
                                <input
                                    className="rating-filter-checkbox__hidden visually-hidden"
                                    name={name}
                                    type="radio"
                                    value={item}
                                    onChange={(event) => { changeFilter({ [name]: event.target.value }) }}
                                />
                                <div
                                    className="rating-filter-checkbox__custom"
                                    style={{ width: 40 }}
                                >
                                    {item}
                                </div>
                            </label>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default ListingFilterRating;