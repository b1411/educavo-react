import React from "react";
import PostContent from "../../components/Widget/PostContent";


const BlogDetails = ({ news }) => {
    return (
        <>
            <PostContent news={news} />
        </>
    );
};

export default BlogDetails;
