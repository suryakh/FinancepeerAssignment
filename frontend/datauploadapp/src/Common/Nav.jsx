import React, { Component } from 'react'
import { connect } from 'react-redux'
import { logout } from '../Redux/Actions'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'


export class Nav extends Component {
    handleClick = () => {
        this.props.logout()
    }
    render() {
        console.log(this.props.value.user)
        return (
            <div className="navdiv p-3">
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="row"><div className="col-9"><h4>Store Data</h4></div></div>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                        <div className="offset-8">
                            <ul className="navbar-nav mt-2 mt-lg-0 float-right">
                                <li className="nav-item">
                                    <div className="col-3 "> <Link to='/'><button className="btn btn-light">Home</button></Link></div>
                                </li>
                                <li className="nav-item">
                                    {!this.props.value.loginStatus && <div className="col-3"> <Link to='/login'><button className="btn btn-light">Login</button></Link></div>}
                                </li>
                                <li className="nav-item">
                                    <div className="col-3"><Link to='/Signup'><button className="btn btn-light">Signup</button></Link></div>
                                </li>
                                <li className="nav-item">
                                    {this.props.value.loginStatus && <div className='row'><button className="btn btn-light "><FontAwesomeIcon icon={faUser} />{this.props.value.user}</button></div>}
                                </li>
                                <li className="nav-item">
                                    {this.props.value.loginStatus && <div className="col-3"><button className="btn btn-light" onClick={() => this.handleClick()}>Logout</button></div>}
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        value: state.userReducers
    }
}

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(logout())
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(Nav)
