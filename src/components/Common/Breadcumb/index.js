import React from 'react';
import { Link } from 'react-router-dom';

const SiteBreadcrumb = (props) => {
	const { breadcrumbsClass, innerClass, titleClass, pageTitle, parentCategory, pageCategory, pageName, breadcrumbsImg } = props;

	return (
		<div className={breadcrumbsClass ? breadcrumbsClass : 'rs-breadcrumbs breadcrumbs-overlay'}>
			<div className="breadcrumbs-img">
				<img 
					src={breadcrumbsImg} 
					alt="Breadcrumbs" 
				/>
			</div>
			<div className={innerClass ? innerClass : 'breadcrumbs-text white-color'}>
				<h1 className={titleClass ? titleClass : 'page-title'}>{pageTitle}</h1>
				<ul>
					<li>
						<Link to="/" className="active">{parentCategory ? parentCategory : 'Домой'}</Link>
					</li>
					{pageCategory ? 
						<>
							<li>
								<Link to="/" className="active">{pageCategory ? pageCategory : 'Category'}</Link>
							</li> 
							<li>{pageName ? pageName : 'Page Name'}</li>
						</> : <li>{pageName ? pageName : 'Page Name'}</li>							
					}
				</ul>
			</div>
		</div>
	);
}

export default SiteBreadcrumb;




