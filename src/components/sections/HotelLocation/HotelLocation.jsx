import './HotelLocation.scss';
import { NavLink } from 'react-router-dom';
import Button from '../../elements/Button/Button';
import Location from '../../elements/Location/Location';

const HotelLocation = ({ address }) => {

    return (
        <section className="hotel-location">
            <div className="hotel-location__header">
                <h2 className="hotel-location__title">Location/Map</h2>
                <NavLink to="https://goo.gl/maps/FvWwt6AEmrsMRzEp6" target="_blank">
                    <Button
                        text="View on google maps"
                        classes="bold"
                    />
                </NavLink>
            </div>
            <div className="hotel-location__map">
                <iframe
                    title="map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3009.555711364084!2d28.985829575075908!3d41.034975117782125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab7f1fe239f43%3A0x54477a917ddd623d!2sCVK%20Park%20Bosphorus%20Hotel%20Istanbul!5e0!3m2!1sen!2sge!4v1687283414694!5m2!1sen!2sge"
                    // width={600}
                    height={450}
                    style={{ width: '100%', border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                />
            </div>
            <Location
                text={address}
                link="https://goo.gl/maps/FvWwt6AEmrsMRzEp6"
            />
        </section>
    );
}

export default HotelLocation;