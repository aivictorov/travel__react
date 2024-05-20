import './Tabs.scss';

const Tabs = ({ tabs, style = "" }) => {
    return (tabs.length > 0 &&
        <div
            className={`tabs${style ? ' tabs--' + style : ""}`}
        >
            {tabs.map((tab, index) => {
                return (
                    <div
                        key={index}
                        className={`tabs__item-wrapper${style ? ' tabs__item-wrapper--' + style : ""}`}
                    >
                        <button
                            className={`tabs__item${tab.active ? ' active' : ""}`}
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