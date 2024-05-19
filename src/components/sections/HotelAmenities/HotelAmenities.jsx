import './HotelAmenities.scss';
import { useState } from 'react';

const HotelAmenities = ({ amenities }) => {
    const [numberOfResults, setNumberOfResults] = useState(8)

    return (
        <section className="hotel-amenities">
            <h2 className="hotel-amenities__title">Amenities</h2>
            <ul className="hotel-amenities__list">
                {amenities.map((item, index) => {
                    return (
                        index < numberOfResults &&
                        <li
                            className="hotel-amenities__item"
                            key={index}
                        >
                            <div className="hotel-amenities__item-icon">
                                <svg width="24" height="24">
                                    <use href={`#${item.svgID}`} />
                                </svg>
                            </div>
                            <div className="hotel-amenities__item-title">
                                {item.name}
                            </div>
                        </li>
                    )
                })}
                <li className="hotel-amenities__item">
                    {(amenities.length - numberOfResults) > 0 &&
                        <button
                            className="hotel-amenities__show-more"
                            type="button"
                            onClick={() => { setNumberOfResults(amenities.length) }}
                        >
                            {`+${amenities.length - numberOfResults} more`}
                        </button>
                    }
                </li>
            </ul>
        </section>
    );
}

export default HotelAmenities;