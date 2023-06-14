import AccountTabsFavHotelsCard from "./AccountTabsFavHotelsCard";

const AccountTabsFavHotels = () => {
    return (
        <div
            className="account-bookings__content"
            tab-content="hotels"
            tab-group="favourites"
        >
            <AccountTabsFavHotelsCard />
            <AccountTabsFavHotelsCard />
        </div>
    );
}

export default AccountTabsFavHotels;