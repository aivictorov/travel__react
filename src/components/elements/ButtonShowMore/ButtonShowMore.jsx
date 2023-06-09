const ButtonShowMore = ({ numberOfResults, setNumberOfResults }) => {
    return (
        <button
            className="button button--dark button--bold"
            type="button"
            style={{ width: "100%" }}
            onClick={() => { setNumberOfResults(numberOfResults + 1) }}
        >
            Show more
        </button>
    );
}

export default ButtonShowMore;