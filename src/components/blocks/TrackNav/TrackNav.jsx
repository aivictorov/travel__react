import './TrackNav.scss';

const TrackNav = () => {
    return (
        <nav className="track-nav">
            <a className="track-link" href="#!">
                Turkey
            </a>
            <svg width={16} height={16}>
                <use href="#arrow-right" />
            </svg>
            <a className="track-link" href="#!">
                Istanbul
            </a>
            <svg width={16} height={16}>
                <use href="#arrow-right" />
            </svg>
            <a className="track-link track-link--active" href="#!">
                CVK Park Bosphorus Hotel Istanbul
            </a>
        </nav>
    );
}

export default TrackNav;