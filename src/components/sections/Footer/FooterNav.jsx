import './FooterNav.scss';

const FooterNav = () => {

    const footerNav =
        [
            {
                title: 'Our Destinations',
                items: [
                    { title: 'Canada', link: '#!' },
                    { title: 'Alaska', link: '#!' },
                    { title: 'France', link: '#!' },
                    { title: 'Iceland', link: '#!' },
                ]
            },
            {
                title: 'Our Activities',
                items: [
                    { title: 'Northern Lights', link: '#!' },
                    { title: 'Cruising & sailing', link: '#!' },
                    { title: 'Multi-activities', link: '#!' },
                    { title: 'Kayaing', link: '#!' },
                ]
            },
            {
                title: 'Travel Blogs',
                items: [
                    { title: 'Bali Travel Guide', link: '#!' },
                    { title: 'Sri Lanks Travel Guide ', link: '#!' },
                    { title: 'Peru Travel Guide', link: '#!' },
                    { title: 'Bali Travel Guide', link: '#!' },
                ]
            },


            {
                title: 'About Us',
                items: [
                    { title: 'Our Story', link: '#!' },
                    { title: 'Work with us', link: '#!' },
                ]
            },

            {
                title: 'Contact Us',
                items: [
                    { title: 'Our Story', link: '#!' },
                    { title: 'Work with us', link: '#!' },
                ]
            },
        ];

    return (
        <nav className="footer-nav">
            {footerNav.map((column) => {
                return (
                    <div className="footer-nav__column">
                        <div className="footer-nav__title">{column.title}</div>
                        <ul className="footer-nav__list">
                            {column.items.map((item) => {
                                return (
                                    <li className="footer-nav__item">
                                        <a className="footer-nav__link" href={item.link}>
                                            {item.title}
                                        </a>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                )
            })}
        </nav>
    );
}

export default FooterNav;