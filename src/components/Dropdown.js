import React from 'react'
import cx from 'classnames'

class Dropdown extends React.Component {

    state = {
        opened: false,
        marginRight: 'initial'
    }

    constructor(props) {
        super(props)

    }

    show() {
        this.setState({
            opened: true
        })
    }

    hide() {
        this.setState({
            opened: false
        })
    }

    toggle() {
        this.setState({
            opened: !this.state.opened
        })
    }

    componentDidMount() {
        this.setState({
            opened: this.props.opened
        })
        if (this.props.center) {
            this.setState({
                marginRight: -1 * parseInt(this.component.offsetWidth / 2) + 'px'
            })
        }
    }

    componentWillUnmount() {
    }

    render() {
        const classes = cx('Dropdown__main', this.props.className, {
            'Dropdown__main--center': this.props.center,
            'Dropdown__main--left': this.props.pullLeft,
            'Dropdown__main--right': this.props.pullRight,
            'Dropdown__main--align-left': this.props.alignLeft,
            'Dropdown__main--align-right': this.props.alignRight,

            'Dropdown__main--opened': this.state.opened,

            'Dropdown__main--arrow': !this.props.noArrow,
            'Dropdown__main--arrow--left': this.props.arrowLeft,
            'Dropdown__main--arrow--right': this.props.arrowRight,
        })

        return (
            <div className={classes} style={{marginRight: this.state.marginRight}} ref={(c) => this.component = c}>
                {this.props.children}
            </div>
        )
    }
}

Dropdown.propsTypes = {
    onOpen: React.PropTypes.func,
    onClose: React.PropTypes.func,
    opened: React.PropTypes.bool,
    noArrow: React.PropTypes.bool,
    arrowLeft: React.PropTypes.bool,
    arrowRight: React.PropTypes.bool,
    center: React.PropTypes.bool,
    pullLeft: React.PropTypes.bool,
    pullRight: React.PropTypes.bool,
    alignLeft: React.PropTypes.bool,
    alignRight: React.PropTypes.bool,
}

Dropdown.defaultProps = {
    opened: false,
    noArrow: false,
    arrowLeft: false,
    arrowRight: false,
    center: false,
    pullLeft: false,
    pullRight: false,
    alignLeft: false,
    alignRight: false,
}

export {Dropdown}
