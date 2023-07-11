import './TrackNav.scss';
import { NavLink } from 'react-router-dom';

const TrackNav = ({ layout }) => {

    let links = [];

    if (layout === 'flights') {
        links = [
            { name: 'Home', link: '/' },
            { name: 'Flight Search', link: '/flight-search' },
            { name: 'Listing', link: '/flight-listing' },
            { name: 'Details', link: '/flight-details' },
            { name: 'Booking', link: '/flight-booking' },
        ]
    }

    if (layout === 'hotels') {
        links = [
            { name: 'Home', link: '/' },
            { name: 'Hotel Search', link: '/hotel-search' },
            { name: 'Listing', link: '/hotel-listing' },
            { name: 'Details', link: '/hotel-details' },
            { name: 'Booking', link: '/hotel-booking' },
        ]
    }

    let lastIndex = links.length;


    links.forEach((item, index) => {
        // if (item.link === window.location.pathname) {
        if (item.link === window.location.hash.substring(1)) {
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