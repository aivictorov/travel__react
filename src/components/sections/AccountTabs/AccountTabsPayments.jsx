import { useState, useContext } from "react";
import AddCardButton from './../../modals/AddCard/AddCardButton';
import './AccountTabsPayments.scss';
import { AppContext } from './../../../App';
import { countID } from "../../../utils/functions";

const AccountTabsPayments = () => {
    const { user, setUser } = useContext(AppContext)

    function addCard(number, valid) {
        const id = countID(user.cards)

        setUser({
            ...user,
            cards: [
                ...user.cards,
                { id: id + 1, number: number, valid: valid }
            ]
        })
    };

    function deleteCard(id) {
        console.log(id);
        setUser({
            ...user,
            cards: user.cards.filter((card) => card.id !== id)
        })
    };

    return (
        <div
            className="account-tabs__content"
            tab-content="payment"
            tab-group="account"
        >
            <h2 className="account-tabs__content-title">Payment methods</h2>
            <div className="account-payment">
                {user.cards.map((card) => {
                    return (
                        <div
                            className="account-payment__card"
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
                    <AddCardButton addCard={addCard} />
                </div>
            </div>
        </div>
    );
}

export default AccountTabsPayments;