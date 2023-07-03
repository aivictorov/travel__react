import './PassAndClass.scss';

const PassAndClass = ({ passangers, setPassangers, serviceClass, setServiceClass }) => {

    return (
        <div
            className="passAndClassDrop"
        >
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
            <select
                name="serviceClass"
                value={serviceClass}
                onChange={(event) => setServiceClass(event.target.value)}
            >
                <option value="economy">Economy</option>
                <option value="business">Business</option>
            </select>
        </div>
    );
}

export default PassAndClass;