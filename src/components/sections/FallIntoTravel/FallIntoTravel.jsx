import './FallIntoTravel.scss';
import travelImg01 from './../../../img/sections/fall-into-travel/01.jpg';
import travelImg02 from './../../../img/sections/fall-into-travel/02.jpg';
import travelImg03 from './../../../img/sections/fall-into-travel/03.jpg';
import travelImg04 from './../../../img/sections/fall-into-travel/04.jpg';
import SectionHeader from '../../blocks/SectionHeader/SectionHeader';
import FallIntoTravelCard from './FallIntoTravelCard';

const FallIntoTravel = ({ layout = "flights" }) => {

    return (
        <section className="fall-into-travel">
            <div className="container">
                <SectionHeader
                    title="Fall into travel"
                    text="Going somewhere to celebrate this season? Whether you’re going home or somewhere to roam, we’ve got the travel tools to get you to your destination."
                    button="See All"
                />
                <div className="fall-into-travel__cards">
                    <FallIntoTravelCard
                        layout={layout}
                        city="New York"
                        title="USA"
                        text="An amazing journey"
                        price="700"
                        img={travelImg01}
                    />
                    <FallIntoTravelCard
                        layout={layout}
                        city="Paris"
                        title="Paris"
                        text="A Paris Adventure"
                        price="600"
                        img={travelImg02}
                    />
                    <FallIntoTravelCard
                        layout={layout}
                        city="London"
                        title="London"
                        text="London eye adventure"
                        price="350"
                        img={travelImg03}
                    />
                    <FallIntoTravelCard
                        layout={layout}
                        city="Rome"
                        title="Italy"
                        text="Amazing streets"
                        price="700"
                        img={travelImg04}
                    />
                </div>
            </div>
        </section>
    );
}

export default FallIntoTravel;