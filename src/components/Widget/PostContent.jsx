import React from "react";

const PostContent = ({ news }) => {
    return (
        <div className="blog-deatails">
            <div className="bs-img">
                <img src={news.imageLink} alt="Post" />
            </div>
            <div className="blog-full">
                <ul className="single-post-meta">
                    <li>
                        <span className="p-date">
                            {" "}
                            <i className="fa fa-calendar-check-o"></i>{" "}
                            {news.date.toLocaleDateString()}{" "}
                        </span>
                    </li>
                </ul>
                <div className="blog-desc">
                    <p style={{
                        fontSize: "1.5rem",
                        fontWeight: "bold"
                    }}>{news.title}</p>
                    {news.paragraphs.map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PostContent;
