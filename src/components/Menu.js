import React from 'react'

class DropdownMenu extends React.Component {
    render() {
        const {children} = this.props
        return (
            <div className='Dropdown__menu'>
                {children}
            </div>
        )
    }
}

export {DropdownMenu}
