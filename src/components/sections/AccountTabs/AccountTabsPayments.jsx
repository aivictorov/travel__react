import { useState } from "react";
import AddCard from "../../blocks/AddCard/AddCard";

const AccountTabsPayments = () => {
    // const cardsData = [
    //     { id: 0, number: 7132, valid: '10/22' },
    //     { id: 1, number: 7132, valid: '10/22' },
    //     { id: 2, number: 8132, valid: '05/24' }
    // ];

    const cardsData = JSON.parse(localStorage.getItem('cards'));

    const [cards, setCards] = useState(cardsData || []);

    function deleteCard(id) {
        const cardsNew = cards.filter((card) => id !== card.id);
        setCards(cardsNew);
        localStorage.setItem('cards', JSON.stringify(cardsNew));
    }

    function addCard(number) {
        let id = 0;

        cards.forEach((card) => {
            if (card.id > id) {
                id = card.id;
            }
        });
        const cardsNew = [...cards, { id: id + 1, number: number, valid: '12/28' }]
        setCards(cardsNew);
        localStorage.setItem('cards', JSON.stringify(cardsNew));
    }

    return (
        <div
            className="account-tabs__content none"
            tab-content="payment"
            tab-group="account"
        >
            <h2 className="account-tabs__content-title">Payment methods</h2>
            <div className="account-payment">
                {cards.map((card) => {
                    return (
                        <div className="account-payment__card"
                            key={card.id}
                        >
                            <div className="account-payment__card-top">
                                <div className="account-payment__card-number">
                                    <span>**** **** ****</span>
                                    <span>{card.number}</span>
                                </div>
                                <button
                                    className="account-payment__card-remove-button"
                                    onClick={() => { deleteCard(card.id) }}
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
                    <AddCard addCard={addCard} />
                </div>
            </div>
        </div>
    );
}

export default AccountTabsPayments;