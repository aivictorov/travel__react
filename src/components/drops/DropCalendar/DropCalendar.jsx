import { Calendar } from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

import './DropCalendar.scss'

const DropCalendar = ({ dates, setDates }) => {
    return (
        <Calendar
            onChange={setDates}
            value={dates}
            selectRange={true}
            minDate={new Date()}
        />
    );
}

export default DropCalendar;