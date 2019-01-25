import PropTypes from 'prop-types'

const {oneOfType, arrayOf, node, func} = PropTypes

const children = oneOfType([arrayOf(node), node, func])

export default {
	...PropTypes,
	children,
}
