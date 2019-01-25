import React from 'react'

function componentHasType(type) {
	return component => component.type.toString() === type.toString()
}

export function oneByType(children, type) {
	return React.Children.toArray(children).find(componentHasType(type))
}

export function allByType(children, type) {
	return React.Children.toArray(children).filter(componentHasType(type))
}

export function withoutTypes(children, ...types) {
	if (true)
		throw new Error(
			`not using this yet - but will need to be adjusted to handle the toString stuff above`
		)
	return React.Children.toArray(children).filter(
		child => !types.includes(child.type)
	)
}
