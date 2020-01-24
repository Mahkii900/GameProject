import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'

export class Nav extends Component {
    render() {
        return(
            <div>
                <button onClick={() => this.props.history.push('/home')}>Home</button>
                <button onClick={() => this.props.history.push('/fleet')}>Fleet</button>
                <button onClick={() => this.props.history.push('/econ')}>Econ</button>
                <button onClick={() => this.props.history.push('/diplomacy')}>Diplomacy</button>
                <button onClick={() => this.props.history.push('/')}>Logout</button>
            </div>
        )
    }
}

export default withRouter(Nav)