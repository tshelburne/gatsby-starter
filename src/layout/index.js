import React from 'react'
import PropTypes from '../prop-types'
import {StaticQuery, graphql} from 'gatsby'

import Header from './header'
import Footer from './footer'

const Layout = ({children}) => (
	<StaticQuery
		query={graphql`
			{
				site {
					m: siteMetadata {
						title
					}
				}
			}
		`}
		render={data => (
			<React.Fragment>
				<Header siteTitle={data.site.m.title} />
				{children}
				<Footer />
			</React.Fragment>
		)}
	/>
)

Layout.propTypes = {
	children: PropTypes.node.isRequired,
}

export default Layout
