import './ListingFilterRadioButtons.scss';
import { useState } from "react";
import ListingFilterHeader from './ListingFilterHeader';

const ListingFilterRadioButtons = ({ name, title, min, max, changeFilter, resetTrigger }) => {
    const [displayFilter, setDisplayFilter] = useState(true);

    if (max - min >= 1) {
        const buttons = [];

        for (let index = Math.floor(min); index <= Math.floor(max); index++) {
            let item;

            if (index != max) {
                item = { value: index, text: `${index}+` };
            } else {
                item = { value: index, text: index };
            };

            buttons.push(item);
        }

        return (
            <div className="filter-item">

                <ListingFilterHeader
                    title={title}
                    action={() => { setDisplayFilter(!displayFilter) }}
                />

                {displayFilter &&
                    <div
                        className="filter-item__content filter-item__content--wrap"
                        accordeon-content="Rating"
                    >
                        {buttons.map((button) => {
                            return (
                                <div
                                    className="rating-filter-checkbox"
                                    key={button.value}
                                >
                                    <label className="rating-filter-checkbox__label">
                                        <input
                                            className="rating-filter-checkbox__hidden visually-hidden"
                                            name={name}
                                            type="radio"
                                            value={button.value}
                                            onChange={(event) => { changeFilter({ [name]: event.target.value }) }}
                                        />
                                        <div
                                            className="rating-filter-checkbox__custom"
                                            style={{ width: 40 }}
                                        >
                                            {button.text}
                                        </div>
                                    </label>
                                </div>
                            )
                        })}
                    </div>
                }
            </div>
        );
    };
}

export default ListingFilterRadioButtons;