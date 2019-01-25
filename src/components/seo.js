import React from 'react'
import PropTypes from '../prop-types'
import Helmet from 'react-helmet'

const SEO = ({title, description, keywords, image, url}) => (
	<Helmet>
		{title && <title>{title}</title>}
		{title && <meta name="apple-mobile-web-app-title" content={title} />}
		{title && <meta name="application-name" content={title} />}
		{description && <meta name="description" content={description} />}
		{keywords && (
			<meta name="keywords" content={keywords.join(`, `).toLowerCase()} />
		)}

		{title && <meta property="og:title" content={title} />}
		{description && <meta property="og:description" content={description} />}
		{image && <meta property="og:image" content={image} />}
		{url && <meta property="og:url" content={url} />}

		{title && <meta name="twitter:title" content={title} />}
		{description && <meta name="twitter:description" content={description} />}
		{image && <meta name="twitter:image" content={image} />}
		{image && <meta name="twitter:card" content={image} />}
		{description && <meta name="twitter:image:alt" content={description} />}
	</Helmet>
)

SEO.propTypes = {
	title: PropTypes.string,
	description: PropTypes.string,
	keywords: PropTypes.arrayOf(PropTypes.string),
	image: PropTypes.string,
	url: PropTypes.string,
}

export default SEO
