module.exports = {
	siteMetadata: {
		title: `__SITE_NAME__`,
		description: `__SITE_DESCRIPTION__`,
		keywords: [],
		siteUrl: `//__SITE_DOMAIN__`,
		social: {
			facebook: ``,
			twitter: ``,
			instagram: ``,
		},
		contact: {
			phone: ``,
			email: ``,
			address: ``,
		},
	},
	plugins: [
		`gatsby-plugin-react-helmet`,
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `__SITE_NAME__`,
				short_name: ``,
				start_url: `/`,
				background_color: `#663399`,
				theme_color: `#663399`,
				display: `minimal-ui`,
			},
		},
		`gatsby-transformer-sharp`,
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.app/offline
		// 'gatsby-plugin-offline',
	],
}
