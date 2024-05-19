import './Tabs.scss';

const Tabs = ({ tabs }) => {
    return (tabs.length > 0 &&
        <div className="tabs">
            {tabs.map((tab, index) => {
                return (
                    <div className="tabs__item-wrapper">
                        <button
                            key={index}
                            className={`tabs__item ${tab.active ? 'active' : null}`}
                            type="button"
                            onClick={tab.action}
                        >
                            {tab.svgID &&
                                <div className="tabs__item-icon">
                                    <svg width={24} height={24}>
                                        <use href={`#${tab.svgID}`} />
                                    </svg>
                                </div>
                            }
                            <div className="tabs__item-content">
                                <div className="tabs__item-title">{tab.title}</div>
                                {tab.subtitle &&
                                    <div className="tabs__item-subtitle">{tab.subtitle}</div>
                                }
                            </div>
                        </button>
                    </div>
                )
            })}
        </div>
    );
}

export default Tabs;