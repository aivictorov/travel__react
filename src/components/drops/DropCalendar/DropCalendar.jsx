import 'react-calendar/dist/Calendar.css';
import './DropCalendar.scss'
import { Calendar } from 'react-calendar';

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