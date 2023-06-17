import './LastMinuteTours.scss'
import tourImg01 from './../../../img/sections/last-minute-tours/01.jpg';
import tourImg02 from './../../../img/sections/last-minute-tours/02.jpg';
import tourImg03 from './../../../img/sections/last-minute-tours/03.jpg';
import tourImg04 from './../../../img/sections/last-minute-tours/04.jpg';
import SectionHeader from '../../blocks/SectionHeader/SectionHeader';
import Button from '../../elements/Button/Button';

const LastMinuteTours = () => {

    const gallery = [tourImg01, tourImg02, tourImg03, tourImg04];

    return (
        <section className="last-minute-tours">
            <div className="container">
                <SectionHeader
                    title="Last minute tours"
                    text="Going somewhere to celebrate this season? Whether you’re going home or somewhere to roam, we’ve got the travel tools to get you to your destination."
                    button="See All"
                />
                <div className="last-minute-tours__content">
                    <div className="last-minute-tours__card">
                        <div className="last-minute-tours__card-header">
                            <div className="last-minute-tours__card-title">
                                Backpacking Sri Lanka
                            </div>
                            <div className="last-minute-tours__card-price">
                                From<span>$700</span>
                            </div>
                        </div>
                        <div className="last-minute-tours__card-text">
                            <p>
                                Traveling is a unique experience as it's the best way to unplug
                                from the pushes and pulls of daily life. It helps us to forget
                                about our problems, frustrations, and fears at home. During our
                                journey, we experience life in different ways. We explore new
                                places, cultures, cuisines, traditions, and ways of living.
                            </p>
                        </div>
                        <div className="last-minute-tours__card-button">
                            <Button text="Book flight" style="light w100" />
                        </div>
                    </div>

                    <div className="last-minute-tours__gallery">
                        {gallery.map((image, index) => {
                            return (
                                <div
                                    className="last-minute-tours__image"
                                    key={index}
                                >
                                    <img
                                        src={image}
                                        alt="Backpacking Sri Lanka"
                                    />
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default LastMinuteTours;