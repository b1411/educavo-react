import React from 'react';
import { Link } from 'react-router-dom';

const FooterBottom = () => {
    return (
        <div className="footer-bottom">
            <div className="container">
                <div className="row y-middle">
                    <div className="col-lg-6 md-mb-10">
                        <div className="copyright md-mb-0">
                            <p>© 2021 <Link to="/" as="/">ООО "Центр профессионального обучения"</Link> Все права защищены.</p>
                        </div>
                    </div>
                    <div className="col-lg-6 text-end md-text-left">
                        <ul className="copy-right-menu">
                            <li><Link to="/blog" as="/blog">Блог</Link></li>
                            <li><Link to="/contact" as="/contact">Контакты</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FooterBottom;