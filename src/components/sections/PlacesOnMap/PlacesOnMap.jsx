import './PlacesOnMap.scss';
import mapImg from './../../../img/sections/places-on-map/map.svg';
import labelImg01 from './../../../img/sections/places-on-map/labels/01.jpg';
import labelImg02 from './../../../img/sections/places-on-map/labels/02.jpg';
import labelImg03 from './../../../img/sections/places-on-map/labels/03.jpg';
import labelImg04 from './../../../img/sections/places-on-map/labels/04.jpg';
import labelImg05 from './../../../img/sections/places-on-map/labels/05.jpg';
import labelArrowImg from './../../../img/sections/places-on-map/arrow-small.svg';
import SectionHeader from '../../blocks/SectionHeader/SectionHeader';

const PlacesOnMap = () => {
    return (
        <section className="places-on-map">
            <div className="container">
                <SectionHeader
                    title="Let's go places together"
                    text="Discover the latest offers and news and start planning your next trip with us."
                    button="See All"
                />
            </div>
            <div className="places-on-map__content">
                <div className="container">
                    <div className="places-on-map__map">
                        <img src={mapImg} alt="map" />
                        <div
                            className="places-on-map__label"
                            style={{ left: 180, top: 70 }}
                        >
                            <div className="places-on-map__label-body">
                                <div className="places-on-map__label-image">
                                    <img
                                        src={labelImg01}
                                        alt="James Doe"
                                    />
                                </div>
                                <div className="places-on-map__label-content">
                                    <div className="places-on-map__label-title">James Doe</div>
                                    <div className="places-on-map__label-subtitle">
                                        Boarding Pass N001
                                    </div>
                                </div>
                            </div>
                            <div className="places-on-map__label-arrow">
                                {" "}
                                <img
                                    src={labelArrowImg}
                                    alt="arrow"
                                    style={{ width: 60 }}
                                />
                            </div>
                        </div>
                        <div
                            className="places-on-map__label"
                            style={{ left: 530, top: 162 }}
                        >
                            <div className="places-on-map__label-body">
                                <div className="places-on-map__label-image">
                                    <img
                                        src={labelImg02}
                                        alt="James Doe"
                                    />
                                </div>
                                <div className="places-on-map__label-content">
                                    <div className="places-on-map__label-title">James Doe</div>
                                    <div className="places-on-map__label-subtitle">
                                        Boarding Pass N002
                                    </div>
                                </div>
                            </div>
                            <div className="places-on-map__label-arrow">
                                {" "}
                                <img
                                    src={labelArrowImg}
                                    alt="arrow"
                                    style={{ width: 60 }}
                                />
                            </div>
                        </div>
                        <div
                            className="places-on-map__label"
                            style={{ left: 220, top: 290 }}
                        >
                            <div className="places-on-map__label-body">
                                <div className="places-on-map__label-image">
                                    <img
                                        src={labelImg03}
                                        alt="James Doe"
                                    />
                                </div>
                                <div className="places-on-map__label-content">
                                    <div className="places-on-map__label-title">James Doe</div>
                                    <div className="places-on-map__label-subtitle">
                                        Boarding Pass N003
                                    </div>
                                </div>
                            </div>
                            <div className="places-on-map__label-arrow">
                                {" "}
                                <img
                                    src={labelArrowImg}
                                    alt="arrow"
                                    style={{ width: 60 }}
                                />
                            </div>
                        </div>
                        <div
                            className="places-on-map__label"
                            style={{ left: 730, top: 105 }}
                        >
                            <div className="places-on-map__label-body">
                                <div className="places-on-map__label-image">
                                    <img
                                        src={labelImg04}
                                        alt="James Doe"
                                    />
                                </div>
                                <div className="places-on-map__label-content">
                                    <div className="places-on-map__label-title">James Doe</div>
                                    <div className="places-on-map__label-subtitle">
                                        Boarding Pass N004
                                    </div>
                                </div>
                            </div>
                            <div className="places-on-map__label-arrow">
                                {" "}
                                <img
                                    src={labelArrowImg}
                                    alt="arrow"
                                    style={{ width: 60 }}
                                />
                            </div>
                        </div>
                        <div
                            className="places-on-map__label"
                            style={{ left: 910, top: 256 }}
                        >
                            <div className="places-on-map__label-body">
                                <div className="places-on-map__label-image">
                                    <img
                                        src={labelImg05}
                                        alt="James Doe"
                                    />
                                </div>
                                <div className="places-on-map__label-content">
                                    <div className="places-on-map__label-title">James Doe</div>
                                    <div className="places-on-map__label-subtitle">
                                        Boarding Pass N005
                                    </div>
                                </div>
                            </div>
                            <div className="places-on-map__label-arrow">
                                {" "}
                                <img
                                    src={labelArrowImg}
                                    alt="arrow"
                                    style={{ width: 60 }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default PlacesOnMap;