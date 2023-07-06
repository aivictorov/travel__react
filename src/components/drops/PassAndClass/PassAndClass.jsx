import './PassAndClass.scss';

const PassAndClass = ({ passangers, setPassangers, serviceClass, setServiceClass }) => {

    return (
        <div className="passAndClassDrop">
            <div className="passAndClassDrop__item">
                <div className="passAndClassDrop__item-name">
                    Set number of passangers:
                </div>
                <div className="passAndClassDrop__item-controls">
                    <button
                        type="button"
                        onClick={() => setPassangers(--passangers)}
                        disabled={passangers > 1 ? null : true}
                    >
                        -
                    </button>
                    <input
                        name="passangers"
                        type="number"
                        value={passangers}
                        min={1}
                        onChange={(event) => setPassangers(event.target.value)}
                    />
                    <button type="button" onClick={() => setPassangers(++passangers)}>
                        +
                    </button>
                </div>
            </div>

            <div className="passAndClassDrop__item">
                <div className="passAndClassDrop__item-name">
                    Select class:
                </div>
                <div className="passAndClassDrop__item-controls">
                    <select
                        name="serviceClass"
                        value={serviceClass}
                        onChange={(event) => setServiceClass(event.target.value)}
                    >
                        <option value="economy">Economy</option>
                        <option value="business">Business</option>
                    </select>
                </div>
            </div>
        </div>
    );
}

export default PassAndClass;