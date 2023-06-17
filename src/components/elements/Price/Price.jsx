import './Price.scss';

const Price = ({value, period, style, before, after}) => {

    let addClass = '';

    if (style === 'big') {
        addClass = ' price__value--big';
    }

    return (
        <div className="price">
            {before &&
                <div className="price__notice">
                    {before}
                </div>
            }
            <div className="price__main">
                <span
                    className={`price__value${addClass}`}
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