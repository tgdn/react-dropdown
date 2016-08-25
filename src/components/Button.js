import React from 'react'
import ReactDOM from 'react-dom'
import cx from 'classnames'
import IoIosArrowDown from 'react-icons/lib/io/ios-arrow-down'

import {Dropdown} from './Dropdown'

class DropdownButton extends React.Component {

    constructor(props) {
        super(props)
        this.handleClickOutside = this.handleClickOutside.bind(this)
    }

    handleBtnClick(e) {
        this.dropdown.toggle()
    }

    handleClickOutside(e) {
        const domNode = ReactDOM.findDOMNode(this)
        if ( (!domNode || !domNode.contains(e.target) || (JSON.parse(e.target.getAttribute('data-close-on-click')) == true)) ) {
            this.dropdown.hide()
        }
    }

    componentDidMount() {
        document.addEventListener('click', this.handleClickOutside, true)
    }

    componentWillUnmount() {
        document.removeEventListener('click', this.handleClickOutside, true)
    }

    render() {
        const {title, className, children, noCaret, btnStyle, ...otherProps} = this.props
        const btnclasses = cx('Dropdown__button', className ? className.split(' ') : '', {
            'Dropdown__button--open': false,
        })
        return (
            <div className='Dropdown__container'>
                <button
                    className={btnclasses}
                    onClick={this.handleBtnClick.bind(this)}
                >
                    {title}
                    {!noCaret && <IoIosArrowDown style={{marginLeft: '8px', marginRight: '-4px'}} />}
                </button>
                <Dropdown {...otherProps} ref={(c) => this.dropdown = c}>
                    {children}
                </Dropdown>
            </div>
        )
    }
}

DropdownButton.propsTypes = {
    title: React.PropTypes.oneOfType([
        React.PropTypes.number,
        React.PropTypes.string,
        React.PropTypes.node
    ]).isRequired,
    noCaret: React.PropTypes.bool,
}

DropdownButton.defaultProps = {
    title: 'Button',
    className: '',
    noCaret: false,
}


export {DropdownButton}
