import './PassAndClass.scss';

const PassAndClass = ({ passangers, setPassangers, serviceClass, setServiceClass }) => {

    const serviceClassList = ["economy", "business"];

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
                onChange={(event) => setServiceClass(event.target.value)}
            >
                {serviceClassList.map((item, index) => {
                    return (
                        <option
                            value={item}
                            selected={item === serviceClass ? true : false}
                        >
                            {item.charAt(0).toUpperCase() + item.slice(1)}
                        </option>
                    )
                })}
            </select>
        </div>
    );
}

export default PassAndClass;