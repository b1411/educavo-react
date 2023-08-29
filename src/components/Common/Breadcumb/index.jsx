import React from "react";
import { Link } from "react-router-dom";

const SiteBreadcrumb = (props) => {
    const {
        parentCategory,
        pageName,
    } = props;

    return (
        // <div className={breadcrumbsClass ? breadcrumbsClass : 'rs-breadcrumbs breadcrumbs-overlay'}>
        // 	<div className="breadcrumbs-img">
        // 		<img
        // 			src={breadcrumbsImg}
        // 			alt="Breadcrumbs"
        // 		/>
        // 	</div>
        // <div className={innerClass ? innerClass : 'breadcrumbs-text white-color'}>
        <div className="container pt-10">
            <Link to="/" className="active">
                {parentCategory ? parentCategory : "Главная"}
            </Link>{" "}
            {" // "}
            <>{pageName ? pageName : "Page Name"}</>
        </div>
        // </div>
        // </div>
    );
};

export default SiteBreadcrumb;
