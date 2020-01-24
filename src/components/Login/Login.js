import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'

export class Login extends Component {
    render() {
        return(
            <div>
                Login
                <button onClick={() => this.props.history.push('/home')}>Login</button>
            </div>
        )
    }
}

export default withRouter(Login);