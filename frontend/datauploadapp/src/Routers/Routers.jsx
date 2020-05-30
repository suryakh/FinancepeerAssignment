import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Switch, Route, Link } from 'react-router-dom'
import Login from '../Common/Login'
import Signup from '../Common/Signup'
import { logout } from '../Redux/Actions'
import Logout from '../Common/Logout'
import Nav from '../Common/Nav'
import Home from '../Components/Home'
import Displaydata from '../Components/Displaydata'

export class Routers extends Component {
    handleClick = () => {
        this.props.logout()
    }
    render() {
        console.log(this.props.value)
        return (
            <>
            <Nav/>
                <div>
                    <Switch>
                        <Route path="/" exact render = {(props)=> <Home {...props} />}/>
                        <Route path='/login' exact render={(props) => <Login  {...props} />} />
                        <Route path='/signup' exact render={(props) => <Signup {...props} />} />
                        <Route path='/logout' exact render={(props) => <Logout {...props} />} />
                        <Route path='/displaydata' exact render={(props) => <Displaydata {...props} />} />
                    </Switch>
                </div>
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    value: state.userReducers
})

const mapDispatchToProps = dispatch => {
    // return {
    //     logout: () => dispatch(logout())
    // }
}

export default connect(mapStateToProps, mapDispatchToProps)(Routers)
