import { Link } from 'react-router-dom';

const SinglePostSix = (props) => {
    const { blogClass, blogImage, blogTitle, blogPublishedDate, blogDesc, blogButtonClass, blogButtonText, transliterated } = props;
    return (
        <div className={blogClass ? blogClass : 'blog-item'}>
            <div className="blog-img">
                <Link to={"/blog/" + transliterated}>
                    <img
                        src={blogImage} 
                        alt={blogTitle}
                        style={{
                            width: "100%"
                        }}
                    />
                </Link>
            </div>
            <div className="blog-content">
                <h3 className="blog-title">
                    <Link to={"/blog/" + transliterated}>
                        {blogTitle ? blogTitle : 'University while the lovely valley team work'}
                    </Link> 
                </h3>
                <div className="blog-meta">
                    <ul className="btm-cate">
                        <li>
                            <div className="blog-date">
                                <i className="fa fa-calendar-check-o"></i> {blogPublishedDate ? blogPublishedDate : 'September 14, 2020'}
                            </div>
                        </li>
                    </ul> 
                </div>
                <div className="blog-desc">
                    {blogDesc ? blogDesc : 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam... '}
                </div>
                <div className={blogButtonClass ? blogButtonClass : 'blog-button'}>
                    <Link to={"/blog/" + transliterated} className="blog-btn">
                        {blogButtonText ? blogButtonText : 'Continue Reading'}
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default SinglePostSix