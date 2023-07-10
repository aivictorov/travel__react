import './Price.scss';
import { addClass } from '../../../utils/functions';

const Price = ({value, period, style, before, after}) => {

    let add = addClass('price__value', style);

    return (
        <div className="price">
            {before &&
                <div className="price__notice">
                    {before}
                </div>
            }
            <div className="price__main">
                <span
                    className={'price__value' + add}
                >
                    {`$${value}`}
                </span>
                {period &&
                    <span className="price__period">
                        /{period}
                    </span>
                }
            </div>
            {after &&
                <div className="price__notice">
                    {after}

                </div>
            }
        </div>
    );
}

export default Price;