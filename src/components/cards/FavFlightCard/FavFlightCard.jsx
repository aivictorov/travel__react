import './FavFlightCard.scss';
import FavCheckboxButton from '../../elements/FavCheckboxButton/FavCheckboxButton';
import Button from '../../elements/Button/Button';
import Rating from '../../elements/Rating/Rating';
import { useNavigate } from 'react-router-dom';
import Price from '../../elements/Price/Price';
import { countDuration, formatDate, formatTime } from '../../../utils/dateTimeFunctions'

const FavFlightCard = ({ ticket }) => {
    // const navigate = useNavigate();

    // let flightsArray = [ticket.direct.id];
    // ticket.return.length !== 0 && flightsArray.push(ticket.return.id);

    // function formatString(start, end) {
    //     let startFormatted = formatTime(start);
    //     let endFormatted = formatTime(end);
    //     let nextDay = '';
    //     if (end.getDate() > start.getDate()) nextDay = ' (+1)'
    //     const resultString = `${startFormatted} - ${endFormatted}${nextDay}`
    //     return resultString;
    // };

    return (
        "FAV FLIGHT"
        // <div className="flight-card">
        //     <div className="flight-card__image">
        //         <img
        //             src={ticket.direct.logo}
        //             alt={ticket.airline}
        //         />
        //     </div>
        //     <div className="flight-card__content">
        //         <div className="flight-card__header">
        //             <Rating value={ticket.rating} />
        //             <Price value={ticket.price} before="starting from" />
        //         </div>
        //         <ul className="flight-card__flights">

        //             <li className="flight__row">
        //                 <div className="checkbox">
        //                     <label className="checkbox__label checkbox__label--flight-card">
        //                         <input
        //                             className="checkbox__hidden visually-hidden"
        //                             type="checkbox"
        //                         />
        //                         <div className="checkbox__custom" />
        //                         <div className="checkbox__value">
        //                             <div className="flight__row">
        //                                 <div className="flight__column">
        //                                     <div className="flight__shedule">
        //                                         {formatString(ticket.direct.start, ticket.direct.end)}
        //                                     </div>
        //                                     <div className="flight__airline">
        //                                         Emirates
        //                                     </div>
        //                                 </div>
        //                                 <div className="flight__column">
        //                                     <div className="flight__transfers">
        //                                         non stop
        //                                     </div>
        //                                 </div>
        //                                 <div className="flight__column">
        //                                     <div className="flight__duration">{countDuration(ticket.direct.start, ticket.direct.end)}</div>
        //                                     <div className="flight__codes">EWR-BNA</div>
        //                                 </div>
        //                             </div>
        //                         </div>
        //                     </label>
        //                 </div>
        //             </li>

        //             {ticket.return.length !== 0 &&
        //                 <li className="flight__row">
        //                     <div className="checkbox">
        //                         <label className="checkbox__label checkbox__label--flight-card">
        //                             <input
        //                                 className="checkbox__hidden visually-hidden"
        //                                 type="checkbox"
        //                             />
        //                             <div className="checkbox__custom" />
        //                             <div className="checkbox__value">
        //                                 <div className="flight__row">
        //                                     <div className="flight__column">
        //                                         <div className="flight__shedule">
        //                                             {formatString(ticket.return.start, ticket.return.end)}
        //                                         </div>
        //                                         <div className="flight__airline">
        //                                             Emirates
        //                                         </div>
        //                                     </div>
        //                                     <div className="flight__column">
        //                                         <div className="flight__transfers">
        //                                             non stop
        //                                         </div>
        //                                     </div>
        //                                     <div className="flight__column">
        //                                         <div className="flight__duration">2h 28m</div>
        //                                         <div className="flight__codes">EWR-BNA</div>
        //                                     </div>
        //                                 </div>
        //                             </div>
        //                         </label>
        //                     </div>
        //                 </li>
        //             }

        //         </ul>
        //         <div className="flight-card__buttons">
        //             <FavCheckboxButton id={ticket.direct.id} />
        //             <div className="flight-card__button-wrapper">
        //                 <Button
        //                     text="View Details"
        //                     style="bold w100"
        //                     action={() => {
        //                         if (flightsArray.length === 1) {
        //                             navigate(`/flight-details/${flightsArray[0]}`)
        //                         } else if (flightsArray.length === 2) {
        //                             navigate(`/flight-details/${flightsArray[0]}/${flightsArray[1]}`)
        //                         }
        //                     }}
        //                 />
        //             </div>
        //         </div>
        //     </div>
        // </div>
    );
}

export default FavFlightCard;