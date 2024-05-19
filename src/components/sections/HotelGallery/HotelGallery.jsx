import './HotelGallery.scss';
import { useContext } from 'react';
import { AppContext } from './../../../App';
import Button from './../../elements/Button/Button';

const HotelGallery = ({ id = 0 }) => {
    const { hotels } = useContext(AppContext);
    const hotel = hotels.find((hotel) => hotel.id === id);

    return (
        <section className="hotel-gallery">
            {hotel.gallery.map((image, index) => {
                return (
                    <div className="hotel-gallery__item">
                        <img
                            key={index}
                            src={image}
                            alt={hotel.name}
                        />
                    </div>
                )
            })}
            <div className="hotel-gallery__button">
                <Button text="View all photos" classes="bold" />
            </div>
        </section>
    );
}

export default HotelGallery;