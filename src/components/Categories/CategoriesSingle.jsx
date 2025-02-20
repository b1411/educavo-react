import React from 'react';
import { Link } from 'react-router-dom'

const CategoriesSingle = (props) => {
    const { itemClass, title, image, iconImg, btnText, catLink } = props;
    return (
        <div className={itemClass}>
            <div className="cate-images">
                <Link to={catLink ? catLink : '/course-3'}>
                    <img
                        src={image}
                        alt={title}
                    />
                </Link>
            </div>
            <div className="contents">
                <div className="img-part">
                    <img
                        src={iconImg}
                        alt={title}
                    />
                </div>
                <div className="content-wrap">
                    <h2 className="title">
                        <Link to={catLink ? catLink : '/course-3'}>{title}</Link>
                    </h2>
                    {/* <span className="course-qnty">{quantity}</span> */}
                    {btnText ? <><div className="btn2"><Link to={catLink ? catLink : '/course-3'}>{btnText}</Link></div></> : ''}
                </div>
            </div>
        </div>
    )
}

export default CategoriesSingle