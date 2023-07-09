import './RecentSearches.scss'
import SectionHeader from '../../blocks/SectionHeader/SectionHeader';
import { useContext } from 'react';
import { AppContext } from './../../../App';
import RecentSearchesCard from './RecentSearchesCard';

const RecentSearches = ({ layout = 'hotels' }) => {
    const { recentSearches } = useContext(AppContext);

    if (layout === 'flights' && recentSearches.flights.length === 0) return null
    if (layout === 'hotels' && recentSearches.hotels.length === 0) return null

    return (
        <section className="recent-searches">
            <div className="container">
                <SectionHeader
                    title="Your recent searches"
                />
                <div className="recent-searches__cards">

                    {layout === 'flights' && recentSearches.flights.map((searchParams, index) => {
                        return (
                            <RecentSearchesCard
                                key={index}
                                searchParams={searchParams}
                            />
                        )
                    })}

                    {layout === 'hotels' && recentSearches.hotels.map((searchParams, index) => {
                        return (
                            <RecentSearchesCard
                                key={index}
                                searchParams={searchParams}
                            />
                        )
                    })}
                </div>
            </div>
        </section>
    );
}

export default RecentSearches;