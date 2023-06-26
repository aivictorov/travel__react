import './Checkbox.scss';
import { forwardRef } from 'react';

const Checkbox = forwardRef(({ name, action }, ref = null) => {
    return (
        <div
            className="checkbox"
            key={name}
        >
            <label className="checkbox__label">
                <input
                    className="checkbox__hidden visually-hidden"
                    type="checkbox"
                    name={name}
                    onChange={action}
                    ref={ref}
                />
                <div className="checkbox__custom" />
                <div className="checkbox__value">{name}</div>
            </label>
        </div>
    );
})

export default Checkbox;