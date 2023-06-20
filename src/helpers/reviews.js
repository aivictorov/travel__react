const maxUserID = 1;
const maxHotelID = 1000;

function generateReviews(count) {
    let reviews = [];

    for (let index = 0; index < count; index++) {
        const id = index;
        const userID = Math.floor(Math.random() * maxUserID);
        const hotelID = Math.floor(Math.random() * maxHotelID);
        const rating = (Math.random() * 5).toFixed(1);

        let review = {
            id: id,
            userID: userID,
            hotelID: hotelID,
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            rating: rating,
        };

        reviews.push(review)
    };

    return reviews;
};

const reviews = generateReviews(50000);

export default reviews;