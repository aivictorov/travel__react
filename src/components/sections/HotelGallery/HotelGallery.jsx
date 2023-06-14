import './HotelGallery.scss';

const HotelGallery = () => {
    return (

        <section className="hotel-gallery">
            <img src="./img/hotels/hotel-example-1/gallery/01.jpg" alt="hotel" />
            <img src="./img/hotels/hotel-example-1/gallery/02.jpg" alt="hotel" />
            <img src="./img/hotels/hotel-example-1/gallery/03.jpg" alt="hotel" />
            <img src="./img/hotels/hotel-example-1/gallery/04.jpg" alt="hotel" />
            <img src="./img/hotels/hotel-example-1/gallery/05.jpg" alt="hotel" />
            <div className="hotel-gallery__button">
                <button className="button button--bold" type="button">
                    View all photos
                </button>
            </div>
        </section>
    );
}

export default HotelGallery;