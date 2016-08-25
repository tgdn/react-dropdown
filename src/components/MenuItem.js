import React from 'react'
import cx from 'classnames'

class DropdownMenuItem extends React.Component {
    render() {
        const {closeOnClick, wrap, ...otherProps} = this.props
        const classes = cx(
            'Dropdown__menu__item',
            this.props.className ? this.props.className.split(' ') : '', {
            'Dropdown__menu__item--wrap': wrap,
        })
        return (
            <button {...otherProps} className={classes} data-close-on-click={closeOnClick}>
                {this.props.children}
            </button>
        )
    }
}

DropdownMenuItem.propsTypes = {
    closeOnClick: React.PropTypes.bool,
    wrap: React.PropTypes.bool,
}

DropdownMenuItem.defaultProps = {
    closeOnClick: false,
    wrap: false
}

export {DropdownMenuItem}
