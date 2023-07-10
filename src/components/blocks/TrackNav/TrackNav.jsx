import './TrackNav.scss';
import { NavLink } from 'react-router-dom';

const TrackNav = ({ layout }) => {

    let links = [];

    if (layout === 'flights') {
        links = [
            { name: 'Flight Search', link: '/flight-search' },
            { name: 'Flight Listing', link: '/flight-listing' },
            { name: 'Flight Details', link: '/flight-details' },
            { name: 'Flight Booking', link: '/flight-booking' },
        ]
    }

    if (layout === 'hotels') {
        links = [
            { name: 'Hotel Search', link: '/hotel-search' },
            { name: 'Hotel Listing', link: '/hotel-listing' },
            { name: 'Hotel Details', link: '/hotel-details' },
            { name: 'Hotel Booking', link: '/hotel-booking' },
        ]
    }

    let lastIndex = links.length;

    links.forEach((item, index) => {
        if (item.link === window.location.pathname) {
            item.link = '';
            lastIndex = index;
        }
    })

    links.splice(lastIndex + 1)

    return (
        <nav className="track-nav">
            {links.map((item, index) => {
                if (index !== lastIndex) {
                    return (
                        <NavLink key={index} className="track-nav__link" to={item.link}>
                            {item.name}
                        </NavLink>
                    )
                }
            })}
            <div className="track-nav__last">
                {links[lastIndex].name}
            </div>

        </nav>
    );
}

export default TrackNav;