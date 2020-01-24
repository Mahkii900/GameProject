import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'

export class Login extends Component {
    state = {
        username: '',
        password: ''
    }

    usernameHandler(event) {
        this.setState({username: event.target.value})
    }

    passwordHandler(event) {
        this.setState({password: event.target.value})
    }

    signUp() {
        alert("You signed up!")
        this.props.history.push('/home')
    }

    render() {
        return(
            <div>
                <div>
                    <h1>Hyperion Genesis</h1>
                </div>
                <div>
                    <h2>Login</h2>
                    <div>
                        <div>
                            <h3>Username</h3>
                            <input type='text' value={this.state.username} onChange={(event) => this.usernameHandler(event)} />
                        </div>
                        <div>
                            <h3>Password</h3>
                            <input type='password' value={this.state.password} onChange={(event) => this.passwordHandler(event)} />
                        </div>
                    </div>
                    <div>
                        <button onClick={() => this.props.history.push('/home')}>Login</button>
                    </div>
                </div>
                <div>
                    <h2>Sign Up</h2>
                    <div>
                        <div>
                            <h3>Username</h3>
                            <input type='text' value={this.state.username} onChange={(event) => this.usernameHandler(event)} />
                        </div>
                        <div>
                            <h3>Password</h3>
                            <input type='text' value={this.state.password} onChange={(event) => this.passwordHandler(event)} />
                        </div>
                        <div>
                            <button onClick={() => this.signUp()}>Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Login);