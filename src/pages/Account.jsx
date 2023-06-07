import Footer from "../components/sections/Footer/Footer";
import HeaderInner from "../components/sections/HeaderInner/HeaderInner";
import AccountCover from "../components/sections/AccountCover/AccountCover";
import AccountTabs from "../components/sections/AccountTabs/AccountTabs";

const Account = () => {
    return (
        <>
            <HeaderInner />
            <main className="account">
                <AccountCover />
                <AccountTabs />
            </main>
            <Footer />
        </>
    );
}

export default Account;