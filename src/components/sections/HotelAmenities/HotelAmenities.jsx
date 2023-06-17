import './HotelAmenities.scss';
import { useContext } from 'react';
import { AppContext } from './../../../App';

const HotelAmenities = ({ amenities }) => {

    return (
        <section className="hotel-amenities">
            <h2 className="hotel-amenities__title">Amenities</h2>

            <ul className="hotel-amenities__list" style={{ maxHeight: 240 }}>

                {amenities.map((item, index) => {
                    return (
                        <li
                            className="hotel-amenities__item"
                            key={index}
                        >
                            <div className="hotel-amenities__item-icon">
                                <svg width={24} height={24}>
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
                    <a className="hotel-amenities__link" href="#!">
                        +24 more
                    </a>
                </li>
            </ul>
        </section>
    );
}

export default HotelAmenities;