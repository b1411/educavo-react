import React, {useState} from "react";
import SinglePostSix from "../../components/Blog/SinglePostSix";
import { news as News } from "../../sample-data/news";
import { Fade } from "react-reveal";

const BlogMain = () => {
    const [news, setNews] = useState(News);
    return (
        <div className="rs-inner-blog orange-style pt-100 pb-100 md-pt-70 md-pb-80">
            <div className="container">
                <div className="row">
                    {/* <div className="col-lg-4 col-md-12 order-last">
                        <Fade right>
                            <div className="widget-area">
                                <SinglePostSidebar />
                            </div>
                        </Fade>
                    </div> */}

                    <div className="pr-50 md-pr-16">
                        <div className="row">
                            {news.reverse().map((item, index) => (
                                <Fade left>
                                    <div className="col-lg-12 mb-70 md-mb-50">
                                        <SinglePostSix
                                            key={index}
                                            blogImage={item.imageLink}
                                            blogPublishedDate={item.date.toLocaleDateString()}
                                            blogTitle={item.title}
                                            blogDesc={item.paragraphs[0]}
                                            blogButtonClass="blog-button"
                                            transliterated={item.transliterated}
                                            blogButtonText="Продолжить чтение"
                                        />
                                    </div>
                                </Fade>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogMain;
