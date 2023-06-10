import { useEffect, useState } from "react";

const ListingFilterCheckboxes = ({ name, title, items = [], changeFilter }) => {

    const [params, setParams] = useState([]);

    useEffect(() => {
        changeFilter({ [name]: params });
    }, [params])

    if (items.length > 1) {
        return (
            <div className="filter-item">
                <div className="filter-item__header">
                    <h4 className="filter-item__title">
                        {title}
                    </h4>
                    <button
                        className="filter-item__button"
                        type="button"
                        accordeon-button={name}
                    >
                        <svg width={24} height={24}>
                            <use href="#arrow-down" />
                        </svg>
                    </button>
                </div>
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
            </div>
        );
    }
}

export default ListingFilterCheckboxes;