import React from 'react';
import { news } from '../../sample-data/news';
import { Link } from 'react-router-dom';

const RecentPost = () => {
    return (
        <div className="recent-posts-widget mb-50">
            <h3 className="widget-title">Недавние новости</h3>
            {
                news.map((item, index) => (
                    <div className="show-featured">
                    <div className="post-img">
                        <Link to={"/blog/" + item.transliterated}>
                            <img
                                src={item.imageLink}
                                alt=""
                            />
                        </Link>
                    </div>
                    <div className="post-desc">
                        <Link to={"/blog/" + item.transliterated}>{item.paragraphs[0].split(" ").slice(0, 4).join(" ") + "..."}</Link>
                        <span className="date">
                            <i className="fa fa-calendar"></i>
                            {item.date.toLocaleDateString()}
                        </span>
                    </div>
                </div>
                
                ))
            }
        </div>
    )
}

export default RecentPost;