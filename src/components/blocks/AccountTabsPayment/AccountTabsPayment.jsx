import { useEffect, useState } from "react";

const AccountTabsPayment = () => {

    const cardsStartData = [
        {
            id: 0,
            number: 4321,
            valid: '02/27',
        },
    ];

    const [cardsList, setCardsList] = useState(cardsStartData);

    useEffect(() => {
        console.log('Hi');
    }, [cardsList]);

    function addCard() {
        setCardsList(
            [
                ...cardsList,
                {
                    id: 1,
                    number: 7777,
                    valid: '02/28',
                }
            ]
        );
    }

    function deleteCard() {
        setCardsList(
            cardsList.splice(0, cardsList.length - 1)
        );
    }

    return (
        <div
            className="account-tabs__content none"
            tab-content="payment"
            tab-group="account"
        >
            <h2 className="account-tabs__content-title">Payment methods</h2>
            <div className="account-payment">
                {cardsList.map((card) => {
                    return (
                        <div className="account-payment__card">
                            <div className="account-payment__card-top">
                                <div className="account-payment__card-number">
                                    <span>**** **** ****</span>
                                    <span>{card.number}</span>
                                </div>
                                <button
                                    className="account-payment__card-remove-button"
                                    onClick={deleteCard}
                                >
                                    <svg width={24} height={24}>
                                        <use href="#remove-icon" />
                                    </svg>
                                </button>
                            </div>
                            <div className="account-payment__card-bottom">
                                <div className="account-payment__card-valid-thru">
                                    <span>Valid Thru</span>
                                    <span>{card.valid}</span>
                                </div>
                                <div className="account-payment__card-logo">
                                    <svg width={52} height={52}>
                                        <use href="#visa-icon" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    );
                })}
                <div className="account-payment__add-card">
                    <div className="add-card">
                        <div className="add-card__content">
                            <button
                                className="add-card__button"
                                modal-button="links"
                                type="button"
                                onClick={addCard}
                            />
                            <div className="add-card__text">Add a new card</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AccountTabsPayment;